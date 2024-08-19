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
        
        <div className="w-[100%] h-[120px] flex justify-center mb-4">
            <div className='w-[90%] h-[120px] flex justify-around items-center'>
                
                <button className='h-[80%] aspect-square'>
                    <img 
                    src="/assets/logo.png"
                    alt="foto"
                    className="w-full h-full"
                    onClick={clickLogo}
                    />
                </button>
    
                <div className='text-xl gap-32 items-center hidden xl:flex xl:max-w-[100%]'>
                    <div>Quem Somos</div>
                    <div>Regras</div>
                    <div>Contato</div>
                    <div>Documentos</div>
                </div>
        
                <Button name={props.buttonName} handleClick={props.handleClick}/>

            </div>
  
        </div>
    )
}