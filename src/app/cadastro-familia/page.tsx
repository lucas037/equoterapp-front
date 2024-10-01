"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import currentPageStorage from "../utils/currentPage";
import Header from "@/components/Header";
import tokenStorage from "../utils/token";
import Input from "@/components/Input";
import DadosSubFamiliar from "../types/DadosSubFamiliar";
import axios from "axios";
import DropdownOption from "../types/DropdownOption";
import Dropdown from "@/components/Dropdown";

export default function CadastroFamilia() {
    const [addClicked, setAddClicked] = useState(false);
    const [erro, setErro] = useState("...");
    
    const [dadosSubFamiliar, setDadosSubFamiliar] = useState<DadosSubFamiliar>({} as DadosSubFamiliar);
    const [subFamiliares, setSubFamiliares] = useState<DadosSubFamiliar[]>([]);
    const [numSubFamiliars, setNumSubFamiliars] = useState(0);

    const [patientId, setPatientId] = useState(0);

    const [editClicked, setEditClicked] = useState(-1);

    useEffect(() => {
        if (currentPageStorage.getPage() != "cadastro-familia") {
            window.location.href = "/login";
        }

        const fetch = async () => {
            const familiarId = await getFamiliarId();
            const idPatient = await getPatientId(familiarId);

            setDadosSubFamiliar({
                ...dadosSubFamiliar,
                patientId: idPatient
            })

            setPatientId(idPatient);

        };

        fetch();


    }, []);


    async function getFamiliarId() {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/auth/me', {
                headers: {
                    'Authorization': `Bearer ${tokenStorage.getToken()}`
                }
            });

            await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
            return response.data.familiar.id;

        } catch (error) {
            return -1;
        }
    }

    async function getPatientId(familiaId: number) {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/familiar/getPatients/'+familiaId, {
                headers: {
                    'Authorization': `Bearer ${tokenStorage.getToken()}`
                }
            });

            await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
            return response.data[0].id;

        } catch (error) {
            return -1;
        }
    }

    function clickAdicionarMembro() {
        if (addClicked)
            setAddClicked(false);
        else
            setAddClicked(true);
    }

    function adicionarSubFamiliar() {
        if (dadosSubFamiliar.name == "" ||dadosSubFamiliar.name == undefined) {
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
    

    async function adicionarMembrosRequest() {
        const rota = 'http://localhost:8080/api/v1/subfamiliar/'+patientId;

        try {
            const response = await axios.post(rota, subFamiliares, {
                headers: {
                    'Authorization': `Bearer ${tokenStorage.getToken()}`
                }
            });


            await tokenStorage.generateNewToken(tokenStorage.getRefreshToken());
            
            currentPageStorage.changePage(3);
            window.location.href = "/"+currentPageStorage.getPage();

    
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

    function clearSubMembroFamilia() {
        setDadosSubFamiliar({} as DadosSubFamiliar);
        
        
        setDadosSubFamiliar({
            name: '',
            familiarKinship: '',
            occupation: '',
            scholarity: '',
            income: 0,
            patientId: patientId,
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
            buttonName="Sair"
            handleClick={() => {
                tokenStorage.clearToken();
                currentPageStorage.clearCurrentPage();
                window.location.href = "/login"
            }}
            buttonsNames={["Quem Somos", "Regras", "Contatos", "Documentos"]}
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
                            { addClicked?

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

                                <div className={`${erro == "..."? 'text-white': 'text-red-600'} flex justify-center font-bold`}>{erro}</div>

                                <div className="w-full flex justify-center mt-4">
                                    <div className="w-[60%] h-[60px] bg-[#48807E] rounded-xl flex items-center text-white text-lg cursor-pointer font-bold">
                                        <div onClick={() => {setErro("..."); setAddClicked(false); setEditClicked(-1); clearSubMembroFamilia();}} className="w-[40%] bg-[#546261] h-full flex items-center justify-center rounded-xl">VOLTAR</div>
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
                                    <div className="flex font-bold">
                                        <div className="w-[25%] flex justify-center">NOME</div>
                                        <div className="w-[10%] flex justify-center">PARENTESCO</div>
                                        <div className="w-[15%] flex justify-center">PROFISSÃO</div>
                                        <div className="w-[25%] flex justify-center">ESCOLARIDADE</div>
                                        <div className="w-[10%] flex justify-center">RENDA</div>
                                        <div className="w-[15%] flex justify-center">AÇÕES</div>
                                    </div>


                                    {Array.from({ length: subFamiliares.length }).map((_, index) => (
                                        <div className="flex flex-col gap-4">
                                            <div className="flex text-[#65ADAC]">
                                                <div className="w-[25%] flex justify-center items-center">{subFamiliares[index].name}</div>
                                                <div className="w-[10%] flex justify-center items-center">{subFamiliares[index].familiarKinship}</div>
                                                <div className="w-[15%] flex justify-center items-center">{subFamiliares[index].occupation}</div>
                                                <div className="w-[25%] flex justify-center items-center">{subFamiliares[index].scholarity}</div>
                                                <div className="w-[10%] flex justify-center items-center">R${subFamiliares[index].income}</div>
                                                <div className="w-[15%] flex justify-center items-center">
                                                    <div className="flex gap-2">
                                                        <div onClick={() => editClick(index)} className="cursor-pointer flex flex-col items-center gap-1">
                                                            <Image 
                                                            src = "/assets/svg/edit.svg"
                                                            alt = ""
                                                            width={30}
                                                            height={30}
                                                            />
                                                            <div className="text-[10px] text-black">EDITAR</div>
                                                        </div>

                                                        <div onClick={() => removeClick(index)} className="cursor-pointer flex flex-col items-center gap-1">
                                                            <Image 
                                                            src = "/assets/svg/delete.svg"
                                                            alt = ""
                                                            width={30}
                                                            height={30}
                                                            />
                                                            <div className="text-[10px] text-black">REMOVER</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-[1px] bg-black"/>
                                        </div>
                                    ))}

                                </div>


                                <div onClick={clickAdicionarMembro} className="cursor-pointer border border-black w-[300px] h-[50px] flex gap-2 justify-center items-center rounded-lg mt-8">
                                    <div className="text-2xl border-2 border-black w-6 h-6 flex justify-center items-center rounded-2xl">+</div>
                                    <div className="font-bold text-lg">ADICIONAR MEMBRO</div>
                                </div>

                                <div className={`${erro == "..."? 'text-white': 'text-red-600'}`}>{erro}</div>

                                <div className="flex justify-center">
                                    <div onClick={adicionarMembrosRequest} className="cursor-pointer w-[300px] h-[50px] bg-[#48807E] text-white rounded-xl font-bold text-lg flex justify-center items-center">SALVAR</div>
                                </div>
                            </div>
                            
                            }
                        </div>


                </div>
            </div>
            
        </div>
    )
}