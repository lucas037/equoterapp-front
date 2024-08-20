import DropdownOption from "@/app/types/DropdownOption";
import { useState } from "react";

interface InterfaceProps {
    name: string;
    width: string;
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
}

export default function Input(props: InterfaceProps) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <div className={`${props.width} text-xs flex flex-col`}>
            <div className="ml-1">{props.name}</div>
            <select
                value={props.value}
                onChange={handleChange}
                className="w-full h-[40px] border border-black p-2 rounded-lg"
            >
                {props.options?.map((option) => (
                    <option key={option.label} value={option.value}>
                        {option.label}
                    </option>
                )) || <option>Carregando...</option>}
            </select>
        </div>
    );
}
