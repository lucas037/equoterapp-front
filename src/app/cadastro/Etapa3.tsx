import DropdownOption from "../types/DropdownOption";
import DadosPaciente from "../types/DadosPaciente";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";

interface InterfaceProps {
    dadosPaciente: DadosPaciente,
    changeDadosPaciente: (dadosPaciente: DadosPaciente) => void,
    clickProximaEtapa: () => void
    clickEtapaAnterior: () => void
}

export default function Etapa3(props: InterfaceProps) {
    function handleChangeQuantMembrosCasa(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            quantMembrosCasa: value
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

    function handleChangeValorBeneficio(value: string) {
        props.changeDadosPaciente({
            ...props.dadosPaciente,
            valorBeneficio: value
        });
    }

    const quantMembrosOptions: DropdownOption[] = [
        { label: "Selecionar", value: "" },
        ...Array.from({ length: 9 }, (_, i) => {
            const value = (i + 1).toString();
            return { label: value, value };
        }),
        { label: "10 ou mais", value: "10+"}
    ];
      

    const beneficiarioBolsaFamiliaOptions: DropdownOption[] = [
      { label: "Selecionar", value: "" },
      { label: "Sim", value: "sim" },
      { label: "Não", value: "não" }
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
                    <div className="text-[#4B8A89]">•</div>
                    <div className="">•</div>
                </div>
            </div>


            <div className='w-[80%] flex flex-col items-center gap-4'>
                <div className="w-full flex justify-between">
                    <Dropdown
                    name="QUANTIDADE DE MEMBROS DA CASA"
                    width="w-[50%]"
                    options={quantMembrosOptions}
                    value={props.dadosPaciente.quantMembrosCasa}
                    onChange={handleChangeQuantMembrosCasa}
                    />
                    
                    <Dropdown
                    name="BENEFICIÁRIO BOLSA FAMÍLIA"
                    width="w-[49%]"
                    options={beneficiarioBolsaFamiliaOptions}
                    value={props.dadosPaciente.beneficiarioBolsaFamilia}
                    onChange={handleChangeBeneficiarioBolsaFamilia}
                    />

                </div>

                <div className="w-full flex justify-between">
                    <Input
                    name="NÚMERO DO NIS"
                    width="w-[50%]"
                    value={props.dadosPaciente.numeroNis}
                    onChange={handleChangeNumeroNis}
                    />
                    
                    <Input
                    name="VALOR DO BENEFÍCIO"
                    width="w-[49%]"
                    value={props.dadosPaciente.valorBeneficio}
                    onChange={handleChangeValorBeneficio}
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