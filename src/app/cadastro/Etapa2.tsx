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

        <div className='w-full h-auto flex flex-col items-center gap-8 text-2xl font-bold mt-4'>

            <div className="flex flex-col items-center gap-8">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-6xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="">•</div>
                    <div className="">•</div>
                </div>
            </div>


            <div className='w-[80%] flex flex-col items-center gap-4'>
                <Input
                name={"NOME DO PACIENTE"}
                width={"w-full"}
                value={props.dadosPaciente.nome}
                onChange={handleChangeNome}
                />

                <div className="w-full flex justify-between items-center">
                    <Input
                    name={"CPF DO PACIENTE"}
                    width={"w-[50%]"}
                    value={props.dadosPaciente.cpf}
                    onChange={handleChangeCpf}
                    />

                    <Input
                    name={"DATA DE NASCIMENTO"}
                    width={"w-[49%]"}
                    value={props.dadosPaciente.dataNascimento}
                    onChange={handleChangeDataNacimento}
                    />
                </div>

                <Input
                name={"NOME DA MÃE DO PACIENTE"}
                width={"w-full"}
                value={props.dadosPaciente.nomeDaMae}
                onChange={handleChangeNomeDaMae}
                />

                <div className="w-full flex justify-between">
                    <Dropdown
                    name={"NACIONALIDADE DO PACIENTE"}
                    width={"w-[60%]"}
                    options={nacionalidadeOptions}
                    value={props.dadosPaciente.nacionalidade}
                    onChange={handleChangeNacionalidade}
                    />

                    <Dropdown
                    name={"SEXO DO PACIENTE"}
                    width={"w-[39%]"}
                    options={sexoOptions}
                    value={props.dadosPaciente.sexo}
                    onChange={handleChangeSexo}
                    />
                </div>

                <div className='w-full h-[70px] bg-[#4B8A89] text-white rounded-2xl flex items-center mt-2'>
                    <button className="w-[80%] h-full bg-[#546261] rounded-2xl flex justify-center items-center" onClick={props.clickEtapaAnterior}>
                        VOLTAR
                    </button>
                    <button className="w-[100%] h-full flex justify-center items-center" onClick={props.clickProximaEtapa}>
                        PRÓXIMA ETAPA
                    </button>
                </div>
            </div>


        </div>
    )
}