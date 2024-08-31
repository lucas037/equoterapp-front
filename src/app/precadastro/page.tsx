"use client";

import Header from '@/components/Header';
import HeaderPreCadastro from '@/components/HeaderPreCadastro';
import Input from '@/components/Input';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MembroFamilia from '../types/MembroFamilia';
import DropdownOption from '../types/DropdownOption';
import Dropdown from '@/components/Dropdown';
import DadosPaciente from '../types/DadosPaciente';
import { Botao } from '@/components/Botao';

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    cadastroFinalizado: () => void
}

export default function PreCadastroView(props: InterfaceProps) {
    const [membrosFamilia, setMembrosFamilia] = useState<MembroFamilia[]>([]);
    const [novoMembroFamilia, setNovoMembroFamilia] = useState<MembroFamilia>({} as MembroFamilia);
    const [modal, setModal] = useState<boolean>(false);
    const [modalAdicionar, setModalAdicionar] = useState<boolean>(false);
    const [indexEdicao, setIndexEdicao] = useState<number>(0);

    const name = "PreCadastro";
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

    function handleClick() {
        window.location.href = "/cadastro";
    }

    function changeModal() {
        if (modal) {
            setModal(false);
            setModalAdicionar(false);
        } else {
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
        });
    }

    function adicionarEditarMembro() {
        if (modalAdicionar) {
            setMembrosFamilia(membrosFamilia => [...membrosFamilia, novoMembroFamilia]);
        } else {
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
        <motion.div
        initial={pageVariants.initial}
        animate={pageVariants.animate}
        exit={pageVariants.exit}
    >
        <div className="h-screen w-full flex flex-col items-center">
            <Header buttonName='Sair' handleClick={handleClick} />
            <HeaderPreCadastro buttonName={'Aprovado'} handleClick={() => { throw new Error('Function not implemented.'); }} />
            
            <div className='h-[60%] w-[80%] flex border border-[#C3C3C3] items-center justify-center'>
                <div>
                    Aqui conterá o componente da tabela do quadro familiar
                </div>
            </div>
    
            <div className='w-[80%] h-[10%] flex justify-center items-center mt-4 mb-4'>
                <Botao className='w-[140px] h-[50px] rounded-md flex justify-center items-center bg-teal-600 text-white font-extrabold' onClick={props.cadastroFinalizado}>
                    Editar
                </Botao>
                <Botao className='w-[140px] h-[50px] rounded-md flex justify-center items-center bg-teal-600 text-white font-extrabold ml-4' onClick={props.cadastroFinalizado}>
                    Finalizar
                </Botao>
            </div>
        </div>
    </motion.div>
    
    );
}