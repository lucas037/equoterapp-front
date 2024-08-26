import ClearIcon from '@mui/icons-material/Clear';

interface BotaoRecusarProps {
    buttonName: string;
    handleClick: () => void;
}

export default function BotaoRecusar(props: BotaoRecusarProps) {
    return (
        <button
            onClick={props.handleClick}
            className="w-full h-auto flex rounded-md overflow-hidden border-2 border-black"
        >
            <span className=" hidden md:flex bg-white w-[70%] h-full justify-center items-center text-[#7D0D06] p-2">
                {props.buttonName}
            </span>
            
            <div className="bg-[#7D0D06] w-[100%] md:w-[30%] h-full flex justify-center items-center p-2">
                <ClearIcon className="text-white" />
            </div>
        </button>
    );
}
