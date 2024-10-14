"use client";

import { useEffect, useState } from "react";
import requestsAuth from '../../utils/requestsAuth';
import requestsFamiliar from '../../utils/requestsFamiliar';
import requestsPatient from '../../utils/requestsPatient';
import requestsSubFamiliar from '../../utils/requestsSubFamiliar';
import Header from "@/components/Header";
import DadosSubFamiliar from "@/types/DadosSubFamiliar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Person, Person3 } from "@mui/icons-material";
import { Botao } from "@/components/Botao";

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
          
            const combined = requestsFamiliar.names.map((name: string, index: number) => ({
              name,
              id: requestsFamiliar.ids[index],
            }));
            
            combined.sort((a, b) => a.name.localeCompare(b.name));
            
            setNames(combined.map(item => item.name));
            setIds(combined.map(item => item.id));
          };
          

        fetchData();
    }, []);

    async function activeModal(index: number) {
        setIndex(index);
        setSubFamiliars([]);

        await requestsPatient.getPatient(ids[index]);

        setNamePatient(requestsPatient.name);

        await requestsSubFamiliar.getSubFamiliars(requestsAuth.getPatientId());
        setSubFamiliars(requestsSubFamiliar.familiars);
    }

    async function changeStatus(newStatus: boolean) {
        await requestsFamiliar.approvePreCadastro(ids[index], newStatus);
        window.location.href = "/gerenciar-cadastros";
    }

    return (
        <div className="h-screen flex flex-col">
            <Header
                collaborator={true}
            />

            <div className="w-full h-full px-20">
                <div className="w-full h-full border-2 border-black p-4">
                    {ids.length <= 0 && <div className="w-full flex justify-center items-center text-sm font-bold">Nenhum pré-cadastro pendente.</div>}

                    {index < 0 ? (
                        <div className="w-full h-full inline-flex flex-wrap gap-4">
                            {names.map((name, index) => (
                                <div onClick={() => { activeModal(index); }} key={index} className="border-2 border-black rounded-md w-[350px] h-[120px] p-4 flex flex-col justify-between cursor-pointer">
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="flex flex-col text-[#255A59] w-[70%]">
                                            <div className="flex items-center gap-x-2">
                                                <Person />
                                                <h2 className="uppercase">{name}</h2>
                                            </div>
                                            <div className="flex flex-row gap-x-4 mt-2">
                                                <div className="flex flex-col items-center">
                                                    <p className='text-xs'>Parentesco</p>
                                                    <p className='text-xs'>Profissão</p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p className='text-xs'>Escolaridade</p>
                                                    <p className='text-xs'>Renda</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[60px] h-[60px] border-2 border-[#4B8A89] rounded-md flex justify-center items-center">
                                            <ArrowForwardIosIcon className="text-[#4B8A89] w-[50%] h-[50%]" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-center gap-8">
                            <div className="w-[100%] p-2 flex justify-between bg-[#4B8A89] text-white uppercase text-sm">
                                <div className="ml-5">VERIFICAÇÃO DE PRÉ-CADASTRO</div>
                                <div className="mr-5">Paciente: {namePatient} / Responsável: {names[index]}</div>
                            </div>

                            <div className="w-full flex flex-col gap-4 uppercase">
                                <div className="flex font-bold flex-wrap">
                                    <div className="flex-1 min-w-[25%] flex justify-center">NOME</div>
                                    <div className="flex-1 min-w-[15%] flex justify-center">PARENTESCO</div>
                                    <div className="flex-1 min-w-[20%] flex justify-center">PROFISSÃO</div>
                                    <div className="flex-1 min-w-[25%] flex justify-center">ESCOLARIDADE</div>
                                    <div className="flex-1 min-w-[15%] flex justify-center">RENDA</div>
                                </div>

                                {subFamiliars.map((subFamiliar, index) => (
                                    <div key={subFamiliar.patientId || index} className="flex flex-wrap text-[#65ADAC]">
                                        <div className="flex-1 min-w-[25%] flex justify-center items-center">{subFamiliar.name}</div>
                                        <div className="flex-1 min-w-[15%] flex justify-center items-center">{subFamiliar.familiarKinship}</div>
                                        <div className="flex-1 min-w-[20%] flex justify-center items-center">{subFamiliar.occupation}</div>
                                        <div className="flex-1 min-w-[25%] flex justify-center items-center">{subFamiliar.scholarity}</div>
                                        <div className="flex-1 min-w-[15%] flex justify-center items-center">R${subFamiliar.income}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-6 w-full items-center justify-center">

                                <Botao onClick={() => { changeStatus(true); }} className='w-[30%] h-[50px] rounded-md flex justify-center items-center'>
                                    Aprovar Pré Cadastro
                                </Botao>

                                <div onClick={() => { changeStatus(false); }} className=" w-[30%] h-[50px] flex text-center justify-center items-center bg-red-800 cursor-pointer text-white rounded-md">
                                    <div>REPROVAR PRÉ-CADASTRO</div>
                                </div>

                                <div onClick={() => { setIndex(-1); }} className=" w-[30%] h-[50px] flex text-center justify-center items-center bg-[#7F7F7F] cursor-pointer text-white rounded-md">
                                    <div>VOLTAR</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}