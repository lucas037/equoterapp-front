import DadosPaciente from "@/types/DadosPaciente";
import axios from "axios";
import { stringify } from "querystring";
import requestsAuth from "./requestsAuth";

const requests = {
    messageError: "",

    async registerPatient(dadosPaciente: DadosPaciente) {
        dadosPaciente.familiarId = requestsAuth.getFamiliarId();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/patient`, dadosPaciente, {
                headers: {
                    'Authorization': `Bearer ${requestsAuth.getToken()}`
                }
            });

            requestsAuth.setPatientId(response.data.id);
    
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
    
    async getPatientId(familiaId: number) {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/familiar/getPatients/`+familiaId, {
                headers: {
                    'Authorization': `Bearer ${requestsAuth.getToken()}`
                }
            });

            requestsAuth.setPatientId(response.data[0].id);
    
        } catch (error) {
            this.messageError = "Ocorreu um erro inesperado ao Obter Id do Paciente. Contacte o suporte.";
        }
    }


};

export default requests;
