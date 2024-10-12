import { useState } from 'react';
import { Botao } from './Botao';
import Button from './Button';
import { motion } from 'framer-motion';

interface InterfaceProps {
    nameFamiliar: string,
    buttonName: string,
    handleClick: () => void
}

export default function Header(props: InterfaceProps) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (

        <div className="w-[80%] h-[120px] flex justify-center mb-4 bg-[#4B8A89] rounded-md">
            <div className='w-[90%] h-[120px] flex justify-between items-center'>
                <div className='text-xl flex flex-col xl:flex xl:max-w-[100%] text-white'>
                    <div>Olá {props.nameFamiliar},</div>
                    <div>Seu pré-cadastro no sistema se encontra</div>
                </div>

                <div className='text-xl flex flex-col xl:flex xl:max-w-[100%] text-white relative'>
                    <Botao className={`w-[180px] h-[70px] rounded-md flex justify-center items-center ${props.buttonName === 'Aprovado' ? 'bg-white text-teal-600 font-extrabold hover:bg-teal-500 hover:text-white' : props.buttonName === 'Reprovado' ? 'bg-white text-red-800 font-extrabold hover:bg-red-600 hover:text-white' : 'bg-white text-[#4B8A89] font-extrabold hover:bg-teal-800 hover:text-white'} `}>
                        {props.buttonName}
                    </Botao>
                    <div
                        className='w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center cursor-pointer shadow-lg absolute top-10 left-36'
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <span className='text-white font-bold text-lg'>i</span>
                    </div>

                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className='absolute bottom-12 right-0 transform translate-x-full w-max max-w-xs bg-teal-500 text-white p-3 rounded-md shadow-lg z-10'
                            style={{ whiteSpace: 'normal', overflowWrap: 'break-word' }}
                        >
                            <p className='text-sm leading-tight'>
                                {props.buttonName === 'Aprovado' ?
                                    'Isso significa que seu cadastro foi aprovado e você já pode concluir seu cadastro no sistema.' :
                                    props.buttonName === 'Reprovado' ?
                                        'Isso significa que seu cadastro foi reprovado. Por favor, entre em contato com o suporte para mais informações.' :
                                        'Seu cadastro ainda não foi aprovado. Por favor, aguarde a aprovação para concluir seu cadastro no sistema.'
                                }
                            </p>
                        </motion.div>
                    )}

                </div>


            </div>

        </div>
    )
}