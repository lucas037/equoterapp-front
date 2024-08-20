interface InterfaceProps {
    name: string,
    width: string,
    value: string,
    type?: string,
    onChange: (value: string) => void
}

export default function Input(props: InterfaceProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(event.target.value);
    };

    if (props.type === null)
        props.type = "text";
    
    return (

        <div className={`${props.width} text-sm flex flex-col`}>
            <div className='ml-1'>{props.name}</div>
            <input
            type={props.type}
            value={props.value}
            onChange={handleChange}
            className="w-[full] h-[50px] border border-black p-2 rounded-lg"
            />
        </div>
    )
}