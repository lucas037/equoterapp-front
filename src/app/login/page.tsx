"use client";

import Header from '@/components/Header';
import Input from '@/components/Input';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DadosPaciente from '../types/DadosPaciente';

export default function Login() {
  const [dadosPaciente, setDadosPaciente] = useState<DadosPaciente>({} as DadosPaciente);

  function handleClick() {
    window.location.href = "/cadastro";
  }

  function handleChangeEmailFamiliar(value: string) {
    setDadosPaciente({
      ...dadosPaciente,
      emailFamiliar: value
    })
  }

  function handleChangeSenhaFamiliar(value: string) {
    setDadosPaciente({
      ...dadosPaciente,
      senhaFamiliar: value
    })
  }

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
    initial={pageVariants.initial}
    animate={pageVariants.animate}
    exit={pageVariants.exit}
  >
      <div className="h-screen w-full flex flex-col items-center">

        <Header buttonName='Cadastro' handleClick={handleClick} />

        <div className='h-[75%] w-[80%] flex'>
          <img
            src="/assets/adulto.png"
            alt="foto"
            className="w-auto h-full opacity-50 border border-[#C3C3C3] hidden xl:flex xl:max-w-[100%]"
          />

          <div className='w-full h-full flex flex-col items-center justify-around text-base font-bold border border-[#C3C3C3] xl:flex xl:max-w-[100%]'>
            <div>FAÇA LOGIN PARA ENTRAR NO SISTEMA</div>

            <div className='w-[80%] flex flex-col items-center gap-4 text-sm'>
              <Input name={"EMAIL"} style={"w-full"} value={dadosPaciente.emailFamiliar} onChange={handleChangeEmailFamiliar} />
              <Input name={"SENHA"} style={"w-full"} value={dadosPaciente.senhaFamiliar} onChange={handleChangeSenhaFamiliar} type="password" />
              <div className='w-full flex justify-end text-sm cursor-pointer'>Esqueci minha senha</div>
              <button
                onClick={() => console.log('Entrar')} // Substitua com a lógica de login
                className='w-full h-[50px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center'
              >
                ENTRAR
              </button>
            </div>

            <div className='text-sm flex gap-1'>
              NÃO POSSUI CONTA?
              <div
                className='font-bold text-black underline cursor-pointer'
                onClick={() => window.location.href = "/cadastro"}
              >
                CADASTRE-SE
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
