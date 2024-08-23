
interface botaoProps {
    buttonName: string,
    handleClick: () => void,
    icone?: string
}

export default function BotaoDocumento(props: botaoProps) {

    return (
        <button onClick={props.handleClick} className='w-auto h-auto text-[#214E4D] p-2 bg-white rounded-md flex justify-center items-center border-1'>
            {props.buttonName}
            </button>
    );
    
}