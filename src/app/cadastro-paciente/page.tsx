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
import { aplicarMascaraCPF } from '@/app/cadastro/page';

export default function Page() {
    const [dadosPaciente, setDadosPaciente] = useState<DadosPaciente>({} as DadosPaciente);
    const [erro, setErro] = useState('...');

    useEffect(() => {
        if (currentPageStorage.getPage() != "cadastro-paciente")
            window.location.href = "/login";
    }, []);

    async function clickProximaEtapa() {

        if (!dadosPaciente.name || !dadosPaciente.cpf || !dadosPaciente.birthDate || !dadosPaciente.sexo || !dadosPaciente.birthDate) {
            setErro('Por favor, preencha todos os campos.');
            return;
        }

        // Converte a data para o formato americano
        const [day, month, year] = dadosPaciente.birthDate.split('/');
        const birthDateAmericanFormat = `${year}-${month}-${day}`;

        const pacienteDataToSend = {
            ...dadosPaciente,
            birthDate: birthDateAmericanFormat, // Substitui a data
        };

        await requestsPatient.registerPatient(pacienteDataToSend);

        if (requestsPatient.messageError != "")
            setErro(requestsPatient.messageError)
        else {
            currentPageStorage.changePage(2);
            window.location.href = "/" + currentPageStorage.getPage();
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
            cpf: aplicarMascaraCPF(value),
        });
    }

    function handleChangeSexo(value: string) {
        changeDadosPaciente({
            ...dadosPaciente,
            sexo: value,
        });
    }

    function handleChangeBirthdate(value: string) {
        // Remove caracteres não numéricos
        const somenteNumeros = value.replace(/\D/g, '');

        // Inicializa a variável de valor formatado
        let formattedValue = '';

        // Aplica a máscara se houver dígitos suficientes
        if (somenteNumeros.length > 0) {
            formattedValue += somenteNumeros.substring(0, 2); // Dia
        }
        if (somenteNumeros.length > 2) {
            formattedValue += '/' + somenteNumeros.substring(2, 4); // Mês
        }
        if (somenteNumeros.length > 4) {
            formattedValue += '/' + somenteNumeros.substring(4, 8); // Ano
        }

        // Atualiza o estado com a data formatada
        changeDadosPaciente({
            ...dadosPaciente,
            birthDate: formattedValue,
        });

        // Validação da data
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
        if (regex.test(formattedValue)) {
            console.log("Data de nascimento válida:", formattedValue);
        } else {
            console.error("Data de nascimento inválida. Use o formato DD/MM/AAAA.");
        }
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
        const somenteNumeros = value.replace(/\D/g, '');
        if (somenteNumeros.length <= 11) {
            changeDadosPaciente({
                ...dadosPaciente,
                nis: somenteNumeros,
            });
        }
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
                        src="/assets/adulto.png"
                        alt=""
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


                            <div className={`${erro == "..." ? 'text-white' : 'text-red-600'}`}>{erro}</div>



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
