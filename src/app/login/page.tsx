"use client"

import Header from "@/components/Header";
import { useState } from "react";
import Image from 'next/image';
import Input from "@/components/Input";
import DropdownOption from "../../types/DropdownOption";
import currentPageStorage from '../../utils/currentPage';
import requestsAuth from '../../utils/requestsAuth';

interface DadosLogin {
    email: string,
    password: string
}

export default function Login() {
    const [dadosLogin, setDadosLogin] = useState<DadosLogin>({} as DadosLogin);
    const [erro, setErro] = useState('...');

    async function clickProximaEtapa() {
        
        if (!dadosLogin.email || !dadosLogin.password) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        await requestsAuth.login(dadosLogin.email, dadosLogin.password);

        if (!requestsAuth.loginStatus)
            setErro(requestsAuth.messageError);

        else {
            if (requestsAuth.position != "") // É um colaborador
                currentPageStorage.changePage(0);

            else // É um familiar
                currentPageStorage.changePage(requestsAuth.status);

            window.location.href = "/"+currentPageStorage.getPage();
        }
    }

    function changeDadosFamiliar(dadosLogin: DadosLogin) {
        setDadosLogin(dadosLogin);
    }

    function handleChangeEmail(value: string) {
        changeDadosFamiliar({
            ...dadosLogin,
            email: value,
        });
    }

    function handleChangeSenha(value: string) {
        changeDadosFamiliar({
            ...dadosLogin,
            password: value,
        });
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

    return (
        <div className="">
            <Header
            userNotLogged={true}
            buttonExtraName="Cadastro"
            routeExtra="/cadastro"
            routeLogo="/"
            />

            <div className="w-full h-[calc(100vh-160px)] flex justify-center items-center">
                <div className="w-[95%] h-[90%] border flex border-gray-400 mb-3" >
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
                        </div>

                        <div className="w-[90%] text-sm font-bold flex flex-col items-center gap-3">
                            <Input
                            name={"EMAIL"}
                            style={"w-[80%]"}
                            value={dadosLogin.email}
                            onChange={handleChangeEmail}
                            height="h-[45px]"
                            />

                            <Input
                            name={"SENHA"}
                            style={"w-[80%]"}
                            value={dadosLogin.password}
                            onChange={handleChangeSenha}
                            height="h-[45px]"
                            type="password"
                            />


                            <div className={`${erro == "..."? 'text-white': 'text-red-600'}`}>{erro}</div>

                            <button
                            className="w-[80%] h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm font-bold"
                            onClick={clickProximaEtapa}
                            >
                            ENTRAR
                            </button>

                        </div>

                        <div className="flex gap-1 font-bold text-sm">
                            <div>NÃO POSSUI CONTA?</div>
                            <div className="underline" onClick={() => {window.location.href = "/cadastro"}}>CADASTRE-SE</div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}