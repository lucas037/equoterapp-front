import Input from "@/components/Input";
import DropdownOption from "../types/DropdownOption";
import Dropdown from "@/components/Dropdown";
import DadosPaciente from "../types/DadosPaciente";

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    changeDadosPaciente: (dadosPaciente: DadosPaciente) => void,
    clickProximaEtapa: () => void
}

export default function Etapa1(props: InterfaceProps) {
    function handleChangeNomeFamiliar(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            nomeFamiliar: value
        });
    }
    
    function handleChangeCpfFamiliar(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            cpfFamiliar: value
        });
    }
    
    function handleChangeTelefoneFamiliar(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            telefoneFamiliar: value
        });
    }
    
    function handleChangeEmailFamiliar(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            emailFamiliar: value
        });
    }
    
    function handleChangeSenhaFamiliar(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            senhaFamiliar: value
        });
    }
    
    return (

        <div className='w-full h-auto flex flex-col items-center gap-8 text-2xl font-bold mt-4'>

            <div className="flex flex-col items-center gap-8">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-6xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="">•</div>
                    <div className="">•</div>
                    <div className="">•</div>
                </div>
            </div>


            <div className='w-[80%] flex flex-col items-center gap-4'>
                <Input
                name={"NOME DO FAMILIAR"}
                width={"w-full"}
                value={props.dadosPaciente.nomeFamiliar}
                onChange={handleChangeNomeFamiliar}
                />

                <div className="w-full flex justify-between items-center">
                    <Input
                    name={"CPF DO FAMILIAR"}
                    width={"w-[60%]"}
                    value={props.dadosPaciente.cpfFamiliar}
                    onChange={handleChangeCpfFamiliar}
                    />

                    <Input
                    name={"TELEFONE DO FAMILIAR"}
                    width={"w-[39%]"}
                    value={props.dadosPaciente.telefoneFamiliar}
                    onChange={handleChangeTelefoneFamiliar}
                    />
                </div>

                <Input
                name={"EMAIL DO FAMILIAR"}
                width={"w-[100%]"}
                value={props.dadosPaciente.emailFamiliar}
                onChange={handleChangeEmailFamiliar}
                />

                <Input
                name={"SENHA DO FAMILIAR"}
                width={"w-[100%]"}
                value={props.dadosPaciente.senhaFamiliar}
                onChange={handleChangeSenhaFamiliar}
                type="password"
                />

                <button className='w-full h-[70px] bg-[#4B8A89] text-white rounded-2xl flex justify-center items-center mt-2' onClick={props.clickProximaEtapa}>
                    PRÓXIMA ETAPA
                </button>
            </div>


        </div>
    )
}