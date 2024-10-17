"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import DadosColaborador from "../../types/DadosColaborador";
import requestsAuth from "@/utils/requestsAuth";

type PatientResponse = {
    id: number;
    name: string;
    cpf: string;
    sexo: string;
    birthDate: string;
    naturalness: string;
    nationality: string;
    familiarId: number;
};

type FamiliarResponse = {
    id: number;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    workPhone: string;
    endereco: string;
    scholarity: string;
    familiarKinship: string;
    ocupation: string;
    income: number;
};


export default function Perfil() {
    const [modal, setModal] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState<string | null>(null);
    const [fieldValue, setFieldValue] = useState<string>("");
    const [patients, setPatients] = useState<PatientResponse[]>([]);
    const [familiar, setFamiliar] = useState<FamiliarResponse | null>(null);


    useEffect(() => {

        if (requestsAuth.isCollaborator()) {
            window.location.href = '/gerenciar-sessoes'; // Redireciona para a página inicial se o usuário não for um colaborador
            return;
        }

        const userId = requestsAuth.getFamiliarId(); // Obtém o ID do usuário logado
        console.log(userId); // Exibe o ID do usuário logado (para depuração)

        const fetchPatients = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/familiar/getPatients/${userId}`);
                const data = await response.json();
                if (data.length > 0) {
                    setPatients([data[0]]); // Define o estado apenas com o primeiro paciente
                }
            } catch (error) {
                console.error("Erro ao buscar os dados dos pacientes:", error);
            }
        };

        const fetchFamiliar = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/familiar/${userId}`);
                const data = await response.json();
                setFamiliar(data);
            } catch (error) {
                console.error("Erro ao buscar os dados do familiar:", error);
            }
        };

        fetchPatients();
        fetchFamiliar();
    }, []);

    const handleEditClick = (field: string, value: string) => {
        setFieldToEdit(field);
        setFieldValue(value);
        setModal(true);
    };
    const handleSave = () => {
        if (fieldToEdit) {
            // Atualize o valor de um campo para um dos pacientes (se aplicável)

        }
        setModal(false);
    };

    if (patients.length === 0 || !familiar) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header user={true} />
            <div className="w-[90%] h-[80%] flex flex-col items-center gap-4 xl:flex-row xl:justify-center mt-5">

                {/* Seção de dados dos pacientes */}
                <div className="w-full xl:w-[600px] 2xl:w-[800px] h-full flex flex-col gap-2">
                    <div className="text-sm font-bold">DADOS DO PACIENTE</div>
                    {patients.length > 0 && (
                        <div className="w-full h-full border border-1 border-black rounded-lg p-4 bg-white shadow-lg mb-4">
                            <div className="ml-4 mb-4 mt-4 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <div className="text-[#8D8F8F] text-sm font-bold">NOME COMPLETO</div>
                                </div>
                                <div className="text-[#255A59] font-bold">{patients[0].name}</div>
                                <br />
                                <div className="flex justify-between items-center">
                                    <div className="text-[#8D8F8F] text-sm font-bold">CPF</div>
                                </div>
                                <div className="text-[#255A59] font-bold">{patients[0].cpf}</div>
                                <br />
                                <div className="flex justify-between items-center">
                                    <div className="text-[#8D8F8F] text-sm font-bold">SEXO</div>
                                </div>
                                <div className="text-[#255A59] font-bold">{patients[0].sexo}</div>
                                <br />
                                <div className="flex justify-between items-center">
                                    <div className="text-[#8D8F8F] text-sm font-bold">DATA DE NASCIMENTO</div>
                                </div>
                                <div className="text-[#255A59] font-bold">{new Date(patients[0].birthDate).toLocaleDateString()}</div>
                                <br />
                                <div className="flex justify-between items-center">
                                    <div className="text-[#8D8F8F] text-sm font-bold">NATURALIDADE</div>
                                </div>
                                <div className="text-[#255A59] font-bold">{patients[0].naturalness}</div>
                                <br />
                                <div className="flex justify-between items-center">
                                    <div className="text-[#8D8F8F] text-sm font-bold">NACIONALIDADE</div>
                                </div>
                                <div className="text-[#255A59] font-bold">{patients[0].nationality}</div>
                                <br /><br /><br /><br />
                            </div>
                        </div>
                    )}
                </div>

                {/* Seção de dados do familiar */}
                <div className="w-full xl:w-[600px] 2xl:w-[800px] h-full flex flex-col gap-2">
                    <div className="text-sm font-bold">DADOS DO FAMILIAR</div>
                    <div className="w-full h-full border border-1 border-black rounded-lg p-4 bg-white shadow-lg mb-4">
                        <div className="ml-4 mb-4 mt-4 flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">NOME COMPLETO</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.name}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">CPF</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.cpf}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">EMAIL</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.email}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">PARENTESCO</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.familiarKinship}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">TELEFONE PESSOAL</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.phone}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">TELEFONE DO TRABALHO</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.workPhone}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">ENDEREÇO</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.endereco}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">ESCOLARIDADE</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{familiar.scholarity}</div>

                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Editar {fieldToEdit}</h2>
                        <input
                            type="text"
                            value={fieldValue}
                            onChange={(e) => setFieldValue(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                        />
                        <div className="flex justify-center gap-2">
                            <button className="bg-gray-300 p-2 rounded-lg" onClick={() => setModal(false)}>Cancelar</button>
                            <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleSave}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}