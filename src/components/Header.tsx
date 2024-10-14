import { useEffect, useState } from 'react';
import { Botao } from './Botao';
import Image from 'next/image';
import requestsAuth from '@/utils/requestsAuth';
import currentPageStorage from '@/utils/currentPage';

interface InterfaceProps {
    collaborator?: boolean
    user?: boolean
    userNotLogged?: boolean
    buttonExtraName?: string
    routeExtra?: string
    routeLogo?: string
}

export default function Header(props: InterfaceProps) {
    const [isOpenedMenu, setIsOpenedMenu] = useState(false);
    const [buttonNames, setButtonNames] = useState<string[]>([]);
    const [routes, setRoutes] = useState<string[]>([]);
    const [buttonExtraName, setButtonExtraName] = useState("Sair");
    const [routeExtra, setRouteExtra] = useState("/login");
    const [routeLogo, setRouteLogo] = useState("");

    useEffect(() => {
        if (props.collaborator) {
            setRoutes(["gerenciar-cadastros", "gerenciar-documentos", "gerenciar-sessoes", "gerenciar-colaboradores"]);
            setButtonNames(["Cadastros", "Documentos", "Sessões", "Colaboradores"]);
        }
        else if (props.user) {
            setRoutes(["/sessoes"])
            setButtonNames(["Sessões"])
        }
        else if (props.userNotLogged) {
            setRoutes(["", "", "", ""]);
            setButtonNames(["Quem Somos", "Regras", "Quem Somos", "Documentos"]);
        }

        if (props.buttonExtraName != null)
            setButtonExtraName(props.buttonExtraName);

        if (props.routeExtra != null)
            setRouteExtra(props.routeExtra);

        if (props.routeLogo != null)
            setRouteLogo(props.routeLogo);

    }, []);

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
                    onClick={
                        () => {
                            if (routeLogo)
                                window.location.href = routeLogo
                        }
                    }
                />
                </button>

    
                <div className='text-xl gap-32 items-center hidden xl:flex xl:max-w-[100%]'>
                    {buttonNames.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => {
                                if (routes[index] != "")
                                    window.location.href = routes[index];
                            }}
                            className="cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
        
                {
                <Image
                    src="/assets/svg/burger-menu.svg"
                    alt="foto"
                    width={200}
                    height={200}
                    className="h-[30%] xl:hidden cursor-pointer"
                    onClick={clickBurgerMenu}
                />
                }
                
                <Botao 
                onClick={() => { 
                    if (buttonExtraName == "Sair") {
                        requestsAuth.clear();
                        currentPageStorage.clearCurrentPage();

                    }

                    window.location.href = routeExtra
                 }} 
                className="hidden xl:flex w-[140px] h-[50px] rounded-md justify-center items-center">
                    {buttonExtraName}
                </Botao> 


            </div>

            {
                isOpenedMenu &&
                <div className="xl:hidden w-[80%] flex flex-col gap-3 items-center md:flex-row md:justify-between">
                    {buttonNames.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => {
                                if (routes[index] != "")
                                    window.location.href = routes[index];
                            }}
                            className="cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}

                    
                    <Botao onClick={() => { window.location.href = routeExtra }} className='w-[140px] h-[50px] rounded-md flex justify-center items-center'>
                        {buttonExtraName}
                    </Botao> 
                </div>
            }
  
        </div>
    )
}