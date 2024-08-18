"use client"

import { useState } from "react";
import Header from "@/components/Header";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import DadosPaciente from "../types/DadosPaciente";
import Etapa3 from "./Etapa3";
import Etapa4 from "./Etapa4";

export default function Cadastro() {
  function handleClick() {
    window.location.href = "/login";
  }

  function cadastroFinalizado() {
    alert("Cadastro Finalizado! "+dadosPaciente.nome);
    window.location.href = "/login";
  }

  const [dadosPaciente, setDadosPaciente] = useState<DadosPaciente>({} as DadosPaciente);
  const [etapa, setEtapa] = useState(1);

  function changeDadosPaciente(dadosPaciente: DadosPaciente) {
    setDadosPaciente(dadosPaciente);
  }

  function clickProximaEtapa() {
    setEtapa(etapa + 1);
  }

  function clickEtapaAnterior() {
    setEtapa(etapa - 1);
  }

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <Header buttonName="Login" handleClick={handleClick}/>


      <div className='h-[calc(100%-180px)] w-[80%] flex'>
        <img 
          src="/assets/adulto.png"
          alt="foto"
          className="w-auto h-full opacity-50"
        />

        {etapa === 1 && (<Etapa1
          dadosPaciente={dadosPaciente}
          changeDadosPaciente={changeDadosPaciente}
          clickProximaEtapa={clickProximaEtapa}
        />)}

        {etapa === 2 && (<Etapa2
          dadosPaciente={dadosPaciente}
          changeDadosPaciente={changeDadosPaciente}
          clickProximaEtapa={clickProximaEtapa}
          clickEtapaAnterior={clickEtapaAnterior}
        />)}

        {etapa === 3 && (<Etapa3
          dadosPaciente={dadosPaciente}
          changeDadosPaciente={changeDadosPaciente}
          clickProximaEtapa={clickProximaEtapa}
          clickEtapaAnterior={clickEtapaAnterior}
        />)}

        {etapa === 4 && (<Etapa4
          dadosPaciente={dadosPaciente}
          changeDadosPaciente={changeDadosPaciente}
          clickProximaEtapa={cadastroFinalizado}
          clickEtapaAnterior={clickEtapaAnterior}
        />)}
      </div>
    </div>
  )
}
