'use client';
import Header from "@/components/Header";
import { motion } from "framer-motion";
import InfoDoc from "./componentes/InfoDoc";

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

  // Exemplo de pré-cadastros
  const precadastros: PreCadastro[] = [
    {
        mes: 'janeiro',
        pessoa: {
          nome: 'João Silva',
          membros: 4,
          rendaM: 2000,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' }
          ]
        }
      },
      {
        mes: 'janeiro',
        pessoa: {
          nome: 'Maria Souza',
          membros: 3,
          rendaM: 3000,
          documentos: [
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' },
            { nome: 'Título de Eleitor', imagem: 'titulo.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' }
          ]
        }
      },
      {
        mes: 'janeiro',
        pessoa: {
          nome: 'Carlos Pereira',
          membros: 5,
          rendaM: 3500,
          documentos: [
            { nome: 'Certidão de Casamento', imagem: 'casamento.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' }
          ]
        }
      },
      {
        mes: 'janeiro',
        pessoa: {
          nome: 'Pedro Santos',
          membros: 2,
          rendaM: 1500,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Carteira de Vacinação', imagem: 'vacina.png' }
          ]
        }
      },
      // Fevereiro
      {
        mes: 'fevereiro',
        pessoa: {
          nome: 'Paula Oliveira',
          membros: 3,
          rendaM: 2800,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' }
          ]
        }
      },
      {
        mes: 'fevereiro',
        pessoa: {
          nome: 'Renata Lopes',
          membros: 4,
          rendaM: 3200,
          documentos: [
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' }
          ]
        }
      },
      {
        mes: 'fevereiro',
        pessoa: {
          nome: 'Roberto Lima',
          membros: 2,
          rendaM: 2100,
          documentos: [
            { nome: 'Título de Eleitor', imagem: 'titulo.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' },
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' }
          ]
        }
      },
      {
        mes: 'fevereiro',
        pessoa: {
          nome: 'Ana Costa',
          membros: 5,
          rendaM: 4000,
          documentos: [
            { nome: 'Carteira de Identidade', imagem: 'rg.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      // Março
      {
        mes: 'março',
        pessoa: {
          nome: 'Jorge Oliveira',
          membros: 3,
          rendaM: 2500,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      {
        mes: 'março',
        pessoa: {
          nome: 'Juliana Martins',
          membros: 4,
          rendaM: 3400,
          documentos: [
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'CPF', imagem: 'cpf.png' }
          ]
        }
      },
      {
        mes: 'março',
        pessoa: {
          nome: 'Rodrigo Souza',
          membros: 2,
          rendaM: 2200,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      {
        mes: 'março',
        pessoa: {
          nome: 'Camila Ferreira',
          membros: 3,
          rendaM: 3000,
          documentos: [
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' }
          ]
        }
      },
      // Abril
      {
        mes: 'abril',
        pessoa: {
          nome: 'Fernanda Pereira',
          membros: 5,
          rendaM: 4500,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      {
        mes: 'abril',
        pessoa: {
          nome: 'Paulo Lima',
          membros: 4,
          rendaM: 3200,
          documentos: [
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' }
          ]
        }
      },
      {
        mes: 'abril',
        pessoa: {
          nome: 'Adriana Santos',
          membros: 3,
          rendaM: 2800,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' }
          ]
        }
      },
      {
        mes: 'abril',
        pessoa: {
          nome: 'Lucas Oliveira',
          membros: 2,
          rendaM: 3000,
          documentos: [
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' }
          ]
        }
      },
      {
        mes: 'maio',
        pessoa: {
          nome: 'Mariana Fernandes',
          membros: 4,
          rendaM: 3200,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Certidão de Casamento', imagem: 'casamento.png' }
          ]
        }
      },
      {
        mes: 'maio',
        pessoa: {
          nome: 'Fernando Gomes',
          membros: 3,
          rendaM: 2700,
          documentos: [
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Título de Eleitor', imagem: 'titulo.png' },
            { nome: 'RG', imagem: 'rg.png' }
          ]
        }
      },
      {
        mes: 'maio',
        pessoa: {
          nome: 'Larissa Moreira',
          membros: 5,
          rendaM: 4800,
          documentos: [
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      {
        mes: 'maio',
        pessoa: {
          nome: 'Eduardo Nascimento',
          membros: 2,
          rendaM: 2100,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' }
          ]
        }
      },
      
      // Junho
      {
        mes: 'junho',
        pessoa: {
          nome: 'Rafael Andrade',
          membros: 4,
          rendaM: 3500,
          documentos: [
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      {
        mes: 'junho',
        pessoa: {
          nome: 'Tatiana Martins',
          membros: 3,
          rendaM: 3000,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' }
          ]
        }
      },
      {
        mes: 'junho',
        pessoa: {
          nome: 'Vinícius Silva',
          membros: 5,
          rendaM: 4500,
          documentos: [
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      {
        mes: 'junho',
        pessoa: {
          nome: 'Bruna Costa',
          membros: 2,
          rendaM: 2200,
          documentos: [
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' }
          ]
        }
      },
      
      // Julho
      {
        mes: 'julho',
        pessoa: {
          nome: 'Carlos Mendes',
          membros: 3,
          rendaM: 3200,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' }
          ]
        }
      },
      {
        mes: 'julho',
        pessoa: {
          nome: 'Felipe Duarte',
          membros: 2,
          rendaM: 2100,
          documentos: [
            { nome: 'Título de Eleitor', imagem: 'titulo.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Certidão de Casamento', imagem: 'casamento.png' },
            { nome: 'Carteira de Identidade', imagem: 'rg.png' }
          ]
        }
      },
      {
        mes: 'julho',
        pessoa: {
          nome: 'Marcela Albuquerque',
          membros: 4,
          rendaM: 3700,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' }
          ]
        }
      },
      {
        mes: 'julho',
        pessoa: {
          nome: 'Sofia Rocha',
          membros: 3,
          rendaM: 3400,
          documentos: [
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' },
            { nome: 'Carteira de Identidade', imagem: 'rg.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' }
          ]
        }
      },
      
      // Agosto
      {
        mes: 'agosto',
        pessoa: {
          nome: 'Leandro Barbosa',
          membros: 5,
          rendaM: 4000,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' }
          ]
        }
      },
      {
        mes: 'agosto',
        pessoa: {
          nome: 'Verônica Freitas',
          membros: 4,
          rendaM: 3600,
          documentos: [
            { nome: 'Certidão de Casamento', imagem: 'casamento.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'RG', imagem: 'rg.png' }
          ]
        }
      },
      {
        mes: 'agosto',
        pessoa: {
          nome: 'Thiago Costa',
          membros: 2,
          rendaM: 2800,
          documentos: [
            { nome: 'Carteira de Trabalho', imagem: 'ctps.png' },
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'Declaração de Imposto de Renda', imagem: 'irpf.png' },
            { nome: 'Comprovante de Residência', imagem: 'residencia.png' }
          ]
        }
      },
      {
        mes: 'agosto',
        pessoa: {
          nome: 'Isabela Ramos',
          membros: 3,
          rendaM: 3200,
          documentos: [
            { nome: 'RG', imagem: 'rg.png' },
            { nome: 'CPF', imagem: 'cpf.png' },
            { nome: 'Comprovante de Renda', imagem: 'renda.png' },
            { nome: 'Certidão de Nascimento', imagem: 'nascimento.png' }
          ]
        }
      }
  ];
  const agrupadosPorMes = precadastros.reduce((acc: Record<string, PreCadastro[]>, precadastro) => {
    const { mes } = precadastro;
    if (!acc[mes]) {
      acc[mes] = [];
    }
    acc[mes].push(precadastro);
    return acc;
  }, {});

  return (
    <motion.div
      initial={pageVariants.initial}
      animate={pageVariants.animate}
      exit={pageVariants.exit}
    >
      <div>
        <Header buttonName='Sair' handleClick={handleNavigation} />

        <div className="w-full h-full px-20">
          <div className="w-full h-full border-2 border-black p-4">
            {Object.entries(agrupadosPorMes).map(([mes, precadastros]) => (
              <div key={mes}>
                <div className="text-[#255A59] text-lg font-semibold mb-2">{mes.toUpperCase()}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                  {precadastros.map((precadastro, index) => (
                    <div key={index} className="mb-6 p-4 bg-white">
                      <InfoDoc
                        nMembros={precadastro.pessoa.membros}
                        nome={precadastro.pessoa.nome}
                        rendaM={precadastro.pessoa.rendaM}
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

