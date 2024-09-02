import { useEffect, useState } from "react";
import DadosPaciente from "../types/DadosPaciente";
import MembroFamilia from "../types/MembroFamilia";
import Input from "@/components/Input";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "../types/DropdownOption";
import HeaderPreCadastro from "@/components/HeaderPreCadastro";

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    cadastroFinalizado: () => void
}

export default function Etapa3(props: InterfaceProps) {
    const [modalAcompanharPreCadastro, setModalAcompanharPreCadastro] = useState(true);
    const [membrosFamilia, setMembrosFamilia] = useState<MembroFamilia[]>([]);
    const [novoMembroFamilia, setNovoMembroFamilia] = useState<MembroFamilia>({} as MembroFamilia);
    const [modal, setModal] = useState<boolean>(false);
    const [modalAdicionar, setModalAdicionar] = useState<boolean>(false);
    const [indexEdicao, setIndexEdicao] = useState<number>(0);

    function changeModal() {
        if (modal) {
            setModal(false);
            setModalAdicionar(false);
        }
        else {
            setModal(true);
            setModalAdicionar(true);
        }
    }

    function handleClickEditarMembroFamilia(i: number) {
        changeModal();
        setModalAdicionar(false);
        setNovoMembroFamilia(membrosFamilia[i]);
        setIndexEdicao(i);
    }

    function handleClickRemoverMembroFamilia(i: number) {
        setMembrosFamilia(membrosFamilia => membrosFamilia.filter((_, index) => index !== i));
    }

    function apagarInfoNovoMembro() {
        setNovoMembroFamilia({
            ...novoMembroFamilia,
            nome: "",
            parentesco: "",
            profissao: "",
            escolaridade: "",
            renda: ""
        })
    }

    function adicionarEditarMembro() {
        if (modalAdicionar) {
            setMembrosFamilia(membrosFamilia => [...membrosFamilia, novoMembroFamilia]);
        }
        else {
            setMembrosFamilia(membrosFamilia =>
                membrosFamilia.map((membro, index) => 
                    index === indexEdicao ? novoMembroFamilia : membro
                )
            );
        }

        apagarInfoNovoMembro();
        changeModal();
        setModalAdicionar(false);
    }

    function handleChangeNome(value: string) {
        setNovoMembroFamilia({
            ...novoMembroFamilia,
            nome: value
        });
    }

    function handleChangeParentesco(value: string) {
        setNovoMembroFamilia({
            ...novoMembroFamilia,
            parentesco: value
        });
    }

    function handleChangeProfissao(value: string) {
        setNovoMembroFamilia({
            ...novoMembroFamilia,
            profissao: value
        });
    }

    function handleChangeEscolaridade(value: string) {
        setNovoMembroFamilia({
            ...novoMembroFamilia,
            escolaridade: value
        });
    }

    function handleChangeRenda(value: string) {
        setNovoMembroFamilia({
            ...novoMembroFamilia,
            renda: value
        });
    }

    const parentescoOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Pai", value: "Pai" },
        { label: "Mãe", value: "Mãe" },
        { label: "Avó(ô)", value: "Avó(ô)" },
        { label: "Tia(o)", value: "Tia(o)" },
        { label: "Irmã(o)", value: "Irmã(o)" },
        { label: "Outro", value: "Outro" },
    ];

    const escolaridadeOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        { label: "Ensino Fundamental Incompleto", value: "Ensino Fundamental Incompleto" },
        { label: "Ensino Fundamental Completo", value: "Ensino Fundamental Completo" },
        { label: "Ensino Médio Incompleto", value: "Ensino Médio Incompleto" },
        { label: "Ensino Médio Completo", value: "Ensino Médio Completo" },
        { label: "Ensino Técnico", value: "Ensino Técnico" },
        { label: "Ensino Superior Incompleto", value: "Ensino Superior Incompleto" },
        { label: "Ensino Superior Completo", value: "Ensino Superior Completo" },
        { label: "Pós Graduação", value: "Pós Graduação" },
        { label: "Mestrado", value: "Mestrado" },
        { label: "Doutorado", value: "Doutorado" },
    ];

    return (
        <div className="w-full h-full flex justify-center">

            { !modal && <div className="w-[90%] min-h-[80%] flex flex-col gap-8 text-2xl font-bold border border-[#C3C3C3] fixed">
                {modalAcompanharPreCadastro && <HeaderPreCadastro buttonName={'Aprovado'} handleClick={() => { throw new Error('Function not implemented.'); }} />}

                <div className="mt-8 mb-8 text-left text-lg ml-8">MEMBROS DA FAMÍLIA</div>
                
                <div className="w-full flex flex-col gap-4 justify-center">
                    <div className="w-full flex justify-around text-base">
                        <div className="w-[20%]">NOME</div>
                        <div className="w-[15%]">PARENTESCO</div>
                        <div className="w-[15%]">PROFISSÃO</div>
                        <div className="w-[15%]">ESCOLARIDADE</div>
                        <div className="w-[10%]">RENDA</div>
                        <div className="w-[8%]">AÇÕES</div>
                    </div>

                    {membrosFamilia.map((membro, index) => (
                        <div key={index} className="w-full flex-col">
                            <div className="w-full flex justify-around text-base text-[#65ADAC] mb-2">
                                <div className="w-[20%] flex items-center">{membro.nome}</div>
                                <div className="w-[15%] flex items-center">{membro.parentesco}</div>
                                <div className="w-[15%] flex items-center">{membro.profissao}</div>
                                <div className="w-[15%] flex items-center">{membro.escolaridade}</div>
                                <div className="w-[10%] flex items-center">R${membro.renda}</div>
                                <div className="w-[8%] flex items-center">

                                    <div className="w-full flex justify-between">

                                        <button className="h-full flex flex-col items-center gap-1" onClick={() => handleClickEditarMembroFamilia(index)}>
                                            <div className="w-[30px] h-[30px]">
                                                <img src="/assets/usuario-editar.png"/>
                                            </div>
                                            <div className="text-xs">EDITAR</div>
                                        </button>

                                        <button className="h-full flex flex-col items-center gap-1" onClick={() => handleClickRemoverMembroFamilia(index)}>
                                            <div className="w-[30px] h-[30px]">
                                                <img src="/assets/usuario-remover.png"/>
                                            </div>
                                            <div className="text-xs">REMOVER</div>
                                        </button>

                                    </div>

                                </div>
                            </div>
                            <div className="h-[1px] w-full flex justify-center">
                                <div className="h-full w-[98%] bg-black"></div>
                            </div>
                        </div>
                    ))}


                </div>

                <button className='h-[50px] w-[20%] bg-[#ffffff00] text-green-950 rounded-md m-5 border border-gray-800 text-xl' onClick={changeModal}>
                    <div className="w-full h-full  flex items-center ml-4">
                        (+) Adicionar Membro
                    </div>
                </button>


                <div className="h-[60px] w-full flex justify-center">
                    <div className='h-full w-[30%] bg-[#4B8A89] text-white rounded-sm flex justify-center items-center m-5'>
                        <button className="h-[full] w-full flex justify-center items-center" onClick={props.cadastroFinalizado}>
                            Finalizar
                        </button>
                    </div>

                </div>
            </div>}

            {
            modal &&
            <div className="w-full h-full bg-gray-100 flex justify-center items-center">
                <div className="w-[95%] h-[90%] bg-white border flex justify-center items-center">

                    <div className="w-[80%] h-[80%] flex flex-col gap-4">
                        <div className="text-xl mb-8">
                            Adicionar Membro da Família
                        </div>

                        <Input name="Nome" value={novoMembroFamilia.nome} style="w-full" onChange={handleChangeNome}/>

                        <div className="w-full flex justify-between">
                            <Dropdown name="Parentesco" options={parentescoOptions} value={novoMembroFamilia.parentesco} style="w-[49%]" onChange={handleChangeParentesco}/>
                            <Input name="Profissão" value={novoMembroFamilia.profissao} style="w-[49%]" onChange={handleChangeProfissao}/>
                        </div>

                        <div className="w-full flex justify-between">
                            <Dropdown name="Escolaridadade" options={escolaridadeOptions} value={novoMembroFamilia.escolaridade} style="w-[49%]" onChange={handleChangeEscolaridade}/>
                            <Input name="Renda (Reais)" value={novoMembroFamilia.renda} style="w-[49%]" onChange={handleChangeRenda}/>
                        </div>

                        <div className='w-full h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm mt-8'>
                            <button className="w-[40%] h-[60px] bg-[#262c2cb5] text-white rounded-md flex justify-center items-center text-sm font-bold"
                            onClick={changeModal}>
                                VOLTAR
                            </button>
                            <button className="w-full h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm font-bold"
                            onClick={adicionarEditarMembro}>
                                {modalAdicionar? "ADICIONAR": "EDITAR"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            }

        </div>

        
    )
}