'use client';
import React, { useEffect, useState } from 'react';
import InfoDocColaborador from "./componentes/InfoDocColaborador";
import Person from '@mui/icons-material/Person';
import Person3Icon from '@mui/icons-material/Person3';
import axios from 'axios';
import tokenStorage from "../../utils/token";
import AdicionarColaborador from './componentes/AdicionarColaborador';
import BuscarColaborador from './componentes/BuscarColaborador';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

interface Colaborador {
  id: number;
  name: string;
  email: string;
  cpf: string;
  gender: string;
  phone: string;
  position: string;
  sessionsCount: number;
  roles: Array<{ id: number; authority: string }>;
}

interface AgrupadoPorPosicao {
  position: string;
  colaboradores: Colaborador[];
}

const handleNavigation = () => {
  window.location.href = '/perfil';
};

const AgruparColaboradoresPorPosicao: React.FC = () => {
  const [colaboradoresAgrupados, setColaboradoresAgrupados] = useState<AgrupadoPorPosicao[]>([]);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState<AgrupadoPorPosicao[]>([]);
  const [busca, setBusca] = useState<string>('');
  const fetchColaboradores = async (nome?: string) => {
    try {
      const token = tokenStorage.getToken();
      console.log("Token", token);
      const response = await axios.get('http://localhost:8080/api/v1/collaborator', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data: Colaborador[] = response.data;
      console.log(data);

      const colaboradoresFiltradosPorNome = nome
        ? data.filter(colaborador =>
            colaborador.name.toLowerCase().includes(nome.toLowerCase())
          )
        : data;

      const agrupados = colaboradoresFiltradosPorNome.reduce((acc: AgrupadoPorPosicao[], colaborador) => {
        const posicaoExistente = acc.find(item => item.position === colaborador.position);
        if (posicaoExistente) {
          posicaoExistente.colaboradores.push(colaborador);
        } else {
          acc.push({ position: colaborador.position, colaboradores: [colaborador] });
        }
        return acc;
      }, []);

      setColaboradoresAgrupados(agrupados);
      setColaboradoresFiltrados(agrupados);
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
      if ((error as any).response && (error as any).response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        const tokenNovo = tokenStorage.getToken();
        console.log("Token novo", tokenNovo);
        fetchColaboradores(nome);
      } else {
        alert('Falha ao buscar colaboradores');
      }
    }
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

 
  const handleSearch = (nome: string) => {
    setBusca(nome); 
    fetchColaboradores(nome);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <Header collaborator={true} />
        <div className="w-full h-full px-20">
          <div className="flex justify-between items-center mb-4">
            <div>
              <AdicionarColaborador />
            </div>
            <div>
              <BuscarColaborador onSearch={handleSearch} />
            </div>
          </div>
        
          <div className="w-full h-full border-2 border-black p-4">
            {colaboradoresFiltrados.map((grupo, index) => (
              <div key={grupo.position} className="mb-6">
                <div className="text-[#255A59] text-lg font-semibold mb-2 pb-6">
                  {grupo.position.toUpperCase()}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {grupo.colaboradores.map(colaborador => {
                    const icone = colaborador.gender === 'Male' ? <Person /> : <Person3Icon />;
                    return (
                      <div key={colaborador.id} className="p-4 bg-white">
                        <InfoDocColaborador
                          nome={colaborador.name}
                          quantSessoes={colaborador.sessionsCount}
                          icon={icone}
                          handleNavigation={handleNavigation}
                        />
                      </div>
                    );
                  })}
                </div>
                {index < colaboradoresFiltrados.length - 1 && (
                  <hr className="border-t-2 border-gray-300 my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AgruparColaboradoresPorPosicao;
