  "use client";

  import { useState } from "react";
  import Header from "@/components/Header";
  import Etapa1 from "./Etapa1";
  import Etapa2 from "./Etapa2";
  import DadosPaciente from "../types/DadosPaciente";
  import Etapa3 from "./Etapa3";
  import Etapa4 from "./Etapa4";

  import Input from "@/components/Input";

  export default function Cadastro() {
    const [dadosPaciente, setDadosPaciente] = useState<DadosPaciente>({} as DadosPaciente);
    const [etapa, setEtapa] = useState(1);

    function handleClick() {
      window.location.href = "/login";
    }

    function cadastroFinalizado() {
      alert("Cadastro Finalizado! " + dadosPaciente.nome);
      window.location.href = "/login";
    }

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
        <Header buttonName="Login" handleClick={handleClick} />

        <div className="w-[90vw] h-[75vh] flex flex-col xl:flex-row overflow-hidden">
        {etapa === 1 && (
            <div className="flex flex-col xl:flex-row w-full h-full">
              <div className="relative w-full xl:w-1/2 h-full flex-shrink-0 hidden xl:block">
                <img
                  src="/assets/adulto.png"
                  alt="foto"
                  className="xl:absolute xl:inset-0 w-full h-full object-cover opacity-50"
                  />
              </div>
              <div className="w-full xl:w-1/2 h-full flex items-center bg-white overflow-y-auto">

                <Etapa1
                  dadosPaciente={dadosPaciente}
                  changeDadosPaciente={changeDadosPaciente}
                  clickProximaEtapa={clickProximaEtapa}
                />
                </div>
            </div>
          )}

          {etapa === 2 && (
            <div className="flex flex-col xl:flex-row w-full h-full">
              <div className="relative w-full xl:w-1/2 h-full flex-shrink-0 hidden xl:block">
              <img
                  src="/assets/adulto.png"
                  alt="foto"
                  className="xl:absolute xl:inset-0 w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="w-full xl:w-1/2 h-full flex items-center bg-white overflow-y-auto">
                <Etapa2
                  dadosPaciente={dadosPaciente}
                  changeDadosPaciente={changeDadosPaciente}
                  clickProximaEtapa={clickProximaEtapa}
                  clickEtapaAnterior={clickEtapaAnterior}
                />
              </div>
            </div>
          )}

          {etapa === 3 && (
            <div className="flex flex-col xl:flex-row w-full h-full">
              <div className="relative w-full xl:w-1/2 h-full flex-shrink-0 hidden xl:block">
                <img
                  src="/assets/adulto.png"
                  alt="foto"
                  className="xl:absolute xl:inset-0 w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="w-full xl:w-1/2 h-full flex items-center bg-white overflow-y-auto">
                <Etapa3
                  dadosPaciente={dadosPaciente}
                  changeDadosPaciente={changeDadosPaciente}
                  clickProximaEtapa={clickProximaEtapa}
                  clickEtapaAnterior={clickEtapaAnterior}
                />
              </div>
            </div>
          )}

          {etapa === 4 && (<Etapa4
            dadosPaciente={dadosPaciente}
            changeDadosPaciente={changeDadosPaciente}
            clickProximaEtapa={cadastroFinalizado}
            clickEtapaAnterior={clickEtapaAnterior}
          />)}
        </div>
      </div>
    );
  }