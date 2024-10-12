import axios from "axios";

const requests = {
    loginStatus: false,
    messageError: "",
    token: "",
    refreshToken: "",
    id: "",
    name: "",
    familiarId: "",
    patientId: "",
    status: 0,
    position: "",

    setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
    },

    setRefreshToken(refreshToken: string) {
        this.refreshToken = refreshToken;
        localStorage.setItem('refreshToken', refreshToken);
    },

    setLoginStatus(status: boolean) {
        this.loginStatus = status;
        localStorage.setItem('loginStatus', String(status));
    },

    setMessageError(message: string) {
        this.messageError = message;
        localStorage.setItem('messageError', message);
    },

    setId(userId: string) {
        this.id = userId;
        localStorage.setItem('id', userId);
    },

    setName(userName: string) {
        this.name = userName;
        localStorage.setItem('name', userName);
    },

    setFamiliarId(familiarId: string) {
        this.familiarId = familiarId;
        localStorage.setItem('familiarId', familiarId);
    },

    setPatientId(patientId: string) {
        this.patientId = patientId;
        localStorage.setItem('patientId', patientId);
    },

    setStatus(userStatus: number) {
        this.status = userStatus;
        localStorage.setItem('status', String(userStatus));
    },

    setPosition(userPosition: string) {
        this.position = userPosition;
        localStorage.setItem('position', userPosition);
    },

    getLoginStatus() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('loginStatus') === 'true';
        }
        return false;
    },

    getMessageError() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('messageError') || "";
        }
        return "";
    },

    getToken() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
        return null;
    },

    getRefreshToken() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('refreshToken');
        }
        return null;
    },

    getId() {
        if (typeof window !== 'undefined') {
            return parseInt(localStorage.getItem('id') || "0");
        }
        return 0;
    },
    

    getName() {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('name') || "";
        }
        return "";
    },

    getFamiliarId() {
        if (typeof window !== 'undefined') {
            return parseInt(localStorage.getItem('familiarId') || "0");
        }
        return 0;
    },

    getPatientId() {
        if (typeof window !== 'undefined') {
            return parseInt(localStorage.getItem('patientId') || "0");
        }
        return 0;
    },

    getStatus() {
        if (typeof window !== 'undefined') {
            return parseInt(localStorage.getItem('status') || '0', 10);
        }
        return 0;
    },

    async clear(): Promise<void> {
        this.setLoginStatus(false);
        this.setMessageError("");
        this.setId("");
        this.setName("");
        this.setFamiliarId("");
        this.setPatientId(""),
        this.setStatus(0);
        this.setPosition("");
    },

    async login(email: string, senha: string): Promise<void> {
        await this.clear();
        
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
                email: email,
                password: senha
            });

            this.setToken(response.data.token);
            this.setRefreshToken(response.data.refreshToken);

            await this.auth();

        } catch (error) {
            this.setMessageError("Ocorreu um erro inesperado (Login). Contacte o suporte.");

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    const errorData = error.response.data;

                    if (errorData) {
                        this.setMessageError(errorData.errors[0]);
                    }
                }
            }
        }
    },

    async auth(): Promise<void> {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            this.setId(response.data.id);
            this.setName(response.data.name);
            this.setLoginStatus(true);

            if (response.data.collaborator != null) {
                this.setPosition(response.data.collaborator.position);
            } else {
                this.setFamiliarId(response.data.familiar.id);
                this.setStatus(response.data.familiar.status);
            }
        } catch (error) {
            this.setMessageError("Ocorreu um erro inesperado (Autenticação pós Login). Contacte o suporte.");
        }
    },

    loadFromStorage(): void {
        this.loginStatus = localStorage.getItem('loginStatus') === 'true';
        this.messageError = localStorage.getItem('messageError') || "";
        this.id = localStorage.getItem('id') || "";
        this.name = localStorage.getItem('name') || "";
        this.familiarId = localStorage.getItem('familiarId') || "";
        this.status = parseInt(localStorage.getItem('status') || '0', 10);
        this.position = localStorage.getItem('position') || "";
    }
};

export default requests;
