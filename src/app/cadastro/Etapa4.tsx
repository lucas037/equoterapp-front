import DropdownOption from "../types/DropdownOption";
import DadosPaciente from "../types/DadosPaciente";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    changeDadosPaciente: (dadosPaciente: DadosPaciente) => void,
    clickEtapaAnterior: () => void,
    clickProximaEtapa: () => void
}

export default function Etapa3(props: InterfaceProps) {
    function handleChangeTipoMoradia(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            tipoMoradia: value
        });
    }

    function handleChangePacienteEstudante(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            pacienteEstudante: value
        });
    }

    const tipoMoradiaOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Própria", value: "própria" },
      { label: "Alugada", value: "alugada" }
    ];
      

    const pacienteEstudanteOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Sim", value: "sim" },
      { label: "Não", value: "não" }
    ];
    
    return (

        <div className='w-full h-auto flex flex-col items-center gap-8 text-2xl font-bold mt-4'>

            <div className="flex flex-col items-center gap-8">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-6xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                </div>
            </div>


            <div className='w-[80%] flex flex-col items-center gap-4'>

                <div className="w-full flex justify-between">
                    <Dropdown
                    name="TIPO DE MORADIA"
                    width="w-[50%]"
                    options={tipoMoradiaOptions}
                    value={props.dadosPaciente.tipoMoradia}
                    onChange={handleChangeTipoMoradia}
                    />
                    
                    <Dropdown
                    name="PACIENTE É ESTUDANTE?"
                    width="w-[49%]"
                    options={pacienteEstudanteOptions}
                    value={props.dadosPaciente.pacienteEstudante}
                    onChange={handleChangePacienteEstudante}
                    />

                </div>

                <div className='w-full h-[70px] bg-[#4B8A89] text-white rounded-2xl flex items-center mt-2'>
                    <button className="w-[80%] h-full bg-[#546261] rounded-2xl flex justify-center items-center" onClick={props.clickEtapaAnterior}>
                        VOLTAR
                    </button>
                    <button className="w-[100%] h-full flex justify-center items-center" onClick={props.clickProximaEtapa}>
                        Finalizar
                    </button>
                </div>
            </div>


        </div>
    )
}