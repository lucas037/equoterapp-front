import axios from "axios";

const tokenStorage = {
  token: "",
  refreshToken: "",

  setToken(newToken: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', newToken);
      this.token = newToken;
    }
  },

  setRefreshToken(newToken: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('refreshToken', newToken);
      this.refreshToken = newToken;
    }

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

  clearToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      this.token = "";
    }
  },

  async generateNewToken(refreshTk: string) {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/refresh-token', {
          refreshToken: refreshTk
      });

      this.setToken(response.data.token);

    } catch (error) {
        alert("Falha ao gerar novo token.");
        window.location.href = "/login";
    }
  }

  
};

export default tokenStorage;
