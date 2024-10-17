"use client";

import Header from "@/components/Header";
import { useState } from "react";
import DadosColaborador from "../../types/DadosColaborador";

export default function Perfil() {
    const [modal, setModal] = useState(false);
    const [fieldToEdit, setFieldToEdit] = useState<string | null>(null);
    const [fieldValue, setFieldValue] = useState<string>("");
    const [colaborador, setColaborador] = useState<DadosColaborador>({
        nome: "MARIA JOSÉ PAULINA",
        cpf: "934.234.123-53",
        cargo: "Psicologa",
        email: "maria.jose@gmail.com",
        telefone: "915644789749",
        rua: "RUA PADRE CICERO",
        numeroCasa: "29",
        quantidadeSessoes: 10, // Exemplo de quantidade de sessões
        sexo: "",
        aniversario: "",
        bairro: "CENTRO",
        senha: ""
    });

    const handleEditClick = (field: string, value: string) => {
        setFieldToEdit(field);
        setFieldValue(value);
        setModal(true);
    };

    const handleSave = () => {
        if (fieldToEdit) {
            setColaborador((prev) => ({
                ...prev,
                [fieldToEdit]: fieldValue
            }));
        }
        setModal(false);
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header user={true} />
            <div className="w-[90%] h-[80%] flex flex-col items-center gap-4 xl:flex-row xl:justify-center mt-5">
                <div className="w-full xl:w-[600px] 2xl:w-[800px] h-full flex flex-col gap-2">
                    <div className="text-sm font-bold">DADOS DO USUÁRIO</div>
                    <div className="w-full h-full border border-1 border-black rounded-lg p-4 bg-white shadow-lg">
                        <div className="ml-4 mb-4 mt-4 flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">NOME COMPLETO</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.nome}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">CPF</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.cpf}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">BAIRRO</div>
                                <button className="text-blue-500 text-sm" onClick={() => handleEditClick("bairro", colaborador.bairro)}>Editar</button>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.bairro}</div>
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">RUA</div>
                                <button className="text-blue-500 text-sm" onClick={() => handleEditClick("rua", colaborador.rua)}>Editar</button>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.rua}</div>
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">NÚMERO DA CASA</div>
                                <button className="text-blue-500 text-sm" onClick={() => handleEditClick("numeroCasa", colaborador.numeroCasa)}>Editar</button>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.numeroCasa}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">EMAIL</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.email}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">TELEFONE</div>
                                <button className="text-blue-500 text-sm" onClick={() => handleEditClick("telefone", colaborador.telefone)}>Editar</button>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.telefone}</div>
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="text-[#8D8F8F] text-sm font-bold">QUANTIDADE DE SESSÕES</div>
                            </div>
                            <div className="text-[#255A59] font-bold">{colaborador.quantidadeSessoes}</div>
                            <br />
                            <div className="flex justify-center w-full">
                                <button className="bg-blue-500 text-white p-2 rounded-lg font-bold w-full h-full" onClick={handleSave}>Salvar Informações</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Editar {fieldToEdit}</h2>
                        <input
                            type="text"
                            value={fieldValue}
                            onChange={(e) => setFieldValue(e.target.value)}
                            className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                        />
                        <div className="flex justify-center gap-2">
                            <button className="bg-gray-300 p-2 rounded-lg" onClick={() => setModal(false)}>Cancelar</button>
                            <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={handleSave}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}