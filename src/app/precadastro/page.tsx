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


export default function PreCadastroView() {

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

    const [showStatus, setShowStatus] = useState('Pendente');
    const [boolModificado, setboolModificado] = useState(false);


    return (
        <motion.div
            initial={pageVariants.initial}
            animate={pageVariants.animate}
            exit={pageVariants.exit}
        >
            <div className="h-screen w-full flex flex-col items-center">
                <Header buttonName='Sair' handleClick={handleClick} />
                <HeaderPreCadastro buttonName={showStatus} handleClick={() => { throw new Error('Function not implemented.'); }} />

                <div className='h-[60%] w-[80%] flex border border-[#C3C3C3] items-center justify-center'>
                    <div>
                        Aqui conterá o componente da tabela do quadro familiar
                    </div>
                </div>

                <div className='w-[80%] h-[10%] flex justify-center items-center mt-4 mb-4'>
                    <Botao
                        className={`w-[300px] h-[60px] rounded-md flex bg-teal-600 text-white font-extrabold ${!boolModificado ? ' opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Salvar alterações
                    </Botao>
                    {/* <Botao className='w-[140px] h-[50px] rounded-md flex justify-center items-center bg-teal-600 text-white font-extrabold ml-4'>
                    Finalizar
                </Botao> */}
                </div>
            </div>
        </motion.div>

    );
}