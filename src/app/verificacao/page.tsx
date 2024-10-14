'use client';
import React, { use, useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Header from "@/components/Header";
import { m, motion } from 'framer-motion';
import BotaoAceitar from './BotaoAceitar';
import BotaoRecusar from './BotaoRecusar';
import InfoResponsavel from './InfoResponsavel';
import axios from 'axios';
import tokenStorage from '../../utils/token';
import Modal from './Modal';
import ModalMotivo from './modalMotivo';

// Modal para o motivo de reprovação
function JustificationModal({ isOpen, handleClose, handleSubmit }) {
  const [justification, setJustification] = useState('');

  const submitAndClose = () => {
    if (justification.trim() !== '') {
      handleSubmit(justification);
      setJustification('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Motivo da Reprovação</h2>
        <textarea
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          className="w-full h-24 border rounded-md p-2 mb-4"
          placeholder="Digite o motivo da reprovação..."
        />
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={submitAndClose}
          >
            Enviar Motivo
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Verificacao() {
  const [documents, setDocuments] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [motivoModalOpen, setMotivoModalOpen] = useState(false);
  const [justificationModalOpen, setJustificationModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(null);
  const [patientId, setPatientId] = useState<number | null>(null);
  const [nome, setNome] = useState<string | null>(null);

  const pegarNome = async () => {
    try {
      const token = tokenStorage.getToken();
      const response = await axios.get(
        `http://localhost:8080/api/v1/patient/${patientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      console.log(response.data);
      setNome(response.data.name);
    } catch (error) {
      console.error("Erro ao pegar nome", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        pegarNome();
      }
    }
    
  };

  useEffect(() => {
    if (patientId !== null) {
      pegarNome();
    }
  }, [patientId]);

  useEffect(() => {
    const storedPatientId = localStorage.getItem('pacienteId');
    const storedPatientIdNumber = Number(storedPatientId);
    if (storedPatientId) {
      setPatientId(Number(storedPatientId));
    }
  }, []);


  const mostrarMotivo = (motivo: string) => {
    setModalMessage(motivo);
    setMotivoModalOpen(true);
  }

  const handleReprovar = async (id: number, justification: string) => {
    try {
      const token = tokenStorage.getToken();
      const response = await axios.patch(
        `http://localhost:8080/api/v1/medicaldocuments/approveStatus/${patientId}/${id}`,
        {
          approved: false,
          justification: justification,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      setModalMessage('Documento reprovado com sucesso');
      setModalOpen(true);
      fetchDocumentData();  // Atualiza os dados da lista após reprovar
    } catch (error) {
      console.error("Erro ao reprovar documento", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        handleReprovar(id, justification);
      }
    }
  };

  const handleAprovar = async (id: number) => {
    try {
      const token = tokenStorage.getToken();
      const response = await axios.patch(
        `http://localhost:8080/api/v1/medicaldocuments/approveStatus/${patientId}/${id}`,
        {
          approved: true,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      );
      setModalMessage('Documento aprovado com sucesso');
      setModalOpen(true);
      fetchDocumentData();  // Atualiza os dados da lista após aprovar
    } catch (error) {
      console.error("Erro ao aprovar documento", error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        handleAprovar(id);
      }
    }
  };

  const fetchDocumentData = async () => {
    console.log(patientId)
    try {
      const token = tokenStorage.getToken();
      const response = await axios.get(
        `http://localhost:8080/api/v1/medicaldocuments/getAll/${patientId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
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
    if (patientId !== null) {
      fetchDocumentData();
    }
  }, [patientId]);


  const handleNavigation = () => {
    window.location.href = '/login';
  };

  const downloadDocument = async (id: number, url:string) => {
    console.log(patientId, id);
    try {
      const token = tokenStorage.getToken();
      const response = await axios.get(
        `http://localhost:8080/api/v1/medicaldocuments/${patientId}/${id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          responseType: 'blob',
        }
      );
  
      // Log completo da resposta
      console.log("response", response);
  
      const contentDisposition = response.headers['content-disposition'];
      console.log("response headers", response.headers);
      console.log("content disposition", contentDisposition);
  
      let fileName = 'documento_desconhecido.pdf';
  
      if (contentDisposition) {
        console.log("entro no if mais externo", fileName);
        const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (fileNameMatch && fileNameMatch.length > 1) {
          fileName = fileNameMatch[1];
          console.log("entro no if mais interno", fileName);
        }
      }
  
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url2 = window.URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url2;
      console.log("antes de baixar ", url);
      link.setAttribute('download', url);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url2);
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
          <BotaoRecusar
            buttonName="Reprovar"
            handleClick={() => {
              setSelectedDocumentId(document.id);
              setJustificationModalOpen(true);
            }}
          />
        </div>
      );
    } else if (document.status === 3) {
      return (
        <div className="flex justify-center items-center mt-2">
          <p className="text-green-600 font-bold uppercase ">Aprovado</p>
        </div>
      );
    } else if (document.status === 2) {
      return (
        <div className="flex flex-col justify-center items-center mt-2 space-y-2">
          <p className="text-red-600 font-bold uppercase">Reprovado</p>
          <button onClick={() => {mostrarMotivo(document.justification)}} className="bg-gray-200 px-4 py-2 rounded">Motivo</button>
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
          collaborator={true}
        />

        <div className="w-full h-full px-20">
          <InfoResponsavel nome={nome ?? ''} />
          <div className="gap-x-8 gap-y-12 w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-black p-4">
            {documents.map((document) => (
              <div key={document.id} className="relative">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                  <p className="text-xl text-[#214E4D] mb-1">{mapDocumentTypeToTitle(document.type)}</p>

                  <div className="relative">
                    <img src={image} alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-64" />
                    <button onClick={() => downloadDocument(document.id,document.url)} className="absolute inset-0 flex items-center justify-center w-full">
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
      {motivoModalOpen && (
        <ModalMotivo handleClose={() => setMotivoModalOpen(false)} text={modalMessage} />
      )}
      <JustificationModal
     isOpen={justificationModalOpen}
     handleClose={() => setJustificationModalOpen(false)}
     handleSubmit={(justification) => {
       if (selectedDocumentId !== null) {
         handleReprovar(selectedDocumentId, justification);
         setJustificationModalOpen(false); 
       }
     }}
   />
    </motion.div>
  );
}
