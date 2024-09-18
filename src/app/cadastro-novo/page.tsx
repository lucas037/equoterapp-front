"use client"

import Header from "@/components/Header";
import { useState } from "react";
import Image from 'next/image';
import Input from "@/components/Input";
import DadosFamiliar from "../types/DadosFamiliar";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../types/DropdownOption";
import axios from "axios";

export default function cadastro() {
    const [etapa, setEtapa] = useState(1);
    const [dadosFamiliar, setDadosFamiliar] = useState<DadosFamiliar>({} as DadosFamiliar);

    async function clickProximaEtapa() {
        alert(JSON.stringify(dadosFamiliar));

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/familiar/register', dadosFamiliar);
            console.log('Success:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert('Axios Error Message:'+ error.message);
        
                if (error.response) {
                    const errorData = error.response.data;
        
                    if (errorData) {
                        alert(errorData.httpStatus);
                        alert(errorData.errors);
                    }
                }
  
            }
        }
    }

    function changeDadosFamiliar(dadosFamiliar: DadosFamiliar) {
        setDadosFamiliar(dadosFamiliar);
    }

    function handleChangeNome(value: string) {
        changeDadosFamiliar({
          ...dadosFamiliar,
          nome: value,
        });
    }

    function handleChangeCPF(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            cpf: value,
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
            senha: value,
        });
    }

    function handleChangeTelefone(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            telefone: value,
        });
    }

    function handleChangeSexo(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            sexo: value,
        });
    }

    function handleChangeEscolaridade(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            escolaridade: value,
        });
    }

    function handleChangeLocalTrabalho(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            localTrabalho: value,
        });
    }

    function handleChangeOcupacao(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            ocupacao: value,
        });
    }

    function handleChangeTelefoneTrabalho(value: string) {
        changeDadosFamiliar({
            ...dadosFamiliar,
            telefoneTrabalho: value,
        });
    }
    
    const sexoFamiliarOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Masculino", value: "Masculino" },
        { label: "Feminino", value: "Feminino" }
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
                                style={"w-[100%] sm:w-[66.5%]"}
                                value={dadosFamiliar.nome}
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
                                value={dadosFamiliar.senha}
                                onChange={handleChangeSenha}
                                type="password"
                                height="h-[45px]"
                                />

                            </div>

                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                    name={"TELEFONE"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.telefone}
                                    onChange={handleChangeTelefone}
                                    height="h-[45px]"
                                />
                                
                                <Dropdown
                                    name={"SEXO"}
                                    style={"w-full sm:w-[33%]"}
                                    options={sexoFamiliarOptions}
                                    value={dadosFamiliar.sexo}
                                    onChange={handleChangeSexo}
                                    height="h-[45px]"
                                />

                                <Input
                                    name={"ESCOLARIDADE"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.escolaridade}
                                    onChange={handleChangeEscolaridade}
                                    height="h-[45px]"
                                />
                            </div>

                            <div className="w-full flex  flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                    name={"LOCAL DE TRABALHO"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.localTrabalho}
                                    onChange={handleChangeLocalTrabalho}
                                    height="h-[45px]"
                                />
                                
                                <Input
                                    name={"OCUPAÇÃO"}
                                    style={"w-full sm:w-[33%]"}
                                    value={dadosFamiliar.ocupacao}
                                    onChange={handleChangeOcupacao}
                                    height="h-[45px]"
                                />

                                <Input
                                    name={"TELEFONE DO TRABALHO"}
                                    style={"w-full sm:w-[33%] mb-3"}
                                    value={dadosFamiliar.telefoneTrabalho}
                                    onChange={handleChangeTelefoneTrabalho}
                                    height="h-[45px]"
                                />
                            </div>

                            

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