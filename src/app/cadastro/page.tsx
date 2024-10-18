"use client"

import Header from "@/components/Header";
import { useState } from "react";
import Image from 'next/image';
import Input from "@/components/Input";
import DadosFamiliar from "../../types/DadosFamiliar";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../../types/DropdownOption";
import axios from "axios";
import currentPageStorage from '../../utils/currentPage';
import requestsAuth from '../../utils/requestsAuth';

const sexoFamiliarOptions: DropdownOption[] = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outro', label: 'Outro' }
];

const escolaridadeOptions: DropdownOption[] = [
    { value: 'fundamental', label: 'Fundamental' },
    { value: 'medio', label: 'Médio' },
    { value: 'superior', label: 'Superior' },
    { value: 'pos', label: 'Pós-graduação' },
    { value: 'mestrado', label: 'Mestrado' },
    { value: 'doutorado', label: 'Doutorado' }
];

// export const aplicarMascaraCPF = (value: string): string => {
//     value = value.replace(/\D/g, '').substring(0, 11);
//     value = value.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
//     return value;
// };

// export const aplicarMascaraTelefone = (value: string): string => {
//     value = value.replace(/\D/g, '').substring(0, 11);
//     value = value.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
//     return value;
// };


export default function Cadastro() {
    const [dadosFamiliar, setDadosFamiliar] = useState<DadosFamiliar>({} as DadosFamiliar);
    const [erro, setErro] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);

    const updateDadosFamiliar = (key: keyof DadosFamiliar, value: any) => {
        setDadosFamiliar(prev => ({ ...prev, [key]: value }));
    };

    const clickProximaEtapa = async () => {
        try {
            setDadosFamiliar(prev => ({ ...prev, status: "pendente" }));
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/familiar/register`, dadosFamiliar);
            await requestsAuth.login(dadosFamiliar.email, dadosFamiliar.password);

            if (!requestsAuth.loginStatus) {
                setErro(requestsAuth.messageError);
            } else {
                currentPageStorage.clearCurrentPage();
                requestsAuth.clear();
                setAccountCreated(true);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorData = error.response.data;
                if (errorData.errors && errorData.errors.length > 0) {
                    setErro(errorData.errors[0]);
                } else {
                    setErro("Erro inesperado. Tente novamente.");
                }
            } else {
                setErro("Erro de conexão. Tente novamente.");
            }
        }
    };

    return (
        <div className="h-screen w-screen">
            <Header
                userNotLogged={true}
                buttonExtraName="Login"
                routeExtra="/login"
                routeLogo="/"
            />

            {
                accountCreated ? (
                    <div className="h-[calc(100vh-160px)] w-full flex flex-col justify-center items-center gap-4">
                        <div className="text-xl font-bold">Parabéns! Sua conta foi criada!</div>
                        <div onClick={() => { window.location.href = "/login" }} className="p-4 bg-[#4B8A89] text-lg text-white cursor-pointer">Realizar Login</div>
                    </div>
                ) : (
                    <div className="w-full sm:h-[calc(100vh-160px)] flex justify-center items-center">
                        <div className="w-[95%] sm:h-[90%] border flex border-gray-400 mb-3">
                            <Image
                                src="/assets/adulto.png"
                                alt="Imagem de exemplo"
                                height={288}
                                width={410}
                                className="hidden lg:block h-full w-auto opacity-50"
                            />
                            <div className="w-full h-full flex flex-col justify-around items-center">
                                <div className="flex flex-col items-center gap-1 mt-3">
                                    <div className="text-sm font-bold">INFORME OS DADOS DO RESPONSÁVEL DO PACIENTE</div>
                                    <div className="text-4xl flex">
                                        <div className="text-[#137472]">•</div>
                                        ••
                                    </div>
                                </div>

                                <div className="w-[90%] text-sm font-bold flex flex-col items-center gap-3">
                                    <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                        <Input
                                            name={"NOME"}
                                            style={"w-[100%] sm:w-[66%]"}
                                            value={dadosFamiliar.name}
                                            onChange={value => updateDadosFamiliar('name', value)}
                                            height="h-[45px]"
                                        />
                                        <Input
                                            name={"CPF"}
                                            style={"w-[100%] sm:w-[33%]"}
                                            value={dadosFamiliar.cpf}
                                            // onChange={value => updateDadosFamiliar('cpf', aplicarMascaraCPF(value))}
                                            onChange={value => updateDadosFamiliar('cpf', value)}

                                            height="h-[45px]"
                                        />
                                    </div>

                                    <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                        <Input
                                            name={"EMAIL"}
                                            style={"w-[100%] sm:w-[66.5%]"}
                                            value={dadosFamiliar.email}
                                            onChange={value => updateDadosFamiliar('email', value)}
                                            height="h-[45px]"
                                        />
                                        <Input
                                            name={"SENHA"}
                                            style={"w-[100%] sm:w-[33%]"}
                                            value={dadosFamiliar.password}
                                            onChange={value => updateDadosFamiliar('password', value)}
                                            type="password"
                                            height="h-[45px]"
                                        />
                                    </div>

                                    <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                        <Input
                                            name={"TELEFONE"}
                                            style={"w-full sm:w-[33%]"}
                                            value={dadosFamiliar.phone}
                                            // onChange={value => updateDadosFamiliar('phone', aplicarMascaraTelefone(value))}
                                            onChange={value => updateDadosFamiliar('phone', value)}
                                            height="h-[45px]"
                                        />
                                        <Dropdown
                                            name={"SEXO"}
                                            style={"w-full sm:w-[33%]"}
                                            options={sexoFamiliarOptions}
                                            value={dadosFamiliar.gender}
                                            onChange={value => updateDadosFamiliar('gender', value)}
                                            height="h-[45px]"
                                        />
                                        <Dropdown
                                            name={"ESCOLARIDADE"}
                                            style={"w-full sm:w-[33%]"}
                                            options={escolaridadeOptions}
                                            value={dadosFamiliar.scholarity}
                                            onChange={value => updateDadosFamiliar('scholarity', value)}
                                            height="h-[45px]"
                                        />
                                    </div>

                                    <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                        <Input
                                            name={"LOCAL DE TRABALHO"}
                                            style={"w-full sm:w-[33%]"}
                                            value={dadosFamiliar.workingPlace}
                                            onChange={value => updateDadosFamiliar('workingPlace', value)}
                                            height="h-[45px]"
                                        />
                                        <Input
                                            name={"OCUPAÇÃO"}
                                            style={"w-full sm:w-[33%]"}
                                            value={dadosFamiliar.occupation}
                                            onChange={value => updateDadosFamiliar('occupation', value)}
                                            height="h-[45px]"
                                        />
                                        <Input
                                            name={"TELEFONE DO TRABALHO"}
                                            style={"w-full sm:w-[33%] mb-3"}
                                            value={dadosFamiliar.workPhone}
                                            onChange={value => updateDadosFamiliar('workPhone', value)}
                                            height="h-[45px]"
                                        />
                                    </div>

                                    <div className={`${erro ? 'text-red-600' : 'text-transparent'}`}>{erro}</div>

                                    <button
                                        className="w-[100%] h-[60px] mb-6 bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm font-bold"
                                        onClick={clickProximaEtapa}
                                    >
                                        PRÓXIMA ETAPA
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}