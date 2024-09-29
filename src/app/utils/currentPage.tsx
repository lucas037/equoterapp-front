const currentPageStorage = {
    currentPage: "",

    changePage(index: number) {
        if (typeof window !== 'undefined') {
            if (index === 1) {
                this.currentPage = "cadastro-paciente";
                localStorage.setItem('currentPage', this.currentPage);
            }
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
