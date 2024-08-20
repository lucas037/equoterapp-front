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
        { label: "10 ou mais", value: "10+" }
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

        <div className="w-full h-full flex flex-col items-center text-sm font-bold border border-[#C3C3C3] bg-white p-4 justify-around">

            <div className="flex flex-col items-center gap-2 text-sm">
                <div>REALIZE O PRÉ-CADASTRO NO SISTEMA</div>

                <div className="text-5xl flex gap-2 text-[#D9D9D9]">
                    <div className="text-[#4B8A89]">•</div>
                    <div className="text-[#4B8A89]">•</div>
                    <div className="">•</div>
                    <div className="">•</div>
                </div>
            </div>



            <div className="w-full flex justify-center items-center space-x-4">
                <Dropdown
                    name={"PARENTESCO DO FAMILIAR"}
                    width={"w-[50%]"}
                    options={parentescoOptions}
                    value={props.dadosPaciente.parentesco}
                    onChange={handleChangeParentesco}
                />

                <Dropdown
                    name={"MORA COM O PACIENTE?"}
                    width={"w-[50%]"}
                    options={moraComOptions}
                    value={props.dadosPaciente.moraComPaciente}
                    onChange={handleChangeMoraComPaciente}
                />
            </div>

            <div className="w-full flex justify-center space-x-4">
                <Dropdown
                    name="BENEFICIÁRIO BOLSA FAMÍLIA"
                    width="w-[50%]"
                    options={beneficiarioBolsaFamiliaOptions}
                    value={props.dadosPaciente.beneficiarioBolsaFamilia}
                    onChange={handleChangeBeneficiarioBolsaFamilia}
                />

                <Input
                    name="NÚMERO DO NIS"
                    width="w-[50%] h-[55px] text-xs"
                    value={props.dadosPaciente.numeroNis}
                    onChange={handleChangeNumeroNis}
                />
            </div>

            <div className="w-full flex justify-center space-x-4">
                <Dropdown
                    name="PACIENTE É ESTUDANTE?"
                    width="w-[50%]"
                    options={pacienteEstudanteOptions}
                    value={props.dadosPaciente.pacienteEstudante}
                    onChange={handleChangePacienteEstudante}
                />

                <Input
                    name="TIPO DE DEFICIÊNCIA"
                    width="w-[50%] h-[55px] text-xs"
                    value={props.dadosPaciente.deficiencia}
                    onChange={handleChangeTipoDeficiente}
                />
            </div>

            <div className="w-full flex justify-center space-x-4">
                <Dropdown
                    name="QUANTIDADE DE MEMBROS"
                    width="w-[50%]"
                    options={quantMembrosOptions}
                    value={props.dadosPaciente.quantMembrosCasa}
                    onChange={handleChangeQuantMembrosCasa}
                />

                <Dropdown
                    name="TIPO DE MORADIA"
                    width="w-[50%]"
                    options={tipoMoradiaOptions}
                    value={props.dadosPaciente.tipoMoradia}
                    onChange={handleChangeTipoMoradia}
                />
            </div>


            <div className='w-full h-[60px] bg-[#4B8A89] text-white rounded-md flex justify-center items-center text-sm'>
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