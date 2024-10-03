'use client';
import React, { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import BotaoAceitar from './BotaoAceitar';
import BotaoRecusar from './BotaoRecusar';
import InfoResponsavel from './InfoResponsavel';
import axios from 'axios';
import tokenStorage from '../utils/token';
import Modal from './Modal';

export default function Verificacao() {
  const [documents, setDocuments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const id_provisorio = 1;


  const handleReprovar = async (id: number) => {
    try {
      const token = tokenStorage.getToken();
      console.log("Token", token);

      const response = await axios.patch(`http://localhost:8080/api/v1/medicaldocuments/updateStatus/${id_provisorio}/${id}`,
        {
          status: 2
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setModalMessage('Documento reprovado com sucesso');
        setModalOpen(true);

      console.log("Documento reprovado com sucesso", response.data);
      fetchDocumentData();
    } catch (error) {
      console.error("Erro ao reprovar documento", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        handleReprovar(id);
      }
    }
  }

  const handleAprovar = async (id: number) => {
    try {
      const token = tokenStorage.getToken();
      console.log("Token", token);

      const response = await axios.patch(`http://localhost:8080/api/v1/medicaldocuments/updateStatus/${id_provisorio}/${id}`,
        {
            status: 3
        },
        {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setModalMessage('Documento aprovado com sucesso');
      setModalOpen(true);

      console.log("Documento aprovado com sucesso", response.data);
      fetchDocumentData();
    } catch (error) {
      console.error("Erro ao aprovar documento", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        handleAprovar(id);
      }
    }
  };

  const fetchDocumentData = async () => {
    try {
      const token = tokenStorage.getToken();
      const response = await axios.get(`http://localhost:8080/api/v1/medicaldocuments/getAll/${id_provisorio}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDocuments(response.data);
    } catch (error) {
      console.error("Erro ao listar documentos", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        fetchDocumentData();
      }
    }
  };

  useEffect(() => {
    fetchDocumentData();
  }, []);

  const handleNavigation = () => {
    window.location.href = '/login';
  };

  const downloadDocument = async (id: number) => {
    try {
      

      console.log("Baixando documento do paciente com id", id_provisorio, "e id do documento", id);
      const token = tokenStorage.getToken();
      console.log("Token", token);

      // Fazer a requisição para obter o documento em formato blob
      const response = await axios.get(`http://localhost:8080/api/v1/medicaldocuments/${id_provisorio}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        responseType: 'blob',
      });
      

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

  const mapDocumentTypeToTitle = (type: string) => {
    switch (type) {
      case "aut_dados":
        return "AUTORIZAÇÃO DE DADOS";
      case "av_complementar":
        return "AVALIAÇÃO COMPLEMENTAR";
      case "av_fisioterápica":
        return "AVALIAÇÃO FISIOTERÁPICA";
      case "av_fonoudiológica":
        return "AVALIAÇÃO FONOUDIOLÓGICA";
      case "av_psicológica":
        return "AVALIAÇÃO PSICOLÓGICA";
      case "termo_responsabilidade":
        return "TERMO DE RESPONSABILIDADE";
      case "av_médica":
        return "FICHA AVALIAÇÃO MÉDICA";
      default:
        return "DOCUMENTO";
    }
  };

  const renderStatusActions = (document: any) => {
    if (document.status === 1) {
      return (
        <div className='mt-2 h-full space-y-4'>
          <BotaoAceitar buttonName="Aprovar" handleClick={() => handleAprovar(document.id)} />
          <BotaoRecusar buttonName="Reprovar" handleClick={() => handleReprovar(document.id)} />
        </div>
      );
    }else if (document.status === 3) {
        return (
          <div className="flex justify-center items-center mt-2">
            <p className="text-green-600 font-bold   uppercase ">Aprovado</p>
          </div>
        );
      } else if (document.status === 2) {
        return (
          <div className="flex flex-col justify-center items-center mt-2 space-y-2">
            <p className="text-red-600 font-bold uppercase">Reprovado</p>
            <button className="bg-gray-200 px-4 py-2 rounded">Motivo</button>
          </div>
        );
      }
    };

  const image = "/assets/Capturar.PNG";
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { type: "tween", ease: "anticipate", duration: 0.6 } },
    exit: { opacity: 0, x: "100vw", transition: { type: "tween", ease: "anticipate", duration: 0.6 } },
  };

  return (
    <motion.div initial={pageVariants.initial} animate={pageVariants.animate} exit={pageVariants.exit}>
      <div>
        <Header
          buttonName='Sair'
          handleClick={handleNavigation}
          buttonsNames={["Verificar Documentos", "Sessões", "Gerenciamento", "Perfil"]}
          colaborador={true}
        />

        <div className="w-full h-full px-20">
          <InfoResponsavel nome='MARIA JOSEFINA PAULINA' />
          <div className="gap-x-8 gap-y-12 w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-black p-4">
            {documents.map((document) => (
              <div key={document.id} className="relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                  <p className="text-xl text-[#214E4D] mb-1">{mapDocumentTypeToTitle(document.type)}</p>

                  <div className="relative">
                    <img src={image} alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-64" />
                    <button onClick={() => downloadDocument(document.id)} className="absolute inset-0 flex items-center justify-center w-full">
                      <div className="flex items-center justify-center border-2 rounded-md border-black p-2 bg-white bg-opacity-80 mx-4 md:mx-8 w-auto max-w-full">
                        <span className="text[#214E4D] text-lg font-bold md:text-base sm:text-sm whitespace-nowrap">
                          VER DOCUMENTO
                        </span>
                        <RemoveRedEyeIcon className="ml-2 md:text-base sm:text-sm" />
                      </div>
                    </button>
                  </div>
                </motion.div>
                <div className =" justify-center items-center "> {renderStatusActions(document)} </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal handleClose={() => setModalOpen(false)} text= {modalMessage} />
      )}
    </motion.div>
  );
}
