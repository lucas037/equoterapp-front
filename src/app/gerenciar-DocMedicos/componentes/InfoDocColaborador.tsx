import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface InfoDocProps {
  nome: string;
  quantSessoes: number;
  handleNavigation: () => void;
  icon: React.ReactElement;
}

export default function InfoDocColaborador({ nome,icon,quantSessoes,handleNavigation }: InfoDocProps) {
  return (
    <div className="border-2 border-black rounded-md w-full h-full p-2">
      <div className="flex flex-row">
        <div className="flex flex-col text-[#255A59] w-[70%] justify-between">
          <h2>{nome.toUpperCase()}</h2>
          <div className="flex flex-row gap-x-4">
          <div>
             {icon}
            </div>
            <div className="flex flex-col items-center">
              <p>{quantSessoes}</p>
              <p>Sessões</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full border-2 border-[#4B8A89] rounded-md justify-center items-center">
          <button onClick={handleNavigation} className="w-full h-full">
            <ArrowForwardIosIcon className="text-[#4B8A89] w-[50%] h-[50%] " />
          </button>
        </div>
      </div>
    </div>
  );
}
