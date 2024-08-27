import { useState } from 'react';
import { Botao } from './Botao';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

interface InterfaceProps {
  buttonName: string,
  handleClick: () => void
}

export default function Header(props: InterfaceProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  function clickLogo() {
    window.location.href = "/";
  }

  return (
    <div className="w-[100%] h-[120px] flex justify-center mb-4">
      <button className='xl:hidden justify-start' onClick={handleMenu}> 
        <MenuIcon/> 
      </button>
      <div className='w-[90%] h-[120px] flex justify-around items-center'>
        <button className='hidden xl:flex h-[80%] aspect-square'>
          <img 
            src="/assets/logo.png"
            alt="logo"
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

        <Botao onClick={props.handleClick} className='hidden xl:flex w-[140px] h-[50px] rounded-md justify-center items-center'>
          {props.buttonName}
        </Botao> 
      </div>

      {isOpen && (
        <motion.div 
          initial={{ x: '-100%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '-100%' }}
          className="fixed top-0 left-0 w-[30%] h-full bg-gray-800 p-4 flex flex-col justify-between z-50"
        >
          <div>
            <button onClick={handleMenu} className="mb-8">
              <CloseIcon className="text-white" />
            </button>
            <div className='text-white text-xl mb-6'>Quem Somos</div>
            <div className='text-white text-xl mb-6'>Regras</div>
            <div className='text-white text-xl mb-6'>Contato</div>
            <div className='text-white text-xl mb-6'>Documentos</div>
          </div>

          <div className='flex flex-col items-center'>
            <Botao onClick={props.handleClick} className='w-[80%] h-auto rounded-md justify-center items-center mb-8'>
              {props.buttonName}
            </Botao>
            <button className='h-[80px] aspect-square'>
              <img 
                src="/assets/logo.png"
                alt="logo"
                className="w-full h-full"
                onClick={clickLogo}
              />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
