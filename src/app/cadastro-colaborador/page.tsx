"use client"

import Header from "@/components/Header";
import DadosColaborador from "../types/DadosColaborador";
import { useState } from "react";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../types/DropdownOption";

export default function CadastroColaborador() {
    const [dadosColaborador, setDadosColaborador] = useState<DadosColaborador>({} as DadosColaborador);

    function handleClick() {
      window.location.href = "/login";
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
        { label: "Gerente", value: "Gerente" },
        { label: "Colaborador", value: "Colaborador" },
        { label: "Psicólogo", value: "Psicologo" },
        { label: "Mediador", value: "Mediador" },
        { label: "Guia", value: "Guia" }
    ];

    return (
        <div className="h-screen flex flex-col">
            <Header
                buttonName='Entrar'
                handleClick={handleClick}
                buttonsNames={["Verificar Documentos", "Sessões", "Gerenciamento", "Perfil"]}
            />

            <div className="h-full flex flex-col justify-center items-center">
                <div className="w-[96%] overflow-y-auto h-auto min-h-[90%] border border-black rounded-lg flex flex-col gap-[50px] items-center">
                    <div className="flex justify-center font-bold text-xl mt-8">Realize o Pré-Cadastro do Colaborador</div>

                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full grid grid-cols-[96%] sm:grid-cols-[50%_22%_22%] justify-center gap-[1%]">
                            <Input
                                name="NOME COMPLETO"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.nome}
                                onChange={handleChangeNomeColaborador}
                            />

                            <Dropdown
                                name="SEXO"
                                style="w-full text-sm font-bold"
                                options={sexoOptions}
                                value={dadosColaborador.sexo}
                                onChange={handleChangeSexo}
                            />

                            <Input
                                name="ANIVERSÁRIO"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.aniversario}
                                onChange={handleChangeAniversario}
                            />
                        </div>

                        <div className="w-full grid grid-cols-[96%] sm:grid-cols-[25%_24%_45%] justify-center gap-[1%]">
                            <Input
                                name="CPF"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.cpf}
                                onChange={handleChangeCPF}
                            />

                            <Input
                                name="TELEFONE"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.telefone}
                                onChange={handleChangeTelefone}
                            />
                            
                            <Dropdown
                                name="CARGO"
                                style="w-full text-sm font-bold"
                                options={cargoOptions}
                                value={dadosColaborador.cargo}
                                onChange={handleChangeCargo}
                            />
                        </div>
                        
                        <div className="w-full grid grid-cols-[96%] sm:grid-cols-[36%_36%_22%] justify-center gap-[1%]">
                            <Input
                                name="BAIRRO"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.bairro}
                                onChange={handleChangeBairro}
                            />

                            <Input
                                name="RUA"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.rua}
                                onChange={handleChangeRua}
                            />

                            <Input
                                name="NÚMERO DA CASA"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.numeroCasa}
                                onChange={handleChangeNumero}
                            />
                        </div>

                        <div className="w-full grid grid-cols-[60%_35%] justify-center gap-[1%]">
                            <Input
                                name="EMAIL"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.email}
                                onChange={handleChangeEmail}
                            />

                            <Input
                                name="SENHA"
                                style="w-full text-sm font-bold"
                                value={dadosColaborador.senha}
                                onChange={handleChangeSenha}
                                type="password"
                            />
                        </div>

                    </div>

                    <button
                        className="w-[200px] h-[60px] bg-[#4B8A89] text-white flex justify-center items-center rounded-lg font-bold mb-4"
                        onClick={handleClick}
                        >
                        CADASTRAR
                    </button>

                </div>
                
            </div>
        </div>
    )
}