'use client';

import React, { useEffect, useState } from 'react';
import InfoDocPaciente from "./componentes/InfoDocPaciente";
import axios from 'axios';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import tokenStorage from "../../utils/token";

interface Paciente {
  patient_id: number;
  patient_name: string;
  sent: number;
  refused: number;
  aprooved: number;
}

const ListarPacientes: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const router = useRouter();


  const fetchPacientes = async () => {
    try {
      const token = tokenStorage.getToken();
      console.log("Token", token);
      const response = await axios.get('http://localhost:8080/api/v1/patient', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = response.data.pendence;
      setPacientes(data);
      console.log(data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
      if (error.response && error.response.status === 401) {
        await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
        const tokenNovo = tokenStorage.getToken();
        console.log("Token novo", tokenNovo);
        fetchPacientes();
      } else {
        alert('Falha ao buscar pacientes');
      }
    }
  };

  useEffect(() => {
    fetchPacientes();
  }, []);

  const handlePatientClick = (patientId: number) => {
    localStorage.setItem('pacienteId', patientId.toString());
    window.location.href = '/verificacao';
  };

  const handleNavigation = () => {
    window.location.href = '/login';
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div>
        <Header
          collaborator={true}
        />
        
        <div className="w-full h-full px-20">
          <div className="w-full h-full border-2 border-black p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {pacientes.map((paciente) => {
              return (
                <div key={paciente.patient_id}>
                  <InfoDocPaciente
                    nome={paciente.patient_name}
                    quantEnviados={paciente.sent}
                    quantRecusados={paciente.refused}
                    quantAprovados={paciente.aprooved}
                    handleNavigation={() => handlePatientClick(paciente.patient_id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListarPacientes;
