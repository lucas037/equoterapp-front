import axios from "axios";
import requestsAuth from "./requestsAuth";
import DadosFamiliar from "@/types/DadosFamiliar";
import { useState } from "react";

const requests = {
    messageError: "Nenhum usuário pendente.",
    ids: [] as number[],
    names: [] as string[],
    nameFamiliar: "",

    getFamliars: async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/familiar/pending`, {
                headers: {
                    'Authorization': `Bearer ${requestsAuth.getToken()}`
                }
            });
            
            requests.ids = response.data.map((item: { id: number }) => item.id);
            requests.names = response.data.map((item: { name: string }) => item.name);

        } catch (error) {
            requests.messageError = "Ocorreu um erro inesperado ao Obter Id do Paciente. Contacte o suporte.";
        }
    },

    async getFamiliar(idFamiliar: number) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/familiar/${idFamiliar}`, {
                headers: {
                    'Authorization': `Bearer ${requestsAuth.getToken()}`
                }
            });

            this.nameFamiliar = response.data.name;
            

        } catch (error) {
            requests.messageError = "Ocorreu um erro inesperado ao Obter Id do Paciente. Contacte o suporte.";
        }

    },

    async approvePreCadastro(idFamiliar: number, apv: boolean) {
        try {
            const response = await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/familiar/approval/${idFamiliar}`,
                {
                    approved: apv,
                    justification: ""
                },
                {
                    headers: {
                        'Authorization': `Bearer ${requestsAuth.getToken()}`
                    }
                }
            );
        
        } catch (error) {
            requests.messageError = "Ocorreu um erro inesperado ao Obter Id do Paciente. Contacte o suporte.";
        }
        

    }
};

export default requests;
