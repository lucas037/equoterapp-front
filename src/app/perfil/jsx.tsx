import React from 'react';
import { jsPDF } from 'jspdf';
import Image from 'next/image';
import DadosColaborador from '../types/DadosColaborador';
import SessaoPorMes from '../types/SessaoPorMes';

interface InterfaceProps {
    colaborador: DadosColaborador,
    sessoes: SessaoPorMes[]
}

const DownloadPdfComponent = (props: InterfaceProps) => {


    const downloadPdf = () => {
        function adicionarY(y: number, adicionar: number) {
            const margemSuperior = 10;
            const margemInferior = 280;
            
            if (y + adicionar > margemInferior) {
                doc.addPage();
                return margemSuperior;
            }

            return y + adicionar;
        }

        const doc = new jsPDF();

        let y = 10;
        let espaco = 6;

        doc.setFont("times_new_roman", "bold");
        doc.setFontSize(16);
        doc.text("Dados Colaborador", 10, y);
        y = adicionarY(y, 8);

        doc.setFont("times_new_roman", "normal");
        doc.setFontSize(12);
        doc.text("Nome: "+props.colaborador.nome, 10, y);
        y = adicionarY(y, espaco);

        doc.text("CPF: "+props.colaborador.cpf, 10, y);
        y = adicionarY(y, espaco);

        doc.text("Cargo: "+props.colaborador.cargo, 10, y);
        y = adicionarY(y, espaco);

        doc.text("Endereço: "+props.colaborador.bairro+", "+props.colaborador.rua+", "+props.colaborador.numeroCasa, 10, y);
        y = adicionarY(y, espaco);

        doc.text("Email: "+props.colaborador.email, 10, y);
        y = adicionarY(y, espaco);

        doc.text("Telefone: "+props.colaborador.telefone, 10, y);
        y = adicionarY(y, espaco);

        doc.text("Quantidade de Sessões: "+props.colaborador.quantidadeSessoes, 10, y);
        y = adicionarY(y, 16);





        doc.setFont("times_new_roman", "bold");
        doc.setFontSize(16);
        doc.text("Sessões", 10, y);
        y = adicionarY(y, 8);

        doc.setFont("times_new_roman", "normal");
        doc.setFontSize(12);

        let numSessao = 1;
        for (let i = 0; i < props.sessoes.length; i++) {
            for (let j = 0; j < props.sessoes[i].sessoes.length; j++) {

                doc.text("Sessão: "+props.sessoes[i].sessoes[j].sessao+", "+props.sessoes[i].sessoes[j].turma+" ("+props.sessoes[i].sessoes[j].data+")", 10, y);
                y = adicionarY(y, espaco);
                numSessao++;
                
                doc.text("Cavalo: "+props.sessoes[i].sessoes[j].cavalo, 10, y);
                y = adicionarY(y, espaco);

                doc.text("Paciente: "+props.sessoes[i].sessoes[j].paciente, 10, y);
                y = adicionarY(y, espaco);

                doc.text("Paciente Presente: "+props.sessoes[i].sessoes[j].presenca, 10, y);
                y = adicionarY(y, espaco);

                doc.text("Guia: "+props.sessoes[i].sessoes[j].guia, 10, y);
                y = adicionarY(y, espaco);

                doc.text("Mediador: "+props.sessoes[i].sessoes[j].mediador, 10, y);
                y = adicionarY(y, espaco);

                doc.text("Arreamento: "+props.sessoes[i].sessoes[j].arreamento, 10, y);
                y = adicionarY(y, espaco);


                y = adicionarY(y, 12);

            }
        }


        doc.save("Relatório do Colaborador.pdf");
    };

  return (
    <button
      onClick={downloadPdf}
      className="w-[150px] h-[40px] border border-black flex justify-around items-center rounded-lg cursor-pointer"
    >
      <Image
        src="/assets/svg/add-button.svg"
        alt=""
        width={1}
        height={1}
        className="h-[24px] w-[24px]"
      />
      <div className="font-bold text-sm">BAIXAR PDF</div>
    </button>
  );
};

export default DownloadPdfComponent;
