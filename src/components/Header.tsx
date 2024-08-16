import Image from 'next/image';

export default function Header() {
    return (
        <div className="h-[15%] w-[80%] flex justify-between items-center">
            <img 
            src="/assets/logo.png"
            alt="foto"
            className="w-auto h-[80%]"
            />
  
          <div className='text-xl flex gap-32'>
              <div>Quem Somos</div>
              <div>Regras</div>
              <div>Contato</div>
              <div>Documentos</div>
          </div>
  
          <div className='bg-[#4B8A89] text-white text-xl w-[150px] h-[35%] rounded-2xl flex justify-center items-center'>
              Registro
          </div>
  
        </div>
    )
}