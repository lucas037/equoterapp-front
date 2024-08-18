import { useEffect, useState } from "react";
import DadosPaciente from "../types/DadosPaciente";
import MembroFamilia from "../types/MembroFamilia";

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    changeDadosPaciente: (dadosPaciente: DadosPaciente) => void,
    clickEtapaAnterior: () => void,
    clickProximaEtapa: () => void
}

export default function Etapa3(props: InterfaceProps) {
    const [membrosFamilia, setMembrosFamilia] = useState<MembroFamilia[]>([]);

    useEffect(() => {
        // Exemplo de dois membros da família
        const exemplosMembrosFamilia: MembroFamilia[] = [
            {
                nome: "João Silva",
                parentesco: "Pai",
                profissao: "Engenheiro",
                escolaridade: "Superior Completo",
                renda: "5000"
            },
            {
                nome: "Maria Silva",
                parentesco: "Mãe",
                profissao: "Professora",
                escolaridade: "Superior Completo",
                renda: "4500"
            }
        ];

        setMembrosFamilia(exemplosMembrosFamilia);
    }, []);

    return (

        <div className='w-[80%] h-auto flex flex-col items-center gap-8 text-2xl font-bold border'>

            <div className="flex flex-col items-center gap-8 mt-4">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-6xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                </div>
            </div>

            <div className="w-[90%] flex">MEMBROS DA FAMÍLIA</div>

            <div className="w-[90%] flex flex-col gap-4">
                <div className="w-full flex justify-between text-base">
                    <div className="w-[20%]">NOME</div>
                    <div className="w-[20%]">PARENTESCO</div>
                    <div className="w-[20%]">PROFISSÃO</div>
                    <div className="w-[20%]">ESCOLARIDADE</div>
                    <div className="w-[10%]">RENDA</div>
                    <div className="w-[10%]">AÇÕES</div>
                </div>

                {membrosFamilia.map((membro, index) => (
                    <div className="w-full flex-col">
                        <div key={index} className="w-full flex justify-between text-base text-[#65ADAC]">
                            <div className="w-[20%]">{membro.nome}</div>
                            <div className="w-[20%]">{membro.parentesco}</div>
                            <div className="w-[20%]">{membro.profissao}</div>
                            <div className="w-[20%]">{membro.escolaridade}</div>
                            <div className="w-[10%]"> R${membro.renda}</div>
                            <div className="w-[10%]">
                                AÇÕES
                            </div>
                        </div>

                        <div className="h-[1px] w-full bg-black mt-4"></div>
                    </div>
                ))}

            </div>

            <div className='w-[60%] h-[70px] bg-[#4B8A89] text-white rounded-2xl flex items-center mt-12 mb-4'>
                <button className="w-[80%] h-full bg-[#546261] rounded-2xl flex justify-center items-center" onClick={props.clickEtapaAnterior}>
                    VOLTAR
                </button>
                <button className="w-[100%] h-full flex justify-center items-center" onClick={props.clickProximaEtapa}>
                    Finalizar
                </button>
            </div>


        </div>
    )
}