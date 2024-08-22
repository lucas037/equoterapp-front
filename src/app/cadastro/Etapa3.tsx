import Input from "@/components/Input";
import DropdownOption from "../types/DropdownOption";
import Dropdown from "@/components/Dropdown";
import DadosPaciente from "../types/DadosPaciente";

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    changeDadosPaciente: (dadosPaciente: DadosPaciente) => void,
    clickProximaEtapa: () => void
    clickEtapaAnterior: () => void
}

export default function Etapa2(props: InterfaceProps) {
    function handleChangeNome(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            nome: value
        });
    }
    
    function handleChangeCpf(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            cpf: value
        });
    }
    
    function handleChangeDataNacimento(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            dataNascimento: value
        });
    }
    
    function handleChangeNomeDaMae(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            nomeDaMae: value
        });
    }
    
    function handleChangeNacionalidade(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            nacionalidade: value
        });
    }
    
    function handleChangeSexo(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            sexo: value
        });
    }
    
    const nacionalidadeOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Brasileira", value: "brasileira" },
      { label: "Outra", value: "outra" },
    ];
  
    const sexoOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Masculino", value: "masculino" },
      { label: "Feminino", value: "feminino" },
    ];
    
    return (

        <div className="w-full h-full flex flex-col items-center font-bold border border-[#C3C3C3] bg-white p-4 justify-around text-xs">
      

      <div className="flex flex-col items-center gap-2">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-5xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="">•</div>
                </div>
            </div>


            <div className="w-full flex flex-col gap-8">

                <Input
                name={"NOME DO PACIENTE"}
                style={"w-full"}
                value={props.dadosPaciente.nome}
                onChange={handleChangeNome}
                />

                <div className="w-full flex justify-between items-center space-x-4">
                    <Input
                    name={"CPF DO PACIENTE"}
                    style={"w-[70%]"}
                    value={props.dadosPaciente.cpf}
                    onChange={handleChangeCpf}
                    />

                    <Input
                    name={"DATA DE NASCIMENTO"}
                    style={"w-[30%]"}
                    value={props.dadosPaciente.dataNascimento}
                    onChange={handleChangeDataNacimento}
                    />
                </div>


                <div className="w-full flex justify-between items-center space-x-4">
                    <Dropdown
                    name={"NACIONALIDADE DO PACIENTE"}
                    style={"w-[70%]"}
                    options={nacionalidadeOptions}
                    value={props.dadosPaciente.nacionalidade}
                    onChange={handleChangeNacionalidade}
                    />

                    <Dropdown
                    name={"SEXO DO PACIENTE"}
                    style={"w-[30%]"}
                    options={sexoOptions}
                    value={props.dadosPaciente.sexo}
                    onChange={handleChangeSexo}
                    />
                </div>

            </div>

            <div className=' mt-4 w-full h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm'>
                <button className="w-full h-[60px] bg-[#262c2cb5] text-white rounded-md flex justify-center items-center text-sm font-bold" onClick={props.clickEtapaAnterior}>
                    VOLTAR
                </button>
                <button className="w-full h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm font-bold"
                    onClick={props.clickProximaEtapa}>
                    PRÓXIMA ETAPA
                </button>
            </div>


        </div>
    )
}