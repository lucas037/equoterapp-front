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
    function handleChangeParentesco(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            parentesco: value
        });
    }
    
    function handleChangeMoraComPaciente(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            moraComPaciente: value
        });
    }

    function handleChangeBeneficiarioBolsaFamilia(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            beneficiarioBolsaFamilia: value
        });
    }

    function handleChangeNumeroNis(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            numeroNis: value
        });
    }

    function handleChangePacienteEstudante(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            pacienteEstudante: value
        });
    }

    function handleChangeTipoDeficiente(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            deficiencia: value
        });
    }
    
    function handleChangeQuantMembrosCasa(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            quantMembrosCasa: value
        });
    }

    function handleChangeTipoMoradia(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            tipoMoradia: value
        });
    }

    const parentescoOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Pai", value: "pai" },
      { label: "Mãe", value: "mae" },
      { label: "Avó(ô)", value: "avó" },
      { label: "Tia(o)", value: "tia" },
      { label: "Irmã(o)", value: "irmã" },
      { label: "Outro", value: "outro" },
    ];
  
    const moraComOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Sim", value: "sim" },
      { label: "Não", value: "nao" },
    ];

    const beneficiarioBolsaFamiliaOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Sim", value: "sim" },
      { label: "Não", value: "não" }
    ];

    const quantMembrosOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        ...Array.from({ length: 9 }, (_, i) => {
            const value = (i + 1).toString();
            return { label: value, value };
        }),
        { label: "10 ou mais", value: "10+"}
    ];
    
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
                    <div className="">•</div>
                    <div className="">•</div>
                </div>
            </div>


            <div className='w-[80%] flex flex-col items-center gap-4'>

                <div className="w-full flex justify-between">
                    <Dropdown
                    name={"PARENTESCO DO FAMILIAR"}
                    width={"w-[60%]"}
                    options={parentescoOptions}
                    value={props.dadosPaciente.parentesco}
                    onChange={handleChangeParentesco}
                    />

                    <Dropdown
                    name={"MORA COM O PACIENTE?"}
                    width={"w-[39%]"}
                    options={moraComOptions}
                    value={props.dadosPaciente.moraComPaciente}
                    onChange={handleChangeMoraComPaciente}
                    />
                </div>

                <div className="w-full flex justify-between">
                    <Dropdown
                    name="BENEFICIÁRIO BOLSA FAMÍLIA"
                    width="w-[60%]"
                    options={beneficiarioBolsaFamiliaOptions}
                    value={props.dadosPaciente.beneficiarioBolsaFamilia}
                    onChange={handleChangeBeneficiarioBolsaFamilia}
                    />

                    <Input
                    name="NÚMERO DO NIS"
                    width="w-[39%]"
                    value={props.dadosPaciente.numeroNis}
                    onChange={handleChangeNumeroNis}
                    />
                </div>

                <div className="w-full flex justify-between">
                    <Dropdown
                    name="PACIENTE É ESTUDANTE?"
                    width="w-[60%]"
                    options={pacienteEstudanteOptions}
                    value={props.dadosPaciente.pacienteEstudante}
                    onChange={handleChangePacienteEstudante}
                    />

                    <Input
                    name="TIPO DE DEFICIÊNCIA"
                    width="w-[39%]"
                    value={props.dadosPaciente.deficiencia}
                    onChange={handleChangeTipoDeficiente}
                    />
                </div>

                <div className="w-full flex justify-between">
                    <Dropdown
                    name="QUANTIDADE DE MEMBROS DA CASA"
                    width="w-[60%]"
                    options={quantMembrosOptions}
                    value={props.dadosPaciente.quantMembrosCasa}
                    onChange={handleChangeQuantMembrosCasa}
                    />

                    <Dropdown
                    name="TIPO DE MORADIA"
                    width="w-[39%]"
                    options={tipoMoradiaOptions}
                    value={props.dadosPaciente.tipoMoradia}
                    onChange={handleChangeTipoMoradia}
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