'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';

interface SessionResponse {
    group: any;
    id: number;
    description: string;
    status: number;
    patientPresent: boolean;
    observations: string;
    horseName: string;
    guide: {
        id: number;
        name: string;
        email: string;
        cpf: string;
        gender: string;
        phone: string;
        position: string;
        sessionsCount: number;
        roles: { id: number; authority: string }[];
    };
    mediator: {
        id: number;
        name: string;
        email: string;
        cpf: string;
        gender: string;
        phone: string;
        position: string;
        sessionsCount: number;
        roles: { id: number; authority: string }[];
    };
    harness: {
        id: number;
        name: string;
        email: string;
        cpf: string;
        gender: string;
        phone: string;
        position: string;
        sessionsCount: number;
        roles: { id: number; authority: string }[];
    };
    patient: {
        id: number;
        name: string;
        cpf: string;
        sexo: string;
        birthDate: string;
        naturalness: string;
        nationality: string;
        familiarId: number;
    };
    startDate: string;
}

const VerSessao: React.FC = () => {
    const handleNavigation = () => {
        console.log('Navigation button clicked');
    };

    const [sessionId, setSessionId] = useState<number | null>(null);
    const [patientId, setPatientId] = useState<number | null>(null);
    const [session, setSession] = useState<SessionResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const sessionIdParam = Number(searchParams.get('idsessao'));
        const patientIdParam = Number(searchParams.get('idpaciente'));

        setSessionId(sessionIdParam);
        setPatientId(patientIdParam);

        if (!isNaN(sessionIdParam) && !isNaN(patientIdParam)) {
            axios
                .get<SessionResponse>(`http://localhost:8080/api/v1/sessions/${patientIdParam}/${sessionIdParam}`, {
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then((response) => {
                    setSession(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    const errorMessage = error.response ? error.response.data.message : 'Failed to fetch session data';
                    setError(errorMessage);
                    setLoading(false);
                });
        } else {
            setError('Invalid session or patient ID');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="bg-blue-500 text-white p-2 rounded">Tentar Novamente</button>
            </div>
        );
    }

    const getValueOrDefault = (value: any) => {
        return value ? value : 'Não informado';
    };

    return (
        <div className="bg-white min-h-screen p-6">
            <Header
                collaborator={true}
            />

            <div className="container mx-auto p-4 bg-gray-50 shadow-2xl rounded-lg border border-t-4">
                {session ? (
                    <>
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center">
                                <img src="/assets/iconCavalo.png" alt="Cavalo" className="w-12 h-12 mr-2" />
                                <h1 className="text-2xl font-semibold">{getValueOrDefault(session.horseName)}</h1>
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold">SESSÃO NÚMERO {getValueOrDefault(session.id)}</h2>
                                <p className="text-gray-600">TURMA {getValueOrDefault(session.group)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">DATA</p>
                                <p className="text-lg">{session.startDate ? new Date(session.startDate).toLocaleDateString() : 'Não informado'}</p>
                            </div>
                        </div>

                        <div className="py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold">PACIENTE</h3>
                                    <p>{getValueOrDefault(session.patient?.name)}</p>
                                    <p>{getValueOrDefault(session.patient?.cpf)}</p>
                                    <p>{getValueOrDefault(session.patient?.sexo)}</p>
                                    <p>{session.patient?.birthDate ? new Date(session.patient.birthDate).toLocaleDateString() : 'Não informado'}</p>
                                    <p>{getValueOrDefault(session.patient?.naturalness)}</p>
                                    <p>{getValueOrDefault(session.patient?.nationality)}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">PRESENÇA</h3>
                                    <p>{session.patientPresent ? "SIM" : "NÃO"}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">GUIA</h3>
                                    <p>{getValueOrDefault(session.guide?.name)}</p>
                                    <p>{getValueOrDefault(session.guide?.email)}</p>
                                    <p>{getValueOrDefault(session.guide?.cpf)}</p>
                                    <p>{getValueOrDefault(session.guide?.gender)}</p>
                                    <p>{getValueOrDefault(session.guide?.phone)}</p>
                                    <p>{getValueOrDefault(session.guide?.position)}</p>
                                    <p>Qtd. Sessões: {getValueOrDefault(session.guide?.sessionsCount)}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">MEDIADOR</h3>
                                    <p>{getValueOrDefault(session.mediator?.name)}</p>
                                    <p>{getValueOrDefault(session.mediator?.email)}</p>
                                    <p>{getValueOrDefault(session.mediator?.cpf)}</p>
                                    <p>{getValueOrDefault(session.mediator?.gender)}</p>
                                    <p>{getValueOrDefault(session.mediator?.phone)}</p>
                                    <p>{getValueOrDefault(session.mediator?.position)}</p>
                                    <p>Qtd. Sessões: {getValueOrDefault(session.mediator?.sessionsCount)}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">ARREAMENTO</h3>
                                    <p>{getValueOrDefault(session.harness?.name)}</p>
                                    <p>{getValueOrDefault(session.harness?.email)}</p>
                                    <p>{getValueOrDefault(session.harness?.cpf)}</p>
                                    <p>{getValueOrDefault(session.harness?.gender)}</p>
                                    <p>{getValueOrDefault(session.harness?.phone)}</p>
                                    <p>{getValueOrDefault(session.harness?.position)}</p>
                                    <p>Qtd. Sessões: {getValueOrDefault(session.harness?.sessionsCount)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-[#4B8A89] my-4"></div>

                        <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                            <h3 className="font-semibold">OBSERVAÇÕES</h3>
                            <p>{getValueOrDefault(session.observations)}</p>
                        </div>

                        <div className="w-full h-[1px] bg-[#4B8A89] my-4"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold">ID da Sessão</h3>
                                <p>{getValueOrDefault(session.id)}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">DESCRIÇÃO</h3>
                                <p>{getValueOrDefault(session.description)}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">STATUS</h3>
                                <p>{getValueOrDefault(session.status)}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">NOME DO CAVALO</h3>
                                <p>{getValueOrDefault(session.horseName)}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Carregando sessão...</div>
                )}
            </div>
        </div>
    );
};

export default VerSessao;
