"use client"

import Header from "@/components/Header";
import DadosColaborador from "../../types/DadosColaborador";
import { useState } from "react";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../../types/DropdownOption";
import axios from 'axios';
import tokenStorage from "../../utils/token";

export default function CadastroColaborador() {
    const [dadosColaborador, setDadosColaborador] = useState<DadosColaborador>({} as DadosColaborador);
    const [erro, setErro] = useState("...");

    const cadastrar = async () => {
        try {
            console.log("entrando na função de cadastro");
    
            const sexo = dadosColaborador.sexo === "Masculino" ? "Male" : "Female";
            const token = tokenStorage.getToken();
            console.log("token:", token);
            console.log("sexo:", sexo);
        
            console.log("dadosColaborador:", dadosColaborador);
            const response = await axios.post(
                'http://localhost:8080/api/v1/auth/collaborator/register',
                {
                    name: dadosColaborador.nome,
                    email: dadosColaborador.email,
                    cpf: dadosColaborador.cpf,
                    position: dadosColaborador.cargo,
                    gender: sexo,
                    phone: dadosColaborador.telefone,
                    password: dadosColaborador.senha
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                }
            );
        
            console.log("Colaborador cadastrado com sucesso");
            window.location.href = "/gerenciar-colaboradores";
    
        } catch (error) {

    
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const errorData = error.response.data;
    
                    if (errorData.errors && errorData.errors.length > 0) {
                        setErro(errorData.errors[0]);
                    } else {
                        alert("Erro inesperado! Realize o login novamente.");
                        window.location.href = "/login";
                    }
                }
            }
        }
    }

    function handleChangeNomeColaborador(value: string) {
        setDadosColaborador({
          ...dadosColaborador,
          nome: value
        })
    }

    function handleChangeSexo(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            sexo: value
        })
    }

    function handleChangeAniversario(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            aniversario: value
        })
    }
    
    function handleChangeTelefone(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            telefone: value
        })
    }
    
    function handleChangeCPF(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            cpf: value
        })
    }

    function handleChangeCargo(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            cargo: value
        })
    }

    function handleChangeBairro(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            bairro: value
        })
    }
    
    function handleChangeRua(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            rua: value
        })
    }

    function handleChangeNumero(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            numeroCasa: value
        })
    }

    function handleChangeEmail(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            email: value
        })
    }
    function handleChangeSenha(value: string) {
        setDadosColaborador({
            ...dadosColaborador,
            senha: value
        })
    }

    const sexoOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Masculino", value: "Masculino" },
        { label: "Feminino", value: "Feminino" }
    ];

    const cargoOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "ADMIN", value: "ADMIN" },
        { label: "MANAGER", value: "MANAGER" },
        { label: "USER", value: "USER" }
    ];

    return (
        <div className="h-screen flex flex-col">
            <Header
            />

            <div className="h-full flex flex-col justify-center items-center">
                <div className="w-[75%] overflow-y-auto h-auto min-h-[90%] border border-black rounded-lg flex flex-col gap-[50px] items-center">
                    <div className="flex justify-center font-bold text-xl mt-8">Realize o Pré-Cadastro do Colaborador</div>

                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full grid grid-cols-[96%] sm:grid-cols-[50%_22%_22%] justify-center gap-[1%]">
                            <Input
                                name="NOME COMPLETO"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.nome}
                                onChange={handleChangeNomeColaborador}
                                height="h-[45px]"
                            />

                            <Dropdown
                                name="SEXO"
                                style="w-full text-sm font-bold"
                                options={sexoOptions}
                                value={dadosColaborador.sexo}
                                onChange={handleChangeSexo}
                                height="h-[45px]"
                            />

                            <Input
                                name="DATA DE NASCIMENTO"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.aniversario}
                                onChange={handleChangeAniversario}
                                height="h-[45px]"
                            />
                        </div>

                        <div className="w-full grid grid-cols-[96%] sm:grid-cols-[25%_24%_45%] justify-center gap-[1%]">
                            <Input
                                name="CPF"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.cpf}
                                onChange={handleChangeCPF}
                                height="h-[45px]"
                            />

                            <Input
                                name="TELEFONE"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.telefone}
                                onChange={handleChangeTelefone}
                                height="h-[45px]"
                            />
                            
                            <Dropdown
                                name="CARGO"
                                style="w-full text-sm font-bold"
                                options={cargoOptions}
                                value={dadosColaborador.cargo}
                                onChange={handleChangeCargo}
                                height="h-[45px]"
                            />
                        </div>
                        
                        <div className="w-full grid grid-cols-[96%] sm:grid-cols-[36%_36%_22%] justify-center gap-[1%]">
                            <Input
                                name="BAIRRO"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.bairro}
                                onChange={handleChangeBairro}
                                height="h-[45px]"
                            />

                            <Input
                                name="RUA"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.rua}
                                onChange={handleChangeRua}
                                height="h-[45px]"
                            />

                            <Input
                                name="NÚMERO DA CASA"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.numeroCasa}
                                onChange={handleChangeNumero}
                                height="h-[45px]"
                            />
                        </div>

                        <div className="w-full grid grid-cols-[60%_35%] justify-center gap-[1%]">
                            <Input
                                name="EMAIL"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.email}
                                onChange={handleChangeEmail}
                                height="h-[45px]"
                            />

                            <Input
                                name="SENHA"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.senha}
                                onChange={handleChangeSenha}
                                height="h-[45px]"
                                type="password"
                            />
                        </div>

                    </div>
                    
                    <div className={`${erro == "..."? 'text-white': 'text-red-600'}`}>{erro}</div>

                    <button
                        className="w-[200px] h-[60px] bg-[#4B8A89] text-white flex justify-center items-center rounded-lg font-bold mb-4"
                        onClick={cadastrar}
                        >
                        CADASTRAR
                    </button>

                </div>
                
            </div>
        </div>
    )
}