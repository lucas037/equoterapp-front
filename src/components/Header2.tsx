import { Botao } from "./Botao";

export default function Header() {


const handleNavigation = () => {
  window.location.href = '/login'; 
};
    return (
        <header className="flex items-center justify-between h-[15vh] p-4 mt-5">
            <div className="flex-1 flex items-center">
                <div className="py-4 h-[50%] w-[50%] flex justify-center items-center">
                    <img src='/assets/logo.png' alt="Logo" className="max-h-[100%] object-contain" />
                </div>
            </div>
            <div className="xflex-1 text-center">
                <h1>Quem somos nós</h1>
            </div>
            <div className=" flex-1 text-center">
                <h1>Regras</h1>
            </div>
            <div className="x flex-1 text-center">
                <h1>Contatos</h1>
            </div>
            <div className=" flex-1 text-center">
                <h1>Documentos</h1>
            </div>
            <div className=" flex-1 text-center">
                <Botao variant='contained' onClick={handleNavigation}>
                    Entrar
                </Botao>
            </div>
        </header>
    );
}
