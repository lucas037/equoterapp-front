import { useState } from 'react';
import { Botao } from './Botao';
import Image from 'next/image';

interface InterfaceProps {
    buttonName: string,
    handleClick: () => void,
    button1?: [string, () => void],
    button2?: [string, () => void],
    button3?: [string, () => void],
    button4?: [string, () => void]
}

export default function Header(props: InterfaceProps) {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);

    const buttons: [string, () => void][] = [props.button1, props.button2, props.button3, props.button4].filter(Boolean) as [string, () => void][];

    function clickLogo() {
      window.location.href = "/";
    }

    function clickBurgerMenu() {
        if (isOpenedMenu)
            setIsOpenedMenu(false);
        else
            setIsOpenedMenu(true);
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
                    {buttons.map((items, index) => (
                        <div 
                            key={index} 
                            onClick={items[1]}
                        >
                            {items[0]}
                        </div>
                    ))}
                </div>
        
                {
                buttons.length > 0 && <Image
                    src="/assets/svg/burger-menu.svg"
                    alt="foto"
                    width={200}
                    height={200}
                    className="h-[30%] xl:hidden cursor-pointer"
                    onClick={clickBurgerMenu}
                />
                }
                
                <Botao onClick={props.handleClick} className='w-[140px] h-[50px] rounded-md flex justify-center items-center'>
                    {props.buttonName}
                </Botao> 


            </div>

            {
                isOpenedMenu &&
                <div className="xl:hidden w-[80%] flex flex-col md:flex-row md:justify-between">
                    {buttons.map((items, index) => (
                        <div 
                            key={index} 
                            className="h-[60px] flex justify-center items-center text-lg cursor-pointer"
                            onClick={items[1]}
                        >
                            {items[0]}
                        </div>
                    ))}
                </div>
            }
  
        </div>
    )
}