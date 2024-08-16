import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
    return (
        <header className="flex items-center justify-between h-[15vh] p-4">
            <div className="flex-1 flex items-center">
                <div className="py-4 h-full w-full flex justify-center items-center">
                    <Image src={logo} alt="Logo" className="max-h-[80%] object-contain" />
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
                <button className="bg-[#4B8A89] text-white font-bold p-4 rounded-md">
                    Entrar
                </button>
            </div>
        </header>
    );
}
