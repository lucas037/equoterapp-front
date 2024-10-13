'use client';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import InfoSec from "./componentes/InfoSec";
import SessaoPorMes from "@/types/SessaoPorMes";
import { Button } from "@mui/material";

export default function GerenciarPreCadastro() {
  const handleNavigation = () => {
    window.location.href = '/login';
  };
  const handlePreCadastro = () => {
    window.location.href = '/precadastro';
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
      }
    }
  };

  interface Documento {
    nome: string;
    imagem: string;
  }

  interface Pessoa {
    nome: string;
    membros: number;
    rendaM: number;
    documentos: Documento[];
  }

  interface PreCadastro {
    mes: string;
    pessoa: Pessoa;
  }

  // Exemplo de sessões
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
          observacoes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
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

  const agrupadosPorMes = sessoesPorMes.reduce((acc: Record<string, SessaoPorMes[]>, sessao) => {
    const { mes } = sessao;
    if (!acc[mes]) {
      acc[mes] = [];
    }
    acc[mes].push(sessao);
    return acc;
  }, {});

  return (
    <motion.div
      initial={pageVariants.initial}
      animate={pageVariants.animate}
      exit={pageVariants.exit}
    >
      <div>
        <Header
          buttonName='Sair'
          handleClick={handleNavigation}
          buttonsNames={["Verificar Documentos", "Sessões", "Gerenciamento", "Perfil"]}
          colaborador={true}
        />

        <div className="flex w-full h-full px-20">
          <div className="hidden md:block w-[20%] h-full overflow-y-auto border-2 border-black rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">Sessões Gerais</h2>
            <Button  onClick={() => window.location.href = '/adicionar-sessao'} className="bg-slate-900 border border-black text-white mb-4 w-full">(+) Adicionar Sessões</Button>
            
            <label className="block mb-2">Selecione o Mês:</label>
            <select className="w-full mb-4 p-2 border border-black rounded-md">
              <option value="janeiro">Janeiro</option>
              <option value="fevereiro">Fevereiro</option>
              <option value="marco">Março</option>
              <option value="abril">Abril</option>
              <option value="maio">Maio</option>
              <option value="junho">Junho</option>
              <option value="julho">Julho</option>
              <option value="agosto">Agosto</option>
              <option value="setembro">Setembro</option>
              <option value="outubro">Outubro</option>
              <option value="novembro">Novembro</option>
              <option value="dezembro">Dezembro</option>
            </select>

            <label className="block mb-2">Selecione o Ano:</label>
            <select className="w-full mb-4 p-2 border border-black rounded-md">
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>

            <label className="block mb-2">Data de Início:</label>
            <input type="date" className="w-full mb-4 p-2 border border-black rounded-md" />

            <label className="block mb-2">Data de Fim:</label>
            <input type="date" className="w-full mb-4 p-2 border border-black rounded-md" />
            <Button className="bg-green-900 border border-black text-white mb-4 w-full">Filtrar</Button>
          </div>

          <div className="w-full md:w-[80%] h-full border-2 border-black p-4 ml-4">
            {Object.entries(agrupadosPorMes).map(([mes, sessoes]) => (
              <div key={mes}>
                <div className="text-[#255A59] text-lg font-semibold mb-2">{mes.toUpperCase()}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                  {sessoes[0].sessoes.map((sessao, index) => (
                    <div key={index} className="mb-6 p-4 bg-white">
                      <InfoSec
                        quantSessoes={sessoes[0].sessoes.length}
                        nome={sessao.paciente}
                        mediador={sessao.mediador}
                        presenca={sessao.presenca}
                        handleNavigation={handleNavigation}
                      />
                    </div>
                  ))}
                </div>
                <hr className="border-t-2 border-gray-300 my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}