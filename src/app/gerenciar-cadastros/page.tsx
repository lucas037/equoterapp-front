"use client";

import Header from '@/components/Header';
import HeaderPreCadastro from '@/components/HeaderPreCadastro';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Botao } from '@/components/Botao';
import requestsAuth from '../../utils/requestsAuth';


export default function PreCadastroView() {
    const [nameFamiliar, setNameFamiliar] = useState<string>("");

    useEffect(() => {
        const familiarName = requestsAuth.getName() || "";
        setNameFamiliar(familiarName);
    }, []);

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
        window.location.href = "/login";
    }
    const [showStatus, setShowStatus] = useState('Pendente');
    const [boolModificado, setboolModificado] = useState(false);

    useEffect(() => {
        const status = requestsAuth.getStatus();

        if (status == 4)
            setShowStatus("Aprovado");
        else if (status == 7)
            setShowStatus("Reprovado");
    })


    return (
        <motion.div
            initial={pageVariants.initial}
            animate={pageVariants.animate}
            exit={pageVariants.exit}
        >
            <div className="h-screen w-full flex flex-col items-center">
                <Header
                buttonName='Sair'
                handleClick={handleClick}
                buttonsNames={["Quem somos", "Regras", "Contato", "Documentos"]}
                colaborador={false}
                />

                <HeaderPreCadastro nameFamiliar={nameFamiliar} buttonName={showStatus} handleClick={() => { throw new Error('Function not implemented.'); }} />

                { showStatus == "Aprovado" && 
                    <div onClick={() => {window.location.href = "/submissao"}} className='w-[300px] h-[60px] flex justify-center items-center mt-4 mb-4 cursor-pointer bg-[#4B8A89] font-bold text-white rounded-2xl'>
                        IR PARA A PRÓXIMA ETAPA
                    </div>

                }
            </div>
        </motion.div>

    );
}