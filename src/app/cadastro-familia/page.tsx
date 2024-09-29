"use client"

import { useEffect } from "react";
import currentPageStorage from "../utils/currentPage";
import Header from "@/components/Header";
import tokenStorage from "../utils/token";

export default function CadastroFamilia() {
    useEffect(() => {
        if (currentPageStorage.getPage() != "cadastro-familia")
            window.location.href = "/login";

    }, []);
    
    return (
        <div className="h-screen">
            <Header
            buttonName="Sair"
            handleClick={() => {
                tokenStorage.clearToken();
                currentPageStorage.clearCurrentPage();
                window.location.href = "/login"
            }}
            buttonsNames={["Quem Somos", "Regras", "Contatos", "Documentos"]}
            />

            <div className="h-[calc(100vh-140px)] flex justify-center items-center">
                <div className="h-[95%] w-[90%] border border-black rounded-lg"></div>
            </div>
            
        </div>
    )
}