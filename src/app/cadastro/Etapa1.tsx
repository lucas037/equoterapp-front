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
    <div className="w-full h-full flex flex-col items-center justify-between gap-4 text-xl font-bold border border-[#C3C3C3] bg-white p-4">
      <div className="flex flex-col items-center gap-2 mt-2">
        <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>
        <div className="text-6xl flex gap-2 text-[#D9D9D9]">
          <div className="text-[#4B8A89]">•</div>
          <div>•</div>
          <div>•</div>
          <div>•</div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 text-base">
        <Input
          name={"NOME DO FAMILIAR"}
          width={"w-full"}
          value={props.dadosPaciente.nomeFamiliar}
          onChange={handleChangeNomeFamiliar}
        />

        <div className="w-full flex flex-wrap gap-4">
          <Input
            name={"CPF DO FAMILIAR"}
            width={"w-full sm:w-[48%]"}
            value={props.dadosPaciente.cpfFamiliar}
            onChange={handleChangeCpfFamiliar}
          />
          <Input
            name={"TELEFONE DO FAMILIAR"}
            width={"w-full sm:w-[48%]"}
            value={props.dadosPaciente.telefoneFamiliar}
            onChange={handleChangeTelefoneFamiliar}
          />
        </div>

        <Input
          name={"EMAIL DO FAMILIAR"}
          width={"w-full"}
          value={props.dadosPaciente.emailFamiliar}
          onChange={handleChangeEmailFamiliar}
        />

        <Input
          name={"SENHA DO FAMILIAR"}
          width={"w-full"}
          value={props.dadosPaciente.senhaFamiliar}
          onChange={handleChangeSenhaFamiliar}
          type="password"
        />
      </div>

      <button
        className="w-full max-w-[900px] h-[70px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center mt-4"
        onClick={props.clickProximaEtapa}
      >
        PRÓXIMA ETAPA
      </button>
    </div>
  );
}