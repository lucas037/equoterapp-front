"use client"

import { useEffect, useState } from "react"
import requestsAuth from '../../utils/requestsAuth';
import requestsFamiliar from '../../utils/requestsFamiliar';
import requestsPatient from '../../utils/requestsPatient';
import requestsSubFamiliar from '../../utils/requestsSubFamiliar';
import Header from "@/components/Header";
import DadosSubFamiliar from "@/types/DadosSubFamiliar";

export default function VericarCadastros() {
    const [names, setNames] = useState<string[]>([]);
    const [ids, setIds] = useState<number[]>([]);
    const [index, setIndex] = useState(-1);

    const [namePatient, setNamePatient] = useState("");
    const [subFamiliars, setSubFamiliars] = useState<DadosSubFamiliar[]>([]);
    
    useEffect(() => {
        if (requestsAuth.getPosition() === "") {
            window.location.href = "/login";
        }

        const fetchData = async () => {
            await requestsFamiliar.getFamliars();
            setNames(requestsFamiliar.names);
            setIds(requestsFamiliar.ids);
        };

        fetchData();
    }, []);

    async function activeModal(index: number) {
        setIndex(index)

        await requestsPatient.getPatient(ids[index]);

        setNamePatient(requestsPatient.name);

        await requestsSubFamiliar.getSubFamiliars(requestsAuth.getPatientId());
        setSubFamiliars(requestsSubFamiliar.familiars);
    }

    async function changeStatus(newStatus: boolean) {
        await requestsFamiliar.approvePreCadastro(ids[index], newStatus);
        window.location.href = "/verificar-cadastros"
    }

    return (
        <div className="h-screen flex flex-col">
            <Header
            buttonName="Sair"
            handleClick={() => {window.location.href = "/login"}}
            buttonsNames={["Verificar Documentos", "Verificar Cadastros", "Gerenciamento", "Perfil"]}
            />

            <div className="w-full h-full flex justify-center items-center">
                
                <div className="min-h-[96%] w-[96%] border border-black p-8 flex justify-center">

                    {ids.length <= 0 && <div className="w-full flex justify-center items-center text-sm font-bold">Nenhum pré-cadastro pendente.</div>}

                    { index < 0 ?

                        <div className="w-[90%] h-full inline-flex flex-wrap gap-4">

                            {names.map((name, index) => (
                                <div onClick={() => {activeModal(index)}} key={index} className="w-[350px] h-[100px] border border-[#255A59] rounded-2xl p-4 font-bold text-[#255A59] flex justify-between cursor-pointer">
                                    <div className="uppercase">{name}</div>
                                    <div className="w-[60px] h-[60px] border border-4 border-[#4B8A89] text-[#4B8A89] rounded-xl flex justify-center items-center">
                                        <div className="text-5xl">{">"}</div>
                                    </div>
                                </div>
                            ))}


                        </div>
                            

                        :

                        <div className="w-full h-[30px] flex flex-col items-center gap-8">

                            <div className="w-[96%] p-2 flex justify-between bg-[#4B8A89] text-white uppercase text-sm">
                                <div>VERIFICAÇÃO DE PRÉ-CADASTRO</div>
                                <div>Paciente: {namePatient} / Responsável: {names[index]}</div>
                            </div>

                            <div className="w-full flex flex-col gap-4 uppercase">
                                <div className="flex font-bold">
                                    <div className="w-[25%] flex justify-center">NOME</div>
                                    <div className="w-[15%] flex justify-center">PARENTESCO</div>
                                    <div className="w-[20%] flex justify-center">PROFISSÃO</div>
                                    <div className="w-[25%] flex justify-center">ESCOLARIDADE</div>
                                    <div className="w-[15%] flex justify-center">RENDA</div>
                                </div>

                                {
                                    subFamiliars.map((subFamiliar, index) => (
                                        <div key={subFamiliar.patientId || index} className="flex flex-col gap-4">
                                            <div className="flex text-[#65ADAC]">
                                                <div className="w-[25%] flex justify-center items-center">{subFamiliar.name}</div>
                                                <div className="w-[15%] flex justify-center items-center">{subFamiliar.familiarKinship}</div>
                                                <div className="w-[20%] flex justify-center items-center">{subFamiliar.occupation}</div>
                                                <div className="w-[25%] flex justify-center items-center">{subFamiliar.scholarity}</div>
                                                <div className="w-[15%] flex justify-center items-center">R${subFamiliar.income}</div>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                            
                            <div className="flex gap-4">
                                <div onClick={() => {changeStatus(true)}} className="p-4 bg-red-400 cursor-pointer">
                                    <div>APROVAR PRÉ-CADASTRO</div>
                                </div>

                                <div onClick={() => {changeStatus(false)}} className="p-4 bg-red-400 cursor-pointer">
                                    <div>REPROVAR PRÉ-CADASTRO</div>
                                </div>
                            </div>

                        </div>


                        

                    }
                </div>
            </div>
        </div>
    )
}