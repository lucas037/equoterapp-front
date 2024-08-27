import { Botao } from './Botao';
import Button from './Button';

interface InterfaceProps {
    buttonName: string,
    handleClick: () => void
}

export default function Header(props: InterfaceProps) {
    function clickLogo() {
        window.location.href = "/";
    }

    return (

        <div className="w-[80%] h-[120px] flex justify-center mb-4 bg-[#4B8A89] rounded-md">
            <div className='w-[90%] h-[120px] flex justify-between items-center'>



                <div className='text-xl flex flex-col xl:flex xl:max-w-[100%] text-white'>
                    <div>Olá Maria</div>
                    <div>Seu Pré Cadastro no sistema se encontra</div>
                </div>

                <div className='text-xl flex flex-col xl:flex xl:max-w-[100%] text-white'>
                    <div>APROVADO</div>
                </div>


            </div>

        </div>
    )
}