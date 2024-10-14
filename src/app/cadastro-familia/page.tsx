"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import currentPageStorage from "../../utils/currentPage";
import Header from "@/components/Header";
import tokenStorage from "../../utils/token";
import Input from "@/components/Input";
import DadosSubFamiliar from "../../types/DadosSubFamiliar";
import axios from "axios";
import DropdownOption from "../../types/DropdownOption";
import Dropdown from "@/components/Dropdown";
import requestsAuth from '../../utils/requestsAuth';
import requestsPatient from '../../utils/requestsPatient';
import requestsSubFamiliar from '../../utils/requestsSubFamiliar';

export default function CadastroFamilia() {
    const [addClicked, setAddClicked] = useState(false);
    const [erro, setErro] = useState("...");

    const [dadosSubFamiliar, setDadosSubFamiliar] = useState<DadosSubFamiliar>({} as DadosSubFamiliar);
    const [subFamiliares, setSubFamiliares] = useState<DadosSubFamiliar[]>([]);
    const [numSubFamiliars, setNumSubFamiliars] = useState(0);

    const [editClicked, setEditClicked] = useState(-1);

    useEffect(() => {
        const fetchData = async () => {
            if (currentPageStorage.getPage() !== "cadastro-familia") {
                window.location.href = "/login";
            }

            if (requestsAuth.getPatientId() <= 0)
                await requestsPatient.getPatientId(requestsAuth.getFamiliarId());

        };

        fetchData();
    }, []);

    async function adicionarMembrosFamiliarRequest() {
        if (subFamiliares.length < 1)
            setErro("Selecione todas as pessoas que moram na mesma casa que o paciente.")

        else {
            await requestsSubFamiliar.registerPatient(subFamiliares);

            if (requestsSubFamiliar.messageError != "")
                setErro(requestsSubFamiliar.messageError)
            else {
                currentPageStorage.changePage(3);
                window.location.href = "/" + currentPageStorage.getPage();
            }
        }
    }

    function clickAdicionarMembro() {
        if (addClicked)
            setAddClicked(false);
        else
            setAddClicked(true);
    }

    function adicionarSubFamiliar() {
        dadosSubFamiliar.patientId = requestsAuth.getPatientId();

        if (dadosSubFamiliar.name == "" || dadosSubFamiliar.name == undefined) {
            setErro("O nome do subfamiliar não pode ser vazio.");
            return;
        }

        if (dadosSubFamiliar.familiarKinship == "" || dadosSubFamiliar.familiarKinship == undefined) {
            setErro("O parentesco não pode ser vazio.");
            return;
        }

        if (dadosSubFamiliar.occupation == "" || dadosSubFamiliar.occupation == undefined) {
            setErro("A profissão não pode ser vazia.");
            return;
        }

        if (dadosSubFamiliar.scholarity == "" || dadosSubFamiliar.scholarity == undefined) {
            setErro("A escolaridade não pode ser vazia.");
            return;
        }

        if (dadosSubFamiliar.income == undefined) {
            setErro("O salário não pode ser vazio.");
            return;
        }

        setErro("...");
        clearSubMembroFamilia();

        if (editClicked >= 0) { // lógica de edição
            const updatedArray = subFamiliares;
            updatedArray[editClicked] = dadosSubFamiliar;
            setSubFamiliares(updatedArray);

        }
        else { // lógica de adição
            const updatedArray = [...subFamiliares];

            updatedArray[numSubFamiliars] = dadosSubFamiliar;

            setSubFamiliares(updatedArray);
            setNumSubFamiliars(numSubFamiliars + 1);

        }

        setEditClicked(-1);
        setAddClicked(false);
    }

    function clearSubMembroFamilia() {
        setDadosSubFamiliar({} as DadosSubFamiliar);
        setDadosSubFamiliar({
            name: '',
            familiarKinship: '',
            occupation: '',
            scholarity: '',
            income: 0,
            patientId: requestsAuth.getPatientId(),
        });
    }

    function editClick(index: number) {
        setDadosSubFamiliar(subFamiliares[index]);

        setEditClicked(index);
        setAddClicked(true);
    }

    function removeClick(index: number) {
        setSubFamiliares(subFamiliares =>
            subFamiliares.filter((_, i) => i !== index)
        );

        setNumSubFamiliars(numSubFamiliars - 1);
    }

    function handleChangeNome(value: string) {
        setDadosSubFamiliar({
            ...dadosSubFamiliar,
            name: value
        })
    }

    function handleChangeParentesco(value: string) {
        setDadosSubFamiliar({
            ...dadosSubFamiliar,
            familiarKinship: value
        })
    }

    function handleChangeProfissao(value: string) {
        setDadosSubFamiliar({
            ...dadosSubFamiliar,
            occupation: value
        })
    }

    function handleChangeEscolaridade(value: string) {
        setDadosSubFamiliar({
            ...dadosSubFamiliar,
            scholarity: value
        })
    }

    function handleChangeSalario(value: string) {
        setDadosSubFamiliar({
            ...dadosSubFamiliar,
            income: parseFloat(value)
        })
    }

    const escolaridadeOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Ensino Fundamental Incompleto", value: "ENSINO_FUNDAMENTAL_INCOMPLETO" },
        { label: "Ensino Fundamental Completo", value: "ENSINO_FUNDAMENTAL_COMPLETO" },
        { label: "Ensino Médio Incompleto", value: "ENSINO_MEDIO_INCOMPLETO" },
        { label: "Ensino Médio Completo", value: "ENSINO_MEDIO_COMPLETO" },
        { label: "Ensino Técnico", value: "ENSINO_TECNICO" },
        { label: "Ensino Superior Incompleto", value: "ENSINO_SUPERIOR_INCOMPLETO" },
        { label: "Ensino Superior Completo", value: "ENSINO_SUPERIOR_COMPLETO" },
        { label: "Pós Graduação", value: "POS_GRADUAÇÃO" },
        { label: "Mestrado", value: "MESTRADO" },
        { label: "Doutorado", value: "DOUTORADO" },
    ];

    const parentescoOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Paciente", value: "PACIENTE" },
        { label: "Pai", value: "PAI" },
        { label: "Mãe", value: "MAE" },
        { label: "Avó(ô)", value: "AVÓ" },
        { label: "Tia(o)", value: "TIA" },
        { label: "Irmã(o)", value: "IRMÃ" },
        { label: "Outro", value: "OUTRO" },
    ];

    return (
        <div className="h-screen flex flex-col justify-between">
            <Header
            />

            <div className="h-[calc(100vh-140px)] flex justify-center items-center">
                <div className="h-[95%] overflow-auto w-[90%] border border-black rounded-lg flex flex-col items-center">

                    <div className="flex flex-col items-center mt-8 mb-4">
                        <div className="text-sm font-bold">INFORME OS DADOS DOS MEMRBOS DA CASA DO PACIENTE</div>
                        <div className="text-4xl flex">
                            <div className="text-[#137472]">•••</div>
                        </div>
                    </div>

                    <div className="w-[80%] h-full">
                        {addClicked ?

                            <div className="w-full flex flex-col gap-4">
                                <div className="text-sm font-bold flex justify-center">ADIÇÃO DE NOVO MEMBRO DA FAMÍLIA</div>

                                <div className="flex flex-col gap-3 items-center text-sm">

                                    <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between font-bold">
                                        <Input
                                            name={"NOME"}
                                            style={"w-[100%] sm:w-[66%]"}
                                            value={dadosSubFamiliar.name}
                                            onChange={handleChangeNome}
                                            height="h-[45px]"
                                        />

                                        <Dropdown
                                            name={"PARENTESCO"}
                                            style={"w-[100%] sm:w-[33%]"}
                                            options={parentescoOptions}
                                            onChange={handleChangeParentesco}
                                            height="h-[45px]"
                                        />

                                    </div>

                                    <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between font-bold">

                                        <Input
                                            name={"PROFISSÃO"}
                                            style={"w-[100%] sm:w-[32.66%]"}
                                            value={dadosSubFamiliar.occupation}
                                            onChange={handleChangeProfissao}
                                            height="h-[45px]"
                                        />

                                        <Dropdown
                                            name={"ESCOLARIDADE"}
                                            style={"w-[100%] sm:w-[32.66%]"}
                                            options={escolaridadeOptions}
                                            onChange={handleChangeEscolaridade}
                                            height="h-[45px]"
                                        />

                                        <Input
                                            name={"SALARIO"}
                                            style={"w-[100%] sm:w-[32.66%]"}
                                            value={dadosSubFamiliar.income != null ? dadosSubFamiliar.income.toString() : ''}
                                            onChange={handleChangeSalario}
                                            height="h-[45px]"
                                        />

                                    </div>
                                </div>

                                <div className={`${erro == "..." ? 'text-white' : 'text-red-600'} flex justify-center font-bold`}>{erro}</div>

                                <div className="w-full flex justify-center mt-4">
                                    <div className="w-[60%] h-[60px] bg-[#48807E] rounded-xl flex items-center text-white text-lg cursor-pointer font-bold">
                                        <div onClick={() => { setErro("..."); setAddClicked(false); setEditClicked(-1); clearSubMembroFamilia(); }} className="w-[40%] bg-[#546261] h-full flex items-center justify-center rounded-xl">VOLTAR</div>
                                        <div onClick={adicionarSubFamiliar} className="flex justify-center items-center h-full w-[60%]">
                                            {
                                                editClicked >= 0 ?
                                                    'EDITAR' :
                                                    'ADICIONAR'
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>

                            :

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-4 uppercase">
                                    <div className="flex font-bold text-center flex-nowrap">
                                        <div className="w-[25%] min-w-[70px] flex justify-center text-[1vw] md:text-base">Nome</div>
                                        <div className="w-[15%] min-w-[60px] flex justify-center text-[1vw] md:text-base">Parentesco</div>
                                        <div className="w-[20%] min-w-[80px] flex justify-center text-[1vw] md:text-base">Profissão</div>
                                        <div className="w-[20%] min-w-[80px] flex justify-center text-[1vw] md:text-base">Escolaridade</div>
                                        <div className="w-[10%] min-w-[50px] flex justify-center text-[1vw] md:text-base">Renda</div>
                                        <div className="w-[10%] min-w-[50px] flex justify-center text-[1vw] md:text-base">Ações</div>
                                    </div>

                                    {
                                        subFamiliares.map((subFamiliar, index) => (
                                            <div key={subFamiliar.patientId || index} className="flex flex-col gap-4">
                                                <div className="flex text-[#65ADAC]">
                                                    <div className="w-[25%] min-w-[70px] flex justify-center text-[1vw] md:text-base">{subFamiliar.name}</div>
                                                    <div className="w-[15%] min-w-[60px] flex justify-center text-[1vw] md:text-base">{subFamiliar.familiarKinship}</div>
                                                    <div className="w-[20%] min-w-[80px] flex justify-center  text-[1vw] md:text-base">{subFamiliar.occupation}</div>
                                                    <div className="w-[20%] min-w-[80px] flex justify-center text-[1vw]">{subFamiliar.scholarity}</div>
                                                    <div className="w-[10%] min-w-[50px] flex justify-center text-[1vw] md:text-base">R${subFamiliar.income}</div>
                                                    <div className="w-[10%] min-w-[50px] flex justify-end text-[1vw] md:text-base">
                                                        <div className="flex gap-2">
                                                            <div onClick={() => editClick(index)} className="cursor-pointer flex flex-col items-center gap-1">
                                                                <Image
                                                                    src="/assets/svg/edit.svg"
                                                                    alt="Editar"
                                                                    width={10}
                                                                    height={10}
                                                                    className="w-4 h-4 md:w-3 md:h-3 lg:w-5 lg:h-5"
                                                                />
                                                                <div className="text-[10px] text-black">Editar</div>
                                                            </div>

                                                            <div onClick={() => removeClick(index)} className="cursor-pointer flex flex-col items-center gap-1">
                                                                <Image
                                                                    src="/assets/svg/delete.svg"
                                                                    alt="Remover"
                                                                    width={30}
                                                                    height={30}
                                                                    className="w-4 h-4 md:w-3 md:h-3 lg:w-5 lg:h-5"
                                                                />
                                                                <div className="text-[10px] text-black">Remover</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[1px] bg-black" />
                                            </div>
                                        ))
                                    }

                                </div>

                                <div onClick={clickAdicionarMembro} className="cursor-pointer border border-black w-[300px] h-[50px] flex gap-2 justify-center items-center rounded-lg mt-20">
                                    <div className="text-2xl border-2 border-black w-6 h-6 flex justify-center items-center rounded-2xl">+</div>
                                    <div className="font-bold text-lg">ADICIONAR MEMBRO</div>
                                </div>

                                <div className={`${erro == "..." ? 'text-white' : 'text-red-600'}`}>{erro}</div>

                                <div className="flex justify-center">
                                    <div onClick={adicionarMembrosFamiliarRequest} className="cursor-pointer w-[100%] h-[50px] bg-[#48807E] text-white font-bold text-lg flex justify-center items-center rounded-lg">SALVAR</div>
                                </div>
                            </div>

                        }
                    </div>


                </div>
            </div>

        </div>
    )
}