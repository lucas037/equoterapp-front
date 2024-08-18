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
        <div className="h-[120px] w-[80%] flex justify-between items-center">
            <button className='h-[80%] aspect-square'>
                <img 
                src="/assets/logo.png"
                alt="foto"
                className="w-full h-full"
                onClick={clickLogo}
                />
            </button>
  
          <div className='text-xl flex gap-32 items-center'>
              <div>Quem Somos</div>
              <div>Regras</div>
              <div>Contato</div>
              <div>Documentos</div>
          </div>
  
          <Button name={props.buttonName} handleClick={props.handleClick}/>
  
        </div>
    )
}