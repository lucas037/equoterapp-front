'use client'
import React, { useEffect, useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import Header from "@/components/Header";
import BotaoDocumento from './BotaoDocumentos';
import { motion } from 'framer-motion';
import axios from 'axios';
import tokenStorage from "../../utils/token";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RefreshIcon from '@mui/icons-material/Refresh';
import Modal from './Modal';
import ModalMotivo from './ModalMotivo';
export default function ValidarCadastro() {
  const [documentStatuses, setDocumentStatuses] = useState({});
  const [documents, setDocuments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [motivoModalOpen, setMotivoModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');




  const mostrarMotivo = (motivo: string) => {
    setModalMessage(motivo);
    setMotivoModalOpen(true);
  }

  const fetchDocuments = async () => {
    try {
      const token = tokenStorage.getToken();
      const meResponse = await axios.get('http://localhost:8080/api/v1/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const familiarID = meResponse.data.familiar.id;

      console.log("Buscando documentos do familiar com id", familiarID);

      const responseFamiliar = await axios.get(`http://localhost:8080/api/v1/familiar/getPatients/${familiarID}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (responseFamiliar.data.length === 0) {
        console.error("Nenhum paciente encontrado para o familiar com id", familiarID);
        return;
      }

      const patientId = responseFamiliar.data[0].id;

      console.log("Buscando documentos do paciente com id", patientId);

      const response = await axios.get(`http://localhost:8080/api/v1/medicaldocuments/getAll/${patientId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const documentsFromAPI = response.data;  // Recebe a lista completa dos documentos
      const statusMap = {};

      // Mapeia o status dos documentos
      documentsFromAPI.forEach((doc: any) => {
        statusMap[doc.type] = doc.status;
      });

      setDocumentStatuses(statusMap);
      setDocuments(documentsFromAPI);  // Armazena os documentos retornados da API

    } catch (error) {
      console.error("Erro ao buscar documentos", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        const tokenNovo = tokenStorage.getToken();
        console.log("Token novo", tokenNovo);
        fetchDocuments();
      } else {
        alert('falha ao buscar documentos');
      }
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);



  const resendDocument = async (documentId: number) => {
    const input = document.createElement('input');
    input.type = 'file';

    console.log("entrando na função de reenvio do documento ", documentId);

    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const token = tokenStorage.getToken();

          console.log("token usado", token);

          const meResponse = await axios.get('http://localhost:8080/api/v1/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          const familiarID = meResponse.data.familiar.id;

          console.log("Buscando documentos do familiar com id", familiarID);

          const responseFamiliar = await axios.get(`http://localhost:8080/api/v1/familiar/getPatients/${familiarID}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (responseFamiliar.data.length === 0) {
            console.error("Nenhum paciente encontrado para o familiar com id", familiarID);
            return;
          }

          const patientId = responseFamiliar.data[0].id;

          console.log("reenviando documento médico", patientId);



          await axios.post(
            `http://localhost:8080/api/v1/medicaldocuments/resendDocument/${patientId}/${documentId}`,
            formData,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          // Documento enviado com sucesso! Abrir modal.
          setModalOpen(true);

          // Atualizar os documentos após o upload
          fetchDocuments();

        } catch (error) {
          console.error("Erro ao enviar documento", error);
          if (error.response && error.response.status === 401) {
            await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
            const tokenNovo = tokenStorage.getToken();
            console.log("Token novo", tokenNovo);
            handleFileUpload(documentType);
          } else {
            alert('Falha ao enviar o documento');
          }
        }
      }
    };

    input.click();
  };

  const handleNavigation = () => {
    window.location.href = '/login';
  };

  const downloadDocument = async (id: number) => {
    try {
      const token = tokenStorage.getToken();
      const meResponse = await axios.get('http://localhost:8080/api/v1/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });


      const familiarID = meResponse.data.familiar.id;

      console.log("Buscando documentos do familiar com id", familiarID);

      const responseFamiliar = await axios.get(`http://localhost:8080/api/v1/familiar/getPatients/${familiarID}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (responseFamiliar.data.length === 0) {
        console.error("Nenhum paciente encontrado para o familiar com id", familiarID);
        return;
      }

      const patientId = responseFamiliar.data[0].id;
      console.log("Baixando documento do paciente com id", patientId, "e id do documento", id);

      // Fazer a requisição para obter o documento em formato blob
      const response = await axios.get(`http://localhost:8080/api/v1/medicaldocuments/${patientId}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        responseType: 'blob', // Define que a resposta será um blob (arquivo)
      });


      console.log(response.headers)

      // Extrair o nome do arquivo do cabeçalho 'content-disposition'
      const contentDisposition = response.headers['content-disposition'];
      let fileName = 'documento_desconhecido.pdf';  // Nome padrão caso não encontre

      if (contentDisposition) {
        // O nome do arquivo geralmente está dentro do content-disposition na forma: 'attachment; filename="arquivo.pdf"'
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/);

        if (fileNameMatch.length > 1) {
          fileName = fileNameMatch[1];  // Define o nome do arquivo extraído
        }
        console.log(fileName)
      }

      // Criar um link temporário para o download do arquivo
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);

      // Criar um elemento <a> temporário para acionar o download
      const link = document.createElement('a');
      link.href = url;

      // Definir o nome do arquivo extraído do content-disposition
      link.setAttribute('download', fileName);

      // Acionar o download
      document.body.appendChild(link);
      link.click();

      // Limpar o URL e remover o link temporário
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Erro ao baixar documento", error);

    }
  };



  const handleFileUpload = (documentType: string) => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', documentType);

        try {
          const token = tokenStorage.getToken();

          console.log("token usado", token);

          const meResponse = await axios.get('http://localhost:8080/api/v1/auth/me', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          const familiarID = meResponse.data.familiar.id;

          console.log("Buscando documentos do familiar com id", familiarID);

          const responseFamiliar = await axios.get(`http://localhost:8080/api/v1/familiar/getPatients/${familiarID}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (responseFamiliar.data.length === 0) {
            console.error("Nenhum paciente encontrado para o familiar com id", familiarID);
            return;
          }

          const patientId = responseFamiliar.data[0].id;

          console.log("Buscando documentos do paciente com id", patientId);



          await axios.post(
            `http://localhost:8080/api/v1/medicaldocuments/${patientId}`,
            formData,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          // Documento enviado com sucesso! Abrir modal.
          setModalOpen(true);

          // Atualizar os documentos após o upload
          fetchDocuments();

        } catch (error) {
          console.error("Erro ao enviar documento", error);
          if (error.response && error.response.status === 401) {
            await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
            const tokenNovo = tokenStorage.getToken();
            console.log("Token novo", tokenNovo);
            handleFileUpload(documentType);
          } else {
            alert('Falha ao enviar o documento');
          }
        }
      }
    };

    input.click();
  };

  // Dados dos documentos
  const documentData = [
    { id: 1, title: "AUTORIZAÇÃO DE DADOS", type: "aut_dados", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/Autorização de dados (4).pdf" },
    { id: 2, title: "AVALIAÇÃO COMPLEMENTAR", type: "av_complementar", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/avaliação complementar corrigida.pdf" },
    { id: 3, title: "AVALIAÇÃO FISIOTERÁPICA", type: "av_fisioterápica", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/Ficha de Avaliação Fisioterápica (2.2).pdf" },
    { id: 4, title: "AVALIAÇÃO FONOUDIOLÓGICA", type: "av_fonoudiológica", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/Ficha de Avaliação Fonoaudiólogo (2.4).pdf" },
    { id: 5, title: "AVALIAÇÃO PSICOLÓGICA", type: "av_psicológica", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/Ficha de Avaliação Psicológica (2.3).pdf" },
    { id: 7, title: "TERMO DE RESPONSABILIDADE", type: "termo_responsabilidade", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/Termo de responsabilidade (3).pdf" },
    { id: 6, title: "FICHA AVALIAÇÃO MÉDICA", type: "av_médica", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" }
  ];

  const getStatusLabel = (type: string) => {
    const status = documentStatuses[type];
    if (status === 1) return "ENVIADO";
    if (status === 2) return "REPROVADO";
    if (status === 3) return "APROVADO";
    return "PENDENTE";
  };

  const getStatusColor = (status: number) => {
    if (status === 1) return "text-blue-500"; // ENVIADO
    if (status === 2) return "text-red-500";  // REPROVADO
    if (status === 3) return "text-green-500"; // APROVADO
    return "";  // PENDENTE
  };

  const getButtonLabel = (status: number) => {
    if (status === 1 || status === 3) return "Ver Documento"; // ENVIADO ou APROVADO
    if (status === 2) return "Reenviar";  // REPROVADO
    return "Enviar Documento";  // PENDENTE
  };

  const getButtonIcon = (status: number) => {
    if (status === 1 || status === 3) return <RemoveRedEyeIcon />;  // ENVIADO ou APROVADO
    if (status === 2) return <RefreshIcon />;  // REPROVADO
    return <FileUploadIcon />;  // PENDENTE
  };

  return (
    <motion.div>
      {/* Exibe o modal se estiver aberto */}
      {modalOpen && (
        <Modal handleClose={() => setModalOpen(false)} text="Documento médico enviado com sucesso!" />
      )}
      <div>
        <Header
          buttonName='Sair'
          handleClick={handleNavigation}
          buttonsNames={["Submeter Documentos", "Dúvidas", "Contato", "Perfil"]}
          colaborador={false}
        />

        <div className="w-full h-full px-20">
          <div className="gap-x-8 gap-y-12 w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-black p-4">
            {documentData.map((document) => (
              <div key={document.id} className="relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                  <p className="text-xl text-[rgb(65,100,99)] mb-1 flex items-center justify-center ">
                    {document.title}
                  </p>
                  <div className="relative">
                    <img src={document.imageSrc} alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-64" />
                    <a href={document.downloadLink} download className="absolute inset-0 flex items-center justify-center w-full">
                      <div className="flex items-center justify-center border-2 rounded-md border-black p-2 bg-white bg-opacity-80 mx-4 md:mx-8 w-auto max-w-full">
                        <span className="text-black text-lg font-bold md:text-base sm:text-sm whitespace-nowrap">
                          BAIXAR MODELO
                        </span>
                        <DownloadIcon className="ml-2 md:text-base sm:text-sm" />
                      </div>
                    </a>
                  </div>
                </motion.div>
                <p className={`text-lg font-bold my-2 flex justify-center items-center ${getStatusColor(documentStatuses[document.type])}`}>
                  {documentStatuses[document.type] === 2 ? (
                    <>
                      <button onClick={() => mostrarMotivo(documents.find((doc: any) => doc.type === document.type)?.justification)} className="bg-gray-200 px-4 py-2 rounded">
                        REPROVADO
                      </button>
                    </>
                  ) : (
                    getStatusLabel(document.type)
                  )}
                </p>
                <BotaoDocumento
                  icon={getButtonIcon(documentStatuses[document.type])}
                  buttonName={getButtonLabel(documentStatuses[document.type])}
                  handleClick={() => {
                    if (documentStatuses[document.type] === 1 || documentStatuses[document.type] === 3) {
                      console.log("Ver documento");
                      const documento = documents.find((doc: any) => doc.type === document.type);
                      console.log(documento.id);
                      downloadDocument(documento.id);
                    } else if (documentStatuses[document.type] === 2) {
                      const documento = documents.find((doc: any) => doc.type === document.type);
                      console.log("clicou em reenviar");
                      resendDocument(documento.id);
                    } else {
                      handleFileUpload(document.type);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal handleClose={() => setModalOpen(false)} text="Documento submetido com sucesso!" />
      )}
      {motivoModalOpen && (
        <ModalMotivo handleClose={() => setMotivoModalOpen(false)} text={modalMessage} />
      )}
    </motion.div>
  );
}