import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

interface BotaoAceitarProps {
    buttonName: string;
    handleClick: () => void;
}

export default function BotaoAceitar(props: BotaoAceitarProps) {
    return (
        <button
            onClick={props.handleClick}
            className="w-full h-auto flex rounded-md overflow-hidden border-2 border-black"
        >
            <span className= " hidden md:flex bg-white w-[70%] h-full justify-center items-center text-[#196A0D] p-2">
                {props.buttonName}
            </span>
            
            <div className="bg-[#196A0D]  w-[100%] md:w-[30%] h-full flex justify-center items-center p-2">
                <DoneOutlineIcon className="text-white" />
            </div>
        </button>
    );
}
