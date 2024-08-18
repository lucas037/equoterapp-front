"use client"

import Header from '@/components/Header';
import Input from '@/components/Input';
import { useState } from 'react';

export default function Login() {
  function handleClick() {
    window.location.href = "/cadastro";
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className="h-screen w-full flex flex-col items-center">

      <Header buttonName='Cadastro' handleClick={handleClick}/>
      
      <div className='h-[calc(100%-180px)] w-[80%] flex'>
        <img 
          src="/assets/adulto.png"
          alt="foto"
          className="w-auto h-full opacity-50"
        />

        <div className='w-full h-auto flex flex-col items-center justify-around gap-8 text-2xl font-bold'>

          <div>FAÇA LOGIN PARA ENTRAR NO SISTEMA</div>

          <div className='w-[80%] flex flex-col items-center gap-4'>
            <Input name={"EMAIL"} width={"w-full"} value={email} onChange={setEmail} />
            <Input name={"SENHA"} width={"w-full"} value={password} onChange={setPassword} type="password"/>
            <div className='w-full flex justify-end text-sm'>Esqueci minha senha</div>
            <div className='w-full h-[70px] bg-[#4B8A89] text-white rounded-2xl flex justify-center items-center'>
              ENTRAR
            </div>
          </div>


          <div className='text-sm flex gap-1'>
            NÃO POSSUI CONTA? <div className='font-bold text-black underline'>CADASTRE-SE</div>
          </div>


        </div>
      </div>

    </div>
  );
}
