"use client"

import Header from "@/components/Header";
import Image from 'next/image';
import SessaoPorMes from "../../types/SessaoPorMes";
import { useEffect, useState } from "react";
import Sessao from "../../types/Sessao";
import DadosColaborador from "../../types/DadosColaborador";
import DownloadPdfComponent from "./jsx";
import requestsAuth from "@/utils/requestsAuth";
import router from "next/router";

interface CollaboratorData {
  id: number;
  name: string;
  email: string;
  cpf: string;
  gender: string;
  phone: string;
  position: string;
  sessionsCount: number;
  roles: string[];
}

export default function Perfil() {
  const [modal, setModal] = useState(false);
  const [indexesModal, setIndexesModal] = useState([0, 0]);
  const [sessao, setSessao] = useState<Sessao>({} as Sessao);
  const [collaborator, setCollaborator] = useState<CollaboratorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!requestsAuth.isCollaborator()) {
      window.location.href = '/'; // Redireciona para a página inicial se o usuário não for um colaborador
      return;
    }

    const userId = requestsAuth.getColaboradorId();
    console.log(userId);
    
    async function fetchCollaborator() {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/collaborator/${userId}`);
        const data: CollaboratorData = await response.json();
        console.log(data);
        setCollaborator(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os dados do colaborador:", error);
        setLoading(false);
      }
    }
    fetchCollaborator();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!collaborator) {
    return <div>Erro ao carregar os dados do colaborador.</div>;
  }

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

  function calcNumeroSessoes(sessoes: SessaoPorMes[]) {
    let total = 0;

    for (let i = 0; i < sessoes.length; i++) {
      total += sessoes[i].sessoes.length;
    }

    return total;
  }

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
          paciente: "Lucas Almeida",
          mediador: "Clara Lima",
          presenca: true,
          guia: "Matheus Silveira",
          arreamento: "Arreamento E",
          observacoes: "Primeira sessão do ano.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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
          observacoes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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
          observacoes: "Sessão de início de mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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
          observacoes: "Sessão final do mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão do meio do mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão de fim de mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Primeira sessão de abril.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão de final de mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Primeira sessão de maio.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão de final de mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão inicial de junho.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão de meio de mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão de início de julho.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão final do mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Primeira sessão do mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Segunda sessão do mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão inicial do mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
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
          observacoes: "Sessão de meio de mês.",
          observacoesInternas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        }
      ]
    }
  ];

  const dadosColaborador: DadosColaborador = {
    nome: "MARIA JOSÉ PAULINA",
    cpf: "934.234.123-53",
    cargo: "Psicologa",
    email: "maria.jose@gmail.com",
    telefone: "915644789749",
    rua: "RUA PADRE CICERO",
    numeroCasa: "29",
    quantidadeSessoes: calcNumeroSessoes(sessoesPorMes),
    sexo: "",
    aniversario: "",
    bairro: "CENTRO",
    senha: ""
  }


  return (
    <div className="flex flex-col items-center">
      <Header
        collaborator={true}
      />

      <div className="w-[90%] h-[80%] flex flex-col gap-4 xl:flex-row xl:justify-between mb-2">
        <div className={`${modal ? 'hidden xl:flex xl:flex-col xl:gap-2' : ''} mt-5 w-[300px] sm:w-[42%] md:w-[34%] lg:w-[26%] xl:w-[18%]`}>

          <div className="text-sm font-bold">SESSÕES PARTICIPADAS</div>

          <div className={`overflow-y-auto w-full h-full border border-black rounded-lg`}>
            {Array.from({ length: sessoesPorMes.length }).map((_, i) => (
              <div key={i} className="text-base mt-8">
                <div className="text-[18px] text-[#255A59] font-bold ml-4">{sessoesPorMes[i].mes}</div>
                {Array.from({ length: sessoesPorMes[i].sessoes.length }).map((_, j) => (
                  <button
                    key={j}
                    className="mb-1 mt-1 text-[16px] text-[#0B3F3E] flex items-center gap-1 h-[30px]"
                    onClick={() => handleClickSessao(i, j)}
                  >
                    {modal && i === indexesModal[0] && j === indexesModal[1] ? (
                      <div className="w-6 h-full text-4xl flex justify-center items-center mb-1 text-[#137472] ml-4">•</div>
                    ) :
                      (
                        <div className="w-6 h-full ml-4"></div>
                      )
                    }

                    <div className="">SESSÃO DIA {sessoesPorMes[i].sessoes[j].dia}</div>


                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {modal &&
          <div className="w-full xl:w-[800px] 2xl:w-[900px] h-full flex flex-col gap-2">

            <div className="flex justify-between items-end">
              <div className="text-sm font-bold">RELATÓRIO</div>

              <DownloadPdfComponent colaborador={dadosColaborador} sessoes={sessoesPorMes} />

            </div>

            <div className="w-full h-full border border-black flex justify-center bg-[#C0DDDD] rounded-lg">
              <div className="w-[96%] h-full uppercase flex-col items-center">

                <div className="flex xl:hidden justify-end">
                  <button onClick={handleClickFecharSessao} className="w-[25px] h-[25px] flex justify-center items-center lowercase text-2xl">x</button>
                </div>

                <div className="w-full min-h-[150px] flex flex-col sm:flex-row sm:h-[100px] sm:justify-between">  {/*Barra superior (informações da sessão*/}
                  <div className="flex gap-8 items-center">
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
                      <div className="text-[18px] font-bold text-[#2C5454]">{sessao.presenca ? 'Sim' : 'Não'}</div>
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
                  <div className="h-[150px] bg-[#64AFAE] flex justify-center items-center">
                    <div className="overflow-y-auto w-[96%] h-[72%] text-[#2C5454] text-sm font-bold">{sessao.observacoes}</div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-1 mb-4">   {/*Observações Internas*/}
                  <div className="text-lg font-bold text-[#8D8F8F]">Observações</div>
                  <div className="h-[150px] bg-[#64AFAE] flex justify-center items-center">
                    <div className="overflow-y-auto w-[96%] h-[72%] text-[#2C5454] text-sm font-bold">{sessao.observacoesInternas}</div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        }

        {
          <div className="w-full xl:w-[300px] 2xl:w-[400px] h-full flex flex-col gap-2 mt-5">
            <div className="text-sm font-bold">DADOS DO COLABORADOR</div>
            <div className="w-full h-full border border-1 border-black rounded-lg">
              <div className="flex xl:hidden justify-end">
                <button onClick={handleClickFecharSessao} className="w-[25px] h-[25px] flex justify-center items-center lowercase text-2xl">x</button>
              </div>

              <div className="ml-8 mb-4 mt-4 flex flex-col gap-2">
                <div className="text-[#8D8F8F] text-sm font-bold">NOME COMPLETO</div>
                <div className="text-[#255A59] font-bold">{collaborator.name}</div>

                <div className="text-[#8D8F8F] text-sm font-bold">CPF</div>
                <div className="text-[#255A59] font-bold">{collaborator.cpf}</div>
                <div className="text-[#8D8F8F] text-sm font-bold">Cargo</div>
                <div className="text-[#255A59] font-bold">{collaborator.position}</div>

                <div className="text-[#8D8F8F] text-sm font-bold">EMAIL</div>
                <div className="text-[#255A59] font-bold">{collaborator.email}</div>

                <div className="text-[#8D8F8F] text-sm font-bold">TELEFONE</div>
                <div className="text-[#255A59] font-bold">{collaborator.phone}</div>

                <div className="text-[#8D8F8F] text-sm font-bold">QUANTIDADE DE SESSÕES</div>
                <div className="text-[#255A59] font-bold">{collaborator.sessionsCount}</div>
              </div>
            </div>
          </div>
        }

      </div>


    </div>
  )
}