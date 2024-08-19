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

        <div className='w-[80%] min-h-[80%] flex flex-col items-center gap-8 text-2xl font-bold border border-[#C3C3C3]'>

            <div className="w-[90%] flex mt-8">MEMBROS DA FAMÍLIA</div>

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
                    <div key={index} className="w-full flex-col">  {/* Mova a key para este div */}
                        <div className="w-full flex justify-between text-base text-[#65ADAC]">
                            <div className="w-[20%]">{membro.nome}</div>
                            <div className="w-[20%]">{membro.parentesco}</div>
                            <div className="w-[20%]">{membro.profissao}</div>
                            <div className="w-[20%]">{membro.escolaridade}</div>
                            <div className="w-[10%]">R${membro.renda}</div>
                            <div className="w-[10%]">
                                AÇÕES
                            </div>
                        </div>
                        <div className="h-[1px] w-full bg-black mt-4"></div>
                    </div>
                ))}


            </div>

            <div className='w-[40%] h-[70px] bg-[#4B8A89] text-white rounded-2xl flex justify-center items-center mt-12 mb-4'>
                Finalizar
            </div>


        </div>
    )
}