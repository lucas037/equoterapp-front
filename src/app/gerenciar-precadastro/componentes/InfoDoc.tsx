import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface InfoDocProps {
  nome: string;
  nMembros: number;
  rendaM: number;
  handleNavigation: () => void;
}

export default function InfoDoc({ nome, nMembros, rendaM, handleNavigation }: InfoDocProps) {
  return (
    <div className="border-2 border-black rounded-md w-full h-full p-2">
      <div className="flex flex-row">
        <div className="flex flex-col text-[#255A59] w-[70%] justify-between">
          <h2>{nome.toUpperCase()}</h2>
          <div className="flex flex-row gap-x-4">
            {/* Coluna de número de membros */}
            <div className="flex flex-col items-center">
              <p>{nMembros}</p>
              <p>membros</p>
            </div>
            {/* Coluna de renda mensal */}
            <div className="flex flex-col items-center">
              <p>R${rendaM}</p>
              <p>renda mensal</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-full border-2 border-[#255A59] p-2">
          <button onClick={handleNavigation}>
            <ArrowForwardIosIcon className="text-[#255A59] h-full w-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
