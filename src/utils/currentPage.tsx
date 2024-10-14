const currentPageStorage = {
    currentPage: "",

    changePage(index: number) {
        if (typeof window !== 'undefined') {
            if (index === 0) {
                this.currentPage = "gerenciar-colaboradores";
            }
            if (index === 1) {
                this.currentPage = "cadastro-paciente";
            }
            else if (index === 2) {
                this.currentPage = "cadastro-familia";
            }
            else if (index === 3 || index === 4 || index === 7) {
                this.currentPage = "pre-cadastro";
            }
            else if (index === 5)
                this.currentPage = "submissao";
            else if (index === 6)
                this.currentPage = "sessoes";
            localStorage.setItem('currentPage', this.currentPage);
        }
    },

    clearCurrentPage() {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('currentPage');
        this.currentPage = "";
      }
    },

    getPage() {
        if (typeof window !== 'undefined') {
            const savedPage = localStorage.getItem('currentPage');
            return savedPage ? savedPage : this.currentPage;
        }
        return this.currentPage;
    }
};

export default currentPageStorage;
