interface InfoResponsavelProps {
    nome: string;
}
export default function InfoResponsavel(props: InfoResponsavelProps ) {
    return (
        <div className="w-full h-full text-white bg-[#4B8A89] text-MD flex justify-between items-center p-4 mb-4">
            <p>VERIFICAÇÃO DE DOCUMENTOS</p>
            <p>{props.nome}</p>
        </div>
    );
}