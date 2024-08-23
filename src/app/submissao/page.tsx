'use client'
import Header from "@/components/Header";
import BotaoDocumento from "../submissao/BotaoDocumento";
import { motion } from "framer-motion";

export default function ValidarCadastro() {

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

    const handleNavigation = () => {
        window.location.href = '/login';
    };

    return (
        <div>
            <Header buttonName='sair' handleClick={handleNavigation} />

            <div className="w-full h-full px-20">
                <div className="gap-x-8 gap-y-12 w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-2 border-black p-4">

                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                           
                            <p className="text-lg text-[#1D6C11] font-bold my-2 flex justify-center items-center" >ENVIADO</p>
                            <div className="flex justify-center items-center border-2 rounded-md border-black">
                            <BotaoDocumento buttonName="Enviar Documento" handleClick={handleNavigation}></BotaoDocumento>
                            </div>

                            
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <a href="/arquivos/FichadeAvaliaçãoMédica(2.1).pdf" 
                            download className="absolute inset-0 flex items-center justify-center text-black text-lg font-bold">
                                BAIXAR MODELO
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                                BAIXAR MODELO
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-xl text-[#416463] mb-1">DOCUMENTOX</p>
                        <div className="relative">
                            <img src="/assets/Capturar.PNG" alt="Imagem Principal" className="shadow-md shadow-gray-600 border-8 border-gray-600 blur-sm w-full h-auto" />
                            <a href="/arquivos/FichadeAvaliaçãoMédica(2.1).pdf"  download className="absolute inset-0 flex items-center justify-center text-black text-lg font-bold">
                                BAIXAR MODELO
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
