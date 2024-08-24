'use client'
import React from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DownloadIcon from '@mui/icons-material/Download';
import Header from "@/components/Header";
import BotaoDocumento from './BotaoDocumentos';
import { Botao } from '@/components/Botao';

export default function ValidarCadastro() {

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
                // Aqui você pode implementar a lógica de upload do arquivo
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

    return (
        <div>
            <Header buttonName='sair' handleClick={handleNavigation} />

            <div className="w-full h-full px-20">
                <div className="gap-x-8 gap-y-12 w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-black p-4">
                    {documentData.map((document) => (
                        <div key={document.id} className="relative">
                            <p className="text-xl text-[rgb(65,100,99)] mb-1">{document.title}</p>
                            <div className="relative">
                                <img src={document.imageSrc} alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-64" />
                                <a href={document.downloadLink} download className="absolute inset-0 flex items-center justify-center w-full">
                                    <div className="flex items-center justify-center border-2 rounded-md border-black p-2 bg-white bg-opacity-80 mx-4 md:mx-8 w-auto max-w-full">
                                        <span className="text-black text-lg font-bold md:text-base sm:text-sm whitespace-nowrap">
                                            BAIXAR MODELO
                                        </span>
                                        <DownloadIcon className="ml-2 md:text-base sm:text-sm" />
                                    </div>
                                </a>
                            </div>
                            <p className="text-lg text-[#1D6C11] font-bold my-2 flex justify-center items-center">ENVIADO</p>
                            <div className="flex justify-center items-center border-2 rounded-md border-black">
                                <BotaoDocumento 
                                    icon={<FileUploadIcon />} 
                                    buttonName="Enviar Documento" 
                                    handleClick={handleFileUpload} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center my-5'>
                <Botao onClick={handleNavigation} className='p-4 w-auto h-auto rounded-md justify-center items-center text-lg'>
                    Enviar Documentos
                </Botao> 
            </div>
        </div>
    );
}
