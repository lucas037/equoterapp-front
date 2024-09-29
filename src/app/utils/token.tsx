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
  }
};

export default tokenStorage;
