import { useState } from 'react';
import { Botao } from './Botao';
import Image from 'next/image';

interface InterfaceProps {
    buttonName: string,
    handleClick: () => void,
    buttonsNames: string[],
    colaborador?: boolean
}

export default function Header(props: InterfaceProps) {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    function clickLogo() {
      window.location.href = "/";
    }

    function clickBurgerMenu() {
        if (isOpenedMenu)
            setIsOpenedMenu(false);
        else
            setIsOpenedMenu(true);
    }


    function goToPage(name: string, justCheck?:boolean) {
        if (name === "Perfil") {
            window.location.href = "/perfil";
        }

        else if (name === "Gerenciamento") {
            window.location.href = "/gerenciar";
        }
        
        else if (name === "Sessões") {
            window.location.href = "/sessoes";
        }

        else if (name === "Verificar Cadastros") {
            window.location.href = "/verificar-cadastros";
        }

        else if (name === "Verificar Documentos") {
            window.location.href = "/verificacao";
        }
    }

    return (
        
        <div className="w-[100%] flex flex-col items-center mb-4">
            <div className='w-[90%] h-[120px] flex justify-around items-center'>
                
                <button className='h-[80%] aspect-square'>
                    <Image src="/assets/logo.png"
                    alt="foto"
                    width={400}
                    height={400}
                    className="w-full h-full"
                    onClick={clickLogo}
                />
                </button>

    
                <div className='text-xl gap-32 items-center hidden xl:flex xl:max-w-[100%]'>
                    {props.buttonsNames.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => goToPage(item)}
                            className="cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
        
                {
                props.buttonsNames.length > 0 && <Image
                    src="/assets/svg/burger-menu.svg"
                    alt="foto"
                    width={200}
                    height={200}
                    className="h-[30%] xl:hidden cursor-pointer"
                    onClick={clickBurgerMenu}
                />
                }
                
                <Botao onClick={props.handleClick} className='hidden xl:flex w-[140px] h-[50px] rounded-md justify-center items-center'>
                    {props.buttonName}
                </Botao> 


            </div>

            {
                isOpenedMenu &&
                <div className="xl:hidden w-[80%] flex flex-col gap-3 items-center md:flex-row md:justify-between">
                    {props.buttonsNames.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => goToPage(item)}
                            className="cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}

                    
                    <Botao onClick={props.handleClick} className='w-[140px] h-[50px] rounded-md flex justify-center items-center'>
                        {props.buttonName}
                    </Botao> 
                </div>
            }
  
        </div>
    )
}