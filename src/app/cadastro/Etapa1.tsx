import Input from "@/components/Input";
import DadosPaciente from "../types/DadosPaciente";

interface InterfaceProps {
  dadosPaciente: DadosPaciente;
  changeDadosPaciente: (dadosPaciente: DadosPaciente) => void;
  clickProximaEtapa: () => void;
}

export default function Etapa1(props: InterfaceProps) {
  function handleChangeNomeFamiliar(value: string) {
    props.changeDadosPaciente({
      ...props.dadosPaciente,
      nomeFamiliar: value,
    });
  }

  function handleChangeCpfFamiliar(value: string) {
    props.changeDadosPaciente({
      ...props.dadosPaciente,
      cpfFamiliar: value,
    });
  }

  function handleChangeTelefoneFamiliar(value: string) {
    props.changeDadosPaciente({
      ...props.dadosPaciente,
      telefoneFamiliar: value,
    });
  }

  function handleChangeEmailFamiliar(value: string) {
    props.changeDadosPaciente({
      ...props.dadosPaciente,
      emailFamiliar: value,
    });
  }

  function handleChangeSenhaFamiliar(value: string) {
    props.changeDadosPaciente({
      ...props.dadosPaciente,
      senhaFamiliar: value,
    });
  }

  return (
    <div className="w-full h-full flex flex-col items-center text-xs font-bold border border-[#C3C3C3] bg-white p-4 justify-around">
      
      <div className="flex flex-col items-center gap-2">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-5xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="">•</div>
                    <div className="">•</div>
                    <div className="">•</div>
                </div>
            </div>
      <div className="w-full flex flex-col gap-8">
        <Input
          name={"NOME DO FAMILIAR"}
          style={"w-full"}
          value={props.dadosPaciente.nomeFamiliar}
          onChange={handleChangeNomeFamiliar}
        />

        <div className="w-full flex justify-between">
          <Input
            name={"CPF DO FAMILIAR"}
            style={"w-full sm:w-[48%]"}
            value={props.dadosPaciente.cpfFamiliar}
            onChange={handleChangeCpfFamiliar}
          />
          <Input
            name={"TELEFONE DO FAMILIAR"}
            style={"w-full sm:w-[48%]"}
            value={props.dadosPaciente.telefoneFamiliar}
            onChange={handleChangeTelefoneFamiliar}
          />
        </div>

        <Input
          name={"SENHA DO FAMILIAR"}
          style={"w-full"}
          value={props.dadosPaciente.senhaFamiliar}
          onChange={handleChangeSenhaFamiliar}
          type="password"
        />

        <button
          className="w-full h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm font-bold"
          onClick={props.clickProximaEtapa}
        >
          PRÓXIMA ETAPA
        </button>


      </div>


    </div>
  );
}