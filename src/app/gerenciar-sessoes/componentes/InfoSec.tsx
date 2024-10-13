import { Person, PersonTwoTone } from '@mui/icons-material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface InfoSecProps {
    nome: string;
    mediador: string;
    quantSessoes: number;
    presenca: boolean;
    handleNavigation: () => void;
    icon?: React.ReactElement;
}

export default function InfoSec({ nome, icon, quantSessoes, handleNavigation, presenca, mediador }: InfoSecProps) {
    return (
        <div className="border-2 border-black rounded-md h-full p-4">
            <div className="flex flex-row">
                <div className="flex flex-col text-[#255A59] w-[45%] justify-center items-center">
                    <div className="flex items-center gap-x-2 text-sm ">
                        <Person />
                        <h2>{nome.toUpperCase()}</h2>
                    </div>
                    <div className="flex flex-row gap-x-4 mt-2">
                        <div>
                            {icon}
                        </div>
                        <div className="flex flex-col items-center text-xs">
                            <p>{presenca ? "PRESENÇA" : "AUSENTE"}</p>
                        </div>
                    </div>
                </div>

                <div className="w-[10%] flex justify-center items-center">
                    <div className="h-full w-[2px] bg-gray-300"></div>
                </div>

                <div className="flex flex-col text-[#255A59] w-[45%] justify-center items-center">
                    <div className="flex items-center gap-x-2 text-sm">
                        <PersonTwoTone />
                        <p>{mediador.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-row gap-x-4 mt-2">
                        <div>
                            {icon}
                        </div>
                        <div className="flex flex-col items-center text-xs">
                            <p>MEDIADOR(A)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row mt-5 border-t-2">
                <div className="flex flex-col text-[#255A59] w-[45%] justify-center items-center mt-4">
                    <button className="flex items-center gap-x-2 text-sm p-2 justify-center bg-slate-900 text-white rounded-md">
                        Baixar PDF
                    </button>
                </div>

                <div className="w-[10%] flex justify-center items-center mt-2">
                    <div className="h-full w-[2px] bg-gray-300"></div>
                </div>

                <div className="flex flex-col text-[#255A59] w-[45%] justify-center items-center mt-4">
                    <button onClick={() => window.location.href = '/ver-sessao'} className="flex items-center gap-x-2 text-sm p-2 justify-center bg-green-950 text-white rounded-md">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    );
}