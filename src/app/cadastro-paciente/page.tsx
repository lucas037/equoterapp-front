"use client";

import { useEffect, useState } from 'react';
import tokenStorage from '../../utils/token';
import currentPageStorage from '../../utils/currentPage';
import requestsPatient from '../../utils/requestsPatient';
import Image from 'next/image';
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../../types/DropdownOption";
import Header from '@/components/Header';
import DadosPaciente from '../../types/DadosPaciente';

export default function Page() {
    const [dadosPaciente, setDadosPaciente] = useState<DadosPaciente>({} as DadosPaciente);
    const [erro, setErro] = useState('...');

    useEffect(() => {
        if (currentPageStorage.getPage() != "cadastro-paciente")
            window.location.href = "/login";
    }, []);

    async function clickProximaEtapa() {
        await requestsPatient.registerPatient(dadosPaciente);

        if (requestsPatient.messageError != "")
            setErro(requestsPatient.messageError)
        else {
            currentPageStorage.changePage(2);
            window.location.href = "/"+currentPageStorage.getPage();
        }
    }

    function changeDadosPaciente(dadosPaciente: DadosPaciente) {
        setDadosPaciente(dadosPaciente);
    }

    function handleChangeNome(value: string) {
        changeDadosPaciente({
          ...dadosPaciente,
          name: value,
        });
    }

    function handleChangeCPF(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            cpf: value,
        });
    }

    function handleChangeSexo(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            sexo: value,
        });
    }

    function handleChangeBirthdate(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            birthDate: value,
        });
    }

    function handleChangeIsStudent(value: string) {
        if (value == "s") {
            changeDadosPaciente({
                ...dadosPaciente,
                student: true
            })
        }
        else {
            changeDadosPaciente({
                ...dadosPaciente,
                student: false
            })
        }
    }

    function handleChangeNaturalness(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            naturalness: value,
        });
    }

    function handleChangeNationality(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            nationality: value,
        });
    }

    function handleChangeBolsaFamilia(value: string) {
        if (value == "s") {
            changeDadosPaciente({
                ...dadosPaciente,
                bolsaFamilia: true
            })
        }
        else {
            changeDadosPaciente({
                ...dadosPaciente,
                bolsaFamilia: false
            })
        }
    }

    function handleChangeTypeOfDisability(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            typeOfDisability: value,
        });
    }

    function handleChangeTypeOfHousing(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            typeOfHousing: value,
        });
    }

    function handleChangeNumeroNis(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            nis: value,
        });
    }
    
    const isStudentOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Sim", value: "s" },
        { label: "Não", value: "n" },
    ];

    const sexoOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Masculino", value: "male" },
        { label: "Feminino", value: "female" },
    ];

    const bolsaFamiliaOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Sim", value: "s" },
        { label: "Não", value: "n" },
    ];

    return (
        <div className="">
            <Header
            buttonName="Sair"
            handleClick={() => {
                tokenStorage.clearToken();
                currentPageStorage.clearCurrentPage();
                window.location.href = "/login"
            }}
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
                            <div className="text-sm font-bold">INFORME OS DADOS DO PACIENTE</div>
                            <div className="text-4xl flex">
                                <div className="text-[#137472]">••</div>
                                •
                            </div>
                        </div>

                        <div className="w-[90%] text-sm font-bold flex flex-col items-center gap-3">
                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                name={"NOME"}
                                style={"w-[100%] sm:w-[66%]"}
                                value={dadosPaciente.name}
                                onChange={handleChangeNome}
                                height="h-[45px]"
                                />

                                <Input
                                name={"CPF"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.cpf}
                                onChange={handleChangeCPF}
                                height="h-[45px]"
                                />
                            </div>

                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                name={"DATA DE NASCIMENTO"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.birthDate}
                                onChange={handleChangeBirthdate}
                                height="h-[45px]"
                                />

                                <Dropdown
                                name={"SEXO"}
                                style={"w-[100%] sm:w-[33%]"}
                                options={sexoOptions}
                                onChange={handleChangeSexo}
                                height="h-[45px]"
                                />

                                <Dropdown
                                name={"PACIENTE É ESTUDANTE?"}
                                style={"w-[100%] sm:w-[33%]"}
                                options={isStudentOptions}
                                onChange={handleChangeIsStudent}
                                height="h-[45px]"
                                />
                            </div>

                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                name={"NACIONALIDADE"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.nationality}
                                onChange={handleChangeNationality}
                                height="h-[45px]"
                                />

                                <Input
                                name={"NATURALIDADE"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.naturalness}
                                onChange={handleChangeNaturalness}
                                height="h-[45px]"
                                />

                                <Dropdown
                                name={"BENEFICIÁRIO DO BOLSA FAMÍLIA"}
                                style={"w-[100%] sm:w-[33%]"}
                                options={bolsaFamiliaOptions}
                                onChange={handleChangeBolsaFamilia}
                                height="h-[45px]"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between">
                                <Input
                                name={"TIPO DE DEFICIÊNCIA"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.typeOfDisability}
                                onChange={handleChangeTypeOfDisability}
                                height="h-[45px]"
                                />

                                <Input
                                name={"TIPO DE CASA"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.typeOfHousing}
                                onChange={handleChangeTypeOfHousing}
                                height="h-[45px]"
                                />

                                <Input
                                name={"NÚMERO DO NIS"}
                                style={"w-[100%] sm:w-[33%]"}
                                value={dadosPaciente.nis}
                                onChange={handleChangeNumeroNis}
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
