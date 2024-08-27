'use client';

import React from 'react';

interface BotaoDocumentoProps {
    buttonName: string;
    handleClick: () => void;
    icon: React.ReactElement;
}

export default function BotaoDocumento(props: BotaoDocumentoProps) {
    return (
        <button
            onClick={props.handleClick}
            className="w-auto h-auto text-[#214E4D] p-2 bg-white rounded-md flex justify-center items-center border-2 border-black mx-auto gap-2"
        >
            <span>{props.buttonName}</span>
            <div>
            {props.icon}
            </div>
        </button>
    );
}
