import DadosPaciente from "@/types/DadosPaciente";
import axios from "axios";
import { stringify } from "querystring";
import requestsAuth from "./requestsAuth";
import DadosSubFamiliar from "@/types/DadosSubFamiliar";
import currentPageStorage from "./currentPage";

const requests = {
    messageError: "",
    familiars: [] as DadosSubFamiliar[],

    async registerPatient(subFamiliars: DadosSubFamiliar[]) {
        const rota = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/subfamiliar/`+requestsAuth.getPatientId();

        try {
            const response = await axios.post(rota, subFamiliars, {
                headers: {
                    'Authorization': `Bearer ${requestsAuth.getToken()}`
                }
            });

        } catch (error) {
            this.messageError = "Ocorreu um erro inesperado. Contacte o suporte.";

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const errorData = error.response.data;
    
                    if (errorData.errors && errorData.errors.length > 0) {
                        this.messageError = errorData.errors[0];
                    }
                }
            }

        }
    },

    async getSubFamiliars(patientId: number) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/subfamiliar/${patientId}`, {
                headers: {
                    'Authorization': `Bearer ${requestsAuth.getToken()}`
                }
            });

            this.familiars = response.data as DadosSubFamiliar[];
    
        } catch (error) {
            this.messageError = "Ocorreu um erro inesperado ao Obter Id do Paciente. Contacte o suporte.";
        }
    }


};

export default requests;
