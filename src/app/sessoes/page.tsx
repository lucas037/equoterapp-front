"use client"

import Header from "@/components/Header";
import SessaoPorMes from "../types/SessaoPorMes";
import { useState } from "react";

export default function Sessoes() {
    const [modal, setModal] = useState(false);
    const [indexesModal, setIndexesModal] = useState([0, 0]);

    const sessoesPorMes: SessaoPorMes[] = [
        {
            mes: "JANEIRO DE 2024",
            sessoes: [
              {
                cavalo: "Ares",
                sessao: "Sessão 1",
                turma: "Turma A",
                data: "2024-01-05",
                dia: "5",
                paciente: "Lucas Almeida",
                mediador: "Clara Lima",
                presenca: true,
                guia: "Paula",
                arreamento: "Arreamento E",
                observacoes: "Primeira sessão do ano."
              },
              {
                cavalo: "Zeus",
                sessao: "Sessão 2",
                turma: "Turma B",
                data: "2024-01-20",
                dia: "20",
                paciente: "Lucas Almeida",
                mediador: "João Costa",
                presenca: false,
                guia: "Daniel",
                arreamento: "Arreamento F",
                observacoes: "Segunda sessão do mês."
              }
            ]
          },
          {
            mes: "FEVEREIRO DE 2024",
            sessoes: [
              {
                cavalo: "Apollo",
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
                sessao: "Sessão 1",
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
                sessao: "Sessão 2",
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
    }
      

    return (
        <div className="w-[100%] h-screen flex flex-col items-center">
            <Header buttonName="Sair" handleClick={handleClick}/>

            <div className="w-[90%] h-[80%] flex">

                <div className="w-full md:w-[30%] lg:w-[22%] xl:w-[18%] h-full flex flex-col overflow-y-auto">
                    {Array.from({ length: sessoesPorMes.length }).map((_, i) => (
                        <div className="text-base mt-8">
                            <div className="text-[18px] text-[#255A59] font-bold">{sessoesPorMes[i].mes}</div>
                            {Array.from({length: sessoesPorMes[i].sessoes.length }).map((_, j) => (
                                <button className="ml-6 mb-1 mt-1 text-[16px] text-[#0B3F3E] flex items-center gap-1" onClick={() => handleClickSessao(i, j)}>
                                    {modal && i == indexesModal[0] && j == indexesModal[1] && <div className="text-2xl">
                                        •
                                    </div>}

                                    SESSÃO DO DIA {sessoesPorMes[i].sessoes[j].dia}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}