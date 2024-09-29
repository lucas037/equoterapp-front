"use client"

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Input from "@/components/Input";
import DadosFamiliar from "../types/DadosFamiliar";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../types/DropdownOption";
import axios from "axios";
import tokenStorage from '../utils/token';
import currentPageStorage from '../utils/currentPage';

export default function Cadastro() {

    const [dadosFamiliar, setDadosFamiliar] = useState<DadosFamiliar>({} as DadosFamiliar);
    const [erro, setErro] = useState('...');

    async function clickProximaEtapa() {
        setDadosFamiliar({
          ...dadosFamiliar,
          status: "pendente",
        });

        try {
            await axios.post('http://localhost:8080/api/v1/auth/familiar/register', dadosFamiliar);
            tentarLogin();

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const errorData = error.response.data;
        
                    if (errorData) {
                        setErro(errorData.errors[0]);
                    }
                }
  
            }
        }
    }

    async function tentarLogin() {

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', dadosFamiliar);

            tokenStorage.setToken(response.data.token);
            tokenStorage.setRefreshToken(response.data.refreshToken);

            currentPageStorage.changePage(1);
            window.location.href = "/cadastro-paciente";
            
        } catch (error) {
            window.location.href = "/login";
        }
    }

    function changeDadosFamiliar(dadosFamiliar: DadosFamiliar) {
        setDadosFamiliar(dadosFamiliar);
    }

    function handleChangeNome(value: string) {
        changeDadosFamiliar({
          ...dadosFamiliar,
          name: value,
        });
    }

    function handleChangeCPF(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            cpf: value,
        });
    }

    function handleChangeParentesco(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            familiarKinship: value,
        });
    }

    function handleChangeEmail(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            email: value,
        });
    }

    function handleChangeSenha(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            password: value,
        });
    }

    function handleChangeTelefone(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            phone: value,
        });
    }

    function handleChangeSexo(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            gender: value,
        });
    }

    function handleChangeEscolaridade(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            scholarity: value,
        });
    }

    function handleChangeLocalTrabalho(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            workingPlace: value,
        });
    }

    function handleChangeOcupacao(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            occupation: value,
        });
    }

    function handleChangeTelefoneTrabalho(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            workPhone: value,
        });
    }

    function handleChangeMoraComPaciente(value: string) {
        if (value == "s") {
            changeDadosFamiliar({
                ...dadosFamiliar,
                livesWithPatient: true
            })
        }
        else {
            changeDadosFamiliar({
                ...dadosFamiliar,
                livesWithPatient: false
            })
        }
    }

    const parentescoOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Pai", value: "pai" },
        { label: "Mãe", value: "mae" },
        { label: "Avó(ô)", value: "avó" },
        { label: "Tia(o)", value: "tia" },
        { label: "Irmã(o)", value: "irmã" },
        { label: "Outro", value: "outro" },
    ];
    
    const sexoFamiliarOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Masculino", value: "Masculino" },
        { label: "Feminino", value: "Feminino" }
    ];
    
    const escolaridadeOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Ensino Fundamental Incompleto", value: "Ensino Fundamental Incompleto" },
        { label: "Ensino Fundamental Completo", value: "Ensino Fundamental Completo" },
        { label: "Ensino Médio Incompleto", value: "Ensino Médio Incompleto" },
        { label: "Ensino Médio Completo", value: "Ensino Médio Completo" },
        { label: "Ensino Técnico", value: "Ensino Técnico" },
        { label: "Ensino Superior Incompleto", value: "Ensino Superior Incompleto" },
        { label: "Ensino Superior Completo", value: "Ensino Superior Completo" },
        { label: "Pós Graduação", value: "Pós Graduação" },
        { label: "Mestrado", value: "Mestrado" },
        { label: "Doutorado", value: "Doutorado" },
    ];
    
    const moraComPacienteOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Sim", value: "s" },
        { label: "Não", value: "n" },
    ];

    return (
        <div className="">
            <Header
            buttonName="Login"
            handleClick={() => {window.location.href = "/login"}}
            buttonsNames={["Quem Somos", "Regras", "Contatos", "Documentos"]}
            />

            <div className="w-full sm:h-[calc(100vh-160px)] flex justify-center items-center">
                <div className="w-[95%] sm:h-[90%] border flex border-gray-400 mb-3" >
                    <Image
                    src = "/assets/adulto.png"
                    alt = ""
                    height={288}
                    width={410}
                    className="hidden lg:block h-full w-auto opacity-50"
                    />

                    <div className="w-full h-full flex flex-col justify-around items-center">
                        <div className="flex flex-col items-center gap-1 mt-3">
                            <div className="text-sm font-bold">REALIZE O PRÉ-CADASTRO NO SISTEMA</div>
                            <div className="text-4xl">•</div>
                        </div>

                        <div className="w-[90%] text-sm font-bold flex flex-col items-center gap-3">
                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                name={"NOME DO FAMILIAR"}
                                style={"w-[100%] sm:w-[66%]"}
                                value={dadosFamiliar.name}
                                onChange={handleChangeNome}
                                height="h-[45px]"
                                />

                                <Input
                                name={"CPF"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosFamiliar.cpf}
                                onChange={handleChangeCPF}
                                height="h-[45px]"
                                />

                            </div>

                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                name={"EMAIL"}
                                style={"w-[100%] sm:w-[66.5%]"}
                                value={dadosFamiliar.email}
                                onChange={handleChangeEmail}
                                height="h-[45px]"
                                />

                                <Input
                                name={"SENHA"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosFamiliar.password}
                                onChange={handleChangeSenha}
                                type="password"
                                height="h-[45px]"
                                />

                            </div>

                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                    name={"TELEFONE"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.phone}
                                    onChange={handleChangeTelefone}
                                    height="h-[45px]"
                                />
                                
                                <Dropdown
                                    name={"SEXO"}
                                    style={"w-full sm:w-[33%]"}
                                    options={sexoFamiliarOptions}
                                    value={dadosFamiliar.gender}
                                    onChange={handleChangeSexo}
                                    height="h-[45px]"
                                />

                                <Dropdown
                                    name={"ESCOLARIDADE"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.scholarity}
                                    onChange={handleChangeEscolaridade}
                                    options={escolaridadeOptions}
                                    height="h-[45px]"
                                />
                            </div>

                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                    name={"LOCAL DE TRABALHO"}
                                    style={"w-full sm:w-[66%]"}
                                    value={dadosFamiliar.workingPlace}
                                    onChange={handleChangeLocalTrabalho}
                                    height="h-[45px]"
                                />
                                
                                <Input
                                    name={"OCUPAÇÃO"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.occupation}
                                    onChange={handleChangeOcupacao}
                                    height="h-[45px]"
                                />

                            </div>

                            <div className="w-full flex  flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                    name={"TELEFONE DO TRABALHO"}
                                    style={"w-full sm:w-[33%] mb-3"}
                                    value={dadosFamiliar.workPhone}
                                    onChange={handleChangeTelefoneTrabalho}
                                    height="h-[45px]"
                                />

                                <Dropdown
                                    name={"PARENTESCO COM O FAMILIAR"}
                                    style={"w-[100%] sm:w-[33%]"}
                                    value={dadosFamiliar.familiarKinship}
                                    onChange={handleChangeParentesco}
                                    options={parentescoOptions}
                                    height="h-[45px]"
                                />

                                <Dropdown
                                    name={"MORA COM O FAMILIAR"}
                                    style={"w-[100%] sm:w-[33%]"}
                                    onChange={handleChangeMoraComPaciente}
                                    options={moraComPacienteOptions}
                                    height="h-[45px]"
                                />
                            </div>

                            <div className={`${erro == "..."? 'text-white': 'text-red-600'}`}>{erro}</div>

                            

                            <button
                            className="w-[80%] h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm font-bold"
                            onClick={clickProximaEtapa}
                            >
                            PRÓXIMA ETAPA
                            </button>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}