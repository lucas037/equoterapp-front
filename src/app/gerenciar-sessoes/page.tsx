"use client";

import React, { useEffect, useState } from 'react';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import InfoSec from "./componentes/InfoSec";
import { Button } from "@mui/material";
import axios from 'axios';

interface Sessao {
  id: number;
  description: string;
  status: number;
  patientPresent: boolean;
  observations: string;
  horseName: string;
  guide: any;
  mediator: any;
  harness: any;
  patient: any;
  startDate: string;
}

interface SessaoPorMes {
  [key: string]: Sessao[];
}

export default function GerenciarPreCadastro() {
  const [sessoesPorMes, setSessoesPorMes] = useState<SessaoPorMes>({});
  const [error, setError] = useState<string | null>(null);

  const fetchSessions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/sessions');
      if (response.data && typeof response.data === 'object') {
        setSessoesPorMes(response.data);
      } else {
        setError('A resposta da API não é um objeto.');
      }
    } catch (error) {
      console.error('Erro ao buscar sessões:', error);
      if ((error as any).response && (error as any).response.status === 500) {
        setError('Erro no servidor. Por favor, tente novamente mais tarde.');
      } else {
        setError('Falha ao buscar sessões. Por favor, tente novamente.');
      }
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleNavigation = () => {
    window.location.href = '/login';
  };

  const handlePreCadastro = () => {
    window.location.href = '/precadastro';
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial={pageVariants.initial}
      animate={pageVariants.animate}
      exit={pageVariants.exit}
    >
      <div>
        <Header
          buttonName='Sair'
          handleClick={handleNavigation}
          buttonsNames={["Verificar Documentos", "Sessões", "Gerenciamento", "Perfil"]}
          colaborador={true}
        />
        <div className="flex w-full h-full px-20">
          <div className="hidden md:block w-[20%] h-full overflow-y-auto border-2 border-black rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">Sessões Gerais</h2>
            <Button onClick={() => window.location.href = '/adicionar-sessao'} className="bg-slate-900 border border-black text-white mb-4 w-full">(+) Adicionar Sessões</Button>
            
            <label className="block mb-2">Selecione o Mês:</label>
            <select className="w-full mb-4 p-2 border border-black rounded-md">
              <option value="janeiro">Janeiro</option>
              <option value="fevereiro">Fevereiro</option>
              <option value="marco">Março</option>
              <option value="abril">Abril</option>
              <option value="maio">Maio</option>
              <option value="junho">Junho</option>
              <option value="julho">Julho</option>
              <option value="agosto">Agosto</option>
              <option value="setembro">Setembro</option>
              <option value="outubro">Outubro</option>
              <option value="novembro">Novembro</option>
              <option value="dezembro">Dezembro</option>
            </select>

            <label className="block mb-2">Selecione o Ano:</label>
            <select className="w-full mb-4 p-2 border border-black rounded-md">
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>

            <label className="block mb-2">Data de Início:</label>
            <input type="date" className="w-full mb-4 p-2 border border-black rounded-md" />

            <label className="block mb-2">Data de Fim:</label>
            <input type="date" className="w-full mb-4 p-2 border border-black rounded-md" />
            <Button className="bg-green-900 border border-black text-white mb-4 w-full">Filtrar</Button>
          </div>

          <div className="w-full md:w-[80%] h-full border-2 border-black p-4 ml-4">
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {Object.entries(sessoesPorMes).map(([mes, sessoes]) => (
              <div key={mes}>
                <div className="text-[#255A59] text-lg font-semibold mb-2">{mes.toUpperCase()}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                  {sessoes.map((sessao, index) => (
                    <div key={index} className="mb-6 p-4 bg-white">
                      <InfoSec
                        idsessao={sessao.id}
                        quantSessoes={sessoes.length}
                        nome={sessao.patient.name}
                        mediador={sessao.mediator.name}
                        presenca={sessao.patientPresent}
                        // handleNavigation={handleNavigation}
                      />
                    </div>
                  ))}
                </div>
                <hr className="border-t-2 border-gray-300 my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}