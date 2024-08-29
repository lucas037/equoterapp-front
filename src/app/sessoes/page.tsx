"use client"

import Header from "@/components/Header";
import SessaoPorMes from "../types/SessaoPorMes";
import { useState } from "react";
import Sessao from "../types/Sessao";
import Image from 'next/image';

export default function Sessoes() {
    const [modal, setModal] = useState(false);
    const [indexesModal, setIndexesModal] = useState([0, 0]);
    const [sessao, setSessao] = useState<Sessao>({} as Sessao);

    const sessoesPorMes: SessaoPorMes[] = [
        {
            mes: "JANEIRO DE 2024",
            sessoes: [
              {
                cavalo: "Ares",
                sessao: 1,
                turma: "Turma A",
                data: "2024-01-05",
                dia: "5",
                paciente: "Lucas Almeida Duarte de Oliveira Neto",
                mediador: "Clara Lima Duarte de Oliveira Ferreira",
                presenca: true,
                guia: "Paula Nobre",
                arreamento: "Arreamento E",
                observacoes: "Primeira sessão do ano."
              },
              {
                cavalo: "Zeus",
                sessao: 2,
                turma: "Turma B",
                data: "2024-01-20",
                dia: "20",
                paciente: "Lucas Almeida",
                mediador: "João Costa",
                presenca: false,
                guia: "Daniel Nobre",
                arreamento: "Carlos Silva",
                observacoes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              }
            ]
          },
          {
            mes: "FEVEREIRO DE 2024",
            sessoes: [
              {
                cavalo: "Apollo",
                sessao: 3,
                turma: "Turma A",
                data: "2024-02-10",
                dia: "10",
                paciente: "Lucas Almeida",
                mediador: "Maria Santos",
                presenca: true,
                guia: "Roberto",
                arreamento: "Arreamento G",
                observacoes: "Sessão de início de mês."
              },
              {
                cavalo: "Hermes",
                sessao: 4,
                turma: "Turma B",
                data: "2024-02-25",
                dia: "25",
                paciente: "Lucas Almeida",
                mediador: "Fernanda Oliveira",
                presenca: true,
                guia: "Sandra",
                arreamento: "Arreamento H",
                observacoes: "Sessão final do mês."
              }
            ]
          },
          {
            mes: "MARÇO DE 2024",
            sessoes: [
              {
                cavalo: "Atena",
                sessao: 5,
                turma: "Turma A",
                data: "2024-03-12",
                dia: "12",
                paciente: "Lucas Almeida",
                mediador: "Ricardo Silva",
                presenca: true,
                guia: "Gabriel",
                arreamento: "Arreamento I",
                observacoes: "Sessão do meio do mês."
              },
              {
                cavalo: "Poseidon",
                sessao: 6,
                turma: "Turma B",
                data: "2024-03-28",
                dia: "28",
                paciente: "Lucas Almeida",
                mediador: "Ana Pereira",
                presenca: false,
                guia: "Marcos",
                arreamento: "Arreamento J",
                observacoes: "Sessão de fim de mês."
              }
            ]
          },
          {
            mes: "ABRIL DE 2024",
            sessoes: [
              {
                cavalo: "Hades",
                sessao: 7,
                turma: "Turma A",
                data: "2024-04-08",
                dia: "8",
                paciente: "Lucas Almeida",
                mediador: "Lucas Costa",
                presenca: true,
                guia: "André",
                arreamento: "Arreamento K",
                observacoes: "Primeira sessão de abril."
              },
              {
                cavalo: "Deméter",
                sessao: 8,
                turma: "Turma B",
                data: "2024-04-22",
                dia: "22",
                paciente: "Lucas Almeida",
                mediador: "Juliana Santos",
                presenca: true,
                guia: "Ana",
                arreamento: "Arreamento L",
                observacoes: "Sessão de final de mês."
              }
            ]
          },
          {
            mes: "MAIO DE 2024",
            sessoes: [
              {
                cavalo: "Hera",
                sessao: 9,
                turma: "Turma A",
                data: "2024-05-10",
                dia: "10",
                paciente: "Lucas Almeida",
                mediador: "Fernanda Costa",
                presenca: false,
                guia: "Pedro",
                arreamento: "Arreamento M",
                observacoes: "Primeira sessão de maio."
              },
              {
                cavalo: "Apolo",
                sessao: 10,
                turma: "Turma B",
                data: "2024-05-25",
                dia: "25",
                paciente: "Lucas Almeida",
                mediador: "Rodrigo Lima",
                presenca: true,
                guia: "Nina",
                arreamento: "Arreamento N",
                observacoes: "Sessão de final de mês."
              }
            ]
          },
          {
            mes: "JUNHO DE 2024",
            sessoes: [
              {
                cavalo: "Hades",
                sessao: 11,
                turma: "Turma A",
                data: "2024-06-05",
                dia: "5",
                paciente: "Lucas Almeida",
                mediador: "Mariana Oliveira",
                presenca: true,
                guia: "Lucas",
                arreamento: "Arreamento O",
                observacoes: "Sessão inicial de junho."
              },
              {
                cavalo: "Ares",
                sessao: 12,
                turma: "Turma B",
                data: "2024-06-18",
                dia: "18",
                paciente: "Lucas Almeida",
                mediador: "Gabriela Silva",
                presenca: true,
                guia: "Tiago",
                arreamento: "Arreamento P",
                observacoes: "Sessão de meio de mês."
              }
            ]
          },
          {
            mes: "JULHO DE 2024",
            sessoes: [
              {
                cavalo: "Hera",
                sessao: 13,
                turma: "Turma A",
                data: "2024-07-12",
                dia: "12",
                paciente: "Lucas Almeida",
                mediador: "Carlos Almeida",
                presenca: false,
                guia: "Sandra",
                arreamento: "Arreamento Q",
                observacoes: "Sessão de início de julho."
              },
              {
                cavalo: "Zeus",
                sessao: 14,
                turma: "Turma B",
                data: "2024-07-26",
                dia: "26",
                paciente: "Lucas Almeida",
                mediador: "Tatiane Costa",
                presenca: true,
                guia: "Miguel",
                arreamento: "Arreamento R",
                observacoes: "Sessão final do mês."
              }
            ]
          },
          {
            mes: "AGOSTO DE 2024",
            sessoes: [
              {
                cavalo: "Trovão",
                sessao: 15,
                turma: "Turma A",
                data: "2024-08-10",
                dia: "10",
                paciente: "Lucas Almeida",
                mediador: "Ana Costa",
                presenca: true,
                guia: "Maria",
                arreamento: "Arreamento S",
                observacoes: "Primeira sessão do mês."
              },
              {
                cavalo: "Estrela",
                sessao: 16,
                turma: "Turma B",
                data: "2024-08-20",
                dia: "20",
                paciente: "Lucas Almeida",
                mediador: "Carlos Lima",
                presenca: false,
                guia: "Lucas",
                arreamento: "Arreamento T",
                observacoes: "Segunda sessão do mês."
              }
            ]
          },
          {
            mes: "SETEMBRO DE 2024",
            sessoes: [
              {
                cavalo: "Sol",
                sessao: 17,
                turma: "Turma A",
                data: "2024-09-05",
                dia: "5",
                paciente: "Lucas Almeida",
                mediador: "Fernanda Alves",
                presenca: true,
                guia: "Júlia",
                arreamento: "Arreamento U",
                observacoes: "Sessão inicial do mês."
              },
              {
                cavalo: "Lua",
                sessao: 18,
                turma: "Turma C",
                data: "2024-09-15",
                dia: "15",
                paciente: "Lucas Almeida",
                mediador: "Ricardo Mendes",
                presenca: true,
                guia: "Bruno",
                arreamento: "Arreamento V",
                observacoes: "Sessão de meio de mês."
              }
            ]
          }
    ];

    function handleClick() {
      window.location.href = "/";
    }

    function handleClickSessao(a: number, b: number) {
        setModal(true);
        setIndexesModal([a, b])
        setSessao(sessoesPorMes[a].sessoes[b]);
    }

    function handleClickFecharSessao() {
        setModal(false);
    }
      

    return (
        <div className="w-screen h-screen flex flex-col items-center">
            <Header buttonName="Sair" handleClick={handleClick}/>
    
            <div className="w-[90%] h-[80%] flex">
    
                <div className={`${modal? 'hidden lg:block': 'flex flex-col'} overflow-y-auto w-[80%] sm:w-[42%] md:w-[34%] lg:w-[26%] xl:w-[18%] h-full`}>
                    {Array.from({ length: sessoesPorMes.length }).map((_, i) => (
                        <div key={i} className="text-base mt-8">
                            <div className="text-[18px] text-[#255A59] font-bold">{sessoesPorMes[i].mes}</div>
                            {Array.from({length: sessoesPorMes[i].sessoes.length }).map((_, j) => (
                                <button 
                                    key={j} 
                                    className="ml-6 mb-1 mt-1 text-[16px] text-[#0B3F3E] flex items-center gap-1" 
                                    onClick={() => handleClickSessao(i, j)}
                                >
                                    {modal && i === indexesModal[0] && j === indexesModal[1] && (
                                        <div className="text-2xl">•</div>
                                    )}
                                    SESSÃO DIA {sessoesPorMes[i].sessoes[j].dia}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                {modal && <div className="w-full h-full">
                  <div className="w-full min-h-full flex justify-center">
                    <div className="w-[90%] h-full border border-black flex justify-center">

                      <div className="w-[96%] h-full uppercase flex-col items-center mt-4">

                        <div className="flex lg:hidden justify-end">
                          <button onClick={handleClickFecharSessao} className="w-[25px] h-[25px] flex justify-center items-center lowercase text-2xl">x</button>
                        </div>

                        <div className="w-full min-h-[150px] flex flex-col sm:flex-row sm:h-[100px] sm:justify-between">  {/*Barra superior (informações da sessão*/}
                          <div className="flex gap-8 items-center">
                            <Image src={"/assets/iconCavalo.png"} alt={"icon cavalo"} width={100} height={100} className="w-[80px] h-[80px]"/>
                            <div className="flex flex-col items-center justify-center">
                              <div className="text-[18px] font-bold text-[#2C5454]">Cavalo</div>
                              <div className="text-[16px] font-bold text-[#8D8F8F]">{sessao.cavalo}</div>
                            </div>
                          </div>

                          <div className="hidden sm:flex flex-col items-center justify-center gap-1">
                            <div className="text-[18px] font-bold text-[#2C5454]">Sessão número {sessao.sessao}</div>
                            <div className="text-[16px] font-bold text-[#8D8F8F]">{sessao.turma}</div>
                          </div>
                          
                          <div className="hidden sm:flex flex-col items-center justify-center gap-1">
                            <div className="text-[18px] font-bold text-[#2C5454]">Data</div>
                            <div className="text-[16px] font-bold text-[#8D8F8F]">{sessao.data}</div>
                          </div>

                          <div className="flex sm:hidden justify-between mt-8 gap-2">
                            <div className="w-[40%] flex-col items-center justify-center gap-1">
                              <div className="text-[18px] font-bold text-[#2C5454] mt-4">Sessão número {sessao.sessao}</div>
                              <div className="text-[16px] font-bold text-[#8D8F8F]">{sessao.turma}</div>
                            </div>
                            
                            <div className="w-[40%] flex-col items-center justify-center gap-1 mt-4">
                              <div className="text-[18px] font-bold text-[#2C5454]">Data</div>
                              <div className="text-[16px] font-bold text-[#8D8F8F]">{sessao.data}</div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full h-[1px] bg-[#4B8A89] mt-4 mb-4"></div> {/*Linha*/}


                        <div className="w-full min-h-[45%] xl:h-[50%] flex flex-col gap-8">

                          <div className="flex gap-4 mt-4">
                            <div className="flex flex-col gap-1 w-full">
                              <div className="text-[18px] font-bold text-[#8D8F8F]">Paciente</div>
                              <div className="text-[18px] font-bold text-[#2C5454]">{sessao.paciente}</div>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="flex flex-col gap-1 w-full">
                              <div className="text-[18px] font-bold text-[#8D8F8F]">Presença</div>
                              <div className="text-[18px] font-bold text-[#2C5454]">{sessao.presenca? 'Sim': 'Não'}</div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-8 sm:flex-row sm:gap-4 sm:mt-4">  {/*Profissionais e paciente da sessão*/}
                            <div className="flex flex-col gap-1 w-[33%]">
                              <div className="text-[18px] font-bold text-[#8D8F8F]">Guia</div>
                              <div className="text-[18px] font-bold text-[#2C5454]">{sessao.guia}</div>
                            </div>
                            <div className="flex flex-col gap-1 w-[33%]">
                              <div className="text-[18px] font-bold text-[#8D8F8F]">Mediador</div>
                              <div className="text-[18px] font-bold text-[#2C5454]">{sessao.mediador}</div>
                            </div>
                            <div className="flex flex-col gap-1 w-[33%]">
                              <div className="text-[18px] font-bold text-[#8D8F8F]">Arreamento</div>
                              <div className="text-[18px] font-bold text-[#2C5454]">{sessao.arreamento}</div>
                            </div>
                          </div>

                        </div>


                        <div className="w-full h-[1px] bg-[#4B8A89] mt-4 mb-4"></div> {/*Linha*/}

                        <div className="w-full flex flex-col gap-1 mb-4">   {/*Observações*/}
                          <div className="text-lg font-bold text-[#8D8F8F]">Observações</div>
                          <div className="h-[150px] bg-[#C6E2E1] flex justify-center items-center">
                            <div className="overflow-y-auto w-[96%] h-[72%] text-[#2C5454] text-sm font-bold">{sessao.observacoes}</div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>}
    
            </div>
        </div>
    )
    
}