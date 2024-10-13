"use client";

import React, { useState } from 'react';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import axios from 'axios';
import router from 'next/router';

const AdicionarSessaoPage: React.FC = () => {
    const [sessionData, setSessionData] = useState({
        description: '',
        status: 3,
        patientPresent: true,
        observations: '',
        horseName: '',
        guideId: 1,
        mediatorId: 1,
        harnessId: 1,
        patient: {
            id: 1,
            name: '',
            cpf: '',
            sexo: '',
            birthDate: '',
            naturalness: '',
            nationality: '',
            familiarId: 1
        },
        startDate: ''
    });

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSessionData({
            ...sessionData,
            [name]: value
        });
    };

    const handleNestedChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const { name, value } = e.target;
        setSessionData({
            ...sessionData,
            [field]: {
                ...sessionData[field],
                [name]: value
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Reset error state

        // Validate required fields
        if (!sessionData.description || !sessionData.horseName || !sessionData.startDate || !sessionData.patient.name || !sessionData.mediatorId || !sessionData.guideId || !sessionData.harnessId) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const requestData = {
            description: sessionData.description,
            status: sessionData.status,
            patientPresent: sessionData.patientPresent,
            observations: sessionData.observations,
            horseName: sessionData.horseName,
            guideId: sessionData.guideId,
            mediatorId: sessionData.mediatorId,
            harnessId: sessionData.harnessId,
            startDate: sessionData.startDate
        };

        try {
            const response = await axios.post(`http://localhost:8080/api/v1/sessions/${sessionData.patient.id}`, requestData);
            console.log('Sessão criada com sucesso:', response.data);
            window.location.href = '/gerenciar-sessoes';
        } catch (error: any) {
            console.error('Erro ao criar sessão:', error);
            setError(error.response?.data?.message || 'Erro desconhecido');
        }
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
            <Header
                buttonName='Sair'
                handleClick={() => window.location.href = '/login'}
                buttonsNames={["Verificar Documentos", "Sessões", "Gerenciamento", "Perfil"]}
                colaborador={true}
            />

<div className="flex flex-col items-center justify-center mt-10 py-2">
    <div className="w-full max-w-lg bg-white p-8 border border-green-500 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Adicionar Sessão</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Descrição:</label>
                <input
                    type="text"
                    name="description"
                    value={sessionData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Observações:</label>
                <input
                    type="text"
                    name="observations"
                    value={sessionData.observations}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Cavalo:</label>
                    <input
                        type="text"
                        name="horseName"
                        value={sessionData.horseName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Data de Início:</label>
                    <input
                        type="datetime-local"
                        name="startDate"
                        value={sessionData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Paciente:</label>
                <input
                    type="text"
                    name="name"
                    value={sessionData.patient.name}
                    onChange={(e) => handleNestedChange(e, 'patient')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Mediador:</label>
                    <input
                        type="text"
                        name="mediatorId"
                        value={sessionData.mediatorId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Guia:</label>
                    <input
                        type="text"
                        name="guideId"
                        value={sessionData.guideId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nome do Arreamento:</label>
                <input
                    type="text"
                    name="harnessId"
                    value={sessionData.harnessId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Adicionar Sessão
            </button>
        </form>
    </div>
</div>
        </motion.div>
    );
};

export default AdicionarSessaoPage;