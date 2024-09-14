'use client'
import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import BotaoAceitar from './BotaoAceitar';
import BotaoRecusar from './BotaoRecusar';
import InfoResponsavel from './InfoResponsavel';

export default function Verificacao() {

    const handleNavigation = () => {
        window.location.href = '/login';
    };

    const handleFileUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event: any) => {
            const file = event.target.files[0];
            if (file) {
                console.log('Arquivo selecionado:', file.name);
            }
        };
        input.click();
    };

    const documentData = [
        { id: 1, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 2, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 3, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 4, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 5, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 6, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 7, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 8, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 9, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" },
        { id: 10, title: "DOCUMENTOX", imageSrc: "/assets/Capturar.PNG", downloadLink: "/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" }
        
    ];
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

            <div className="w-full h-full px-20">
            <InfoResponsavel nome='MARIA JOSEFINA PAULINA' />
                <div className="gap-x-8 gap-y-12 w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-black p-4">
                    {documentData.map((document) => (
                        
                        <div key={document.id} className="relative">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <p className="text-xl text-[#214E4D] mb-1">{document.title}</p>
                            <div className="relative">
                                <img src={document.imageSrc} alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-64" />
                                <a href={document.downloadLink} download className="absolute inset-0 flex items-center justify-center w-full">
                                    <div className="flex items-center justify-center border-2 rounded-md border-black p-2 bg-white bg-opacity-80 mx-4 md:mx-8 w-auto max-w-full">
                                        <span className="text[#214E4D] text-lg font-bold md:text-base sm:text-sm whitespace-nowrap">
                                            VER DOCUMENTO
                                        </span>
                                        <RemoveRedEyeIcon className="ml-2 md:text-base sm:text-sm" />
                                    </div>
                                </a>
                            </div>
                            </motion.div>
                                <div className=' mt-2 h-full space-y-4'>
                                <BotaoAceitar 
                                    buttonName="Aprovar" 
                                    handleClick={handleFileUpload} 
                                />
                                <BotaoRecusar buttonName='Reprovar' handleClick={handleFileUpload}/>
                                </div>
                        </div>
                       
                    ))}
                </div>
            </div>
        </div>
        </motion.div>
    );
}
