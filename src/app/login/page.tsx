"use client"

import Header from '@/components/Header';
import Input from '@/components/Input';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Login() {
  function handleClick() {
    window.location.href = "/cadastro";
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <motion.div
    initial={{ y:20, opacity: 0 }}
    animate={{y:0, opacity: 1 }}
    transition={{ease:'easeInOut', duration: 0.5 }}
  >

    <div className="h-screen w-full flex flex-col items-center">

      <Header buttonName='Cadastro' handleClick={handleClick} />

      <div className='h-[75%] w-[80%] flex'>
        <img
          src="/assets/adulto.png"
          alt="foto"
          className="w-auto h-full opacity-50 border border-[#C3C3C3] hidden xl:flex xl:max-w-[100%]"
        />

        <div className='w-full h-full flex flex-col items-center justify-around text-2xl font-bold border border-[#C3C3C3] xl:flex xl:max-w-[100%]'>

          <div>FAÇA LOGIN PARA ENTRAR NO SISTEMA</div>

          <div className='w-[80%] flex flex-col items-center gap-4'>
            <Input name={"EMAIL"} width={"w-full"} value={email} onChange={setEmail} />
            <Input name={"SENHA"} width={"w-full"} value={password} onChange={setPassword} type="password" />
            <div className='w-full flex justify-end text-sm'>Esqueci minha senha</div>
            <div className='w-full h-[70px] bg-[#4B8A89] text-white rounded-2xl flex justify-center items-center'>
              ENTRAR
            </div>
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
    <motion.div/>
  );
}
