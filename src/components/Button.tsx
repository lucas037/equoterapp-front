interface InterfaceProps {
    name: string,
    handleClick: () => void
}

export default function Button(props: InterfaceProps) {
    return (
        <button
        onClick={props.handleClick}
        className='bg-[#4B8A89] text-white text-xl w-[140px] h-[50px] rounded-md flex justify-center items-center'>
            {props.name}
        </button>
    )
}