import { Botao } from "./Botao";

export default function Header() {
    return (
        <header className="flex items-center justify-between h-[15vh] p-4 mt-5">
            <div className="flex-1 flex items-center">
                <div className="py-4 h-[50%] w-[50%] flex justify-center items-center">
                    <img src='/assets/logo.png' alt="Logo" className="max-h-[100%] object-contain" />
                </div>
            </div>
            <div className="flex-1 text-center">
                <h1>Quem somos nós</h1>
            </div>
            <div className="flex-1 text-center">
                <h1>Regras</h1>
            </div>
            <div className="flex-1 text-center">
                <h1>Contatos</h1>
            </div>
            <div className="flex-1 text-center">
                <h1>Documentos</h1>
            </div>
            <div className="flex-1 text-center p-5">
                <Botao variant='contained'>
                    Entrar
                </Botao>
            </div>
        </header>
    );
}
