"use client";


import Footer from '../components/Footer';
import SlideImg from '../components/SlideImg';
import SlideDocumentos from '@/components/SlideDocumentos';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const handleNavigation = () => {
  window.location.href = '/login';
};

export default function Home() {
  const images = [
    { image: '/assets/Capturar.PNG', alt: 'Imagem Principal', nameDocument: 'Avaliações Adicionais' },
    { image: '/assets/Capturar2.PNG', alt: 'Imagem Principal2', nameDocument: 'Avaliação Complementar' },
    { image: '/assets/Capturar3.PNG', alt: 'Imagem Principal', nameDocument: 'Termo de Fisiológica' },
    { image: '/assets/Capturar4.PNG', alt: 'Imagem Principal2', nameDocument: 'Avaliação Fonaudiologa' },
    { image: '/assets/Capturar5.PNG', alt: 'Imagem Principal', nameDocument: 'Avaliação Médica' },
    { image: '/assets/Capturar6.PNG', alt: 'Imagem Principal2', nameDocument: 'Avaliação Psicológica' },
    { image: '/assets/Capturar7.PNG', alt: 'Imagem Principal', nameDocument: 'Esclarecimentos Importantes' },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}

    >

      <Header
        userNotLogged={true}
        buttonExtraName='Entrar'
        routeExtra='/login'
        routeLogo='/'
      />


      <main className="flex-grow mt-2">
        <SlideImg />

        <section className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4 mt-20 items-stretch">
          {/* Card "Quem somos" */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4 text-[#1f5857] text-left">Equipe de trabalho</h2>
            <div className="bg-white flex-1 h-full">
              <div className="bg-gradient-to-r from-[#396e6d] via-[#4B8A89] to-[#306866] shadow-lg rounded-lg p-6 w-full h-full">
                <p className="text-white text-left">

                  <strong>Núcleo de Equoterapia do Semiárido</strong> (NESA) é um projeto da Universidade Federal Rural do Semi-Árido (UFERSA) localizado em Mossoró, Rio Grande do Norte. O objetivo principal do NESA é oferecer tratamento de equoterapia para pessoas com deficiência, especialmente crianças com <strong>Transtorno do Espectro Autista</strong> (TEA), utilizando o cavalo como ferramenta terapêutica. Além da equoterapia, o NESA também visa <strong>promover o hipismo como esporte, buscando fomentar o desenvolvimento físico, emocional e cognitivo dos praticantes.</strong>
                  <br /><br />
                  O Nesa contará com uma <strong>equipe multidisciplinar</strong>, com a participação de Médico Humano, Médico Veterinário, Psicólogo, Pedagogo, Assistente Social, Fisioterapeuta, Profissional de Equitação, Terapeuta Ocupacional, Equipe Administrativa, dentre outros profissionais necessários para a gestão e o funcionamento.

                  <br /><br />
                  Além disso, o contato com os cavalos proporciona <strong>melhora na autoestima</strong>, estimula o <strong>controle emocional</strong> e promove uma sensação de <strong>autonomia e confiança</strong> para as crianças. Nossa equipe é composta por profissionais de diversas áreas, garantindo um <strong>acompanhamento multidisciplinar</strong> e um ambiente seguro e acolhedor, onde cada paciente recebe o tratamento de acordo com suas necessidades específicas.
                </p>
              </div>
            </div>
          </div>

          {/* Slide "Como Funciona" */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4 text-[#1f5857] text-left">Público a ser atendido</h2>
            <div className="bg-white flex-1 h-full">
              <div className="bg-gradient-to-l from-[#396e6d] via-[#4B8A89] to-[#306866] shadow-lg rounded-lg p-6 w-full h-full">
                <ul className="list-disc list-inside text-white text-left">

                  As pessoas com deficiência (PCDs), cuja condição de saúde seja indicada para a prática da equoterapia, enquanto um procedimento terapêutico capaz de minimizar sua convalescência, ou melhorar o seu estado clínico. <strong> Neste espectro de possíveis praticantes da equoterapia, inclui crianças autistas, com paralisia cerebral, síndrome de down e idosos que sofreram acidente vascular cerebral</strong> (AVC).
                  <br /><br />
                  <li>
                    <strong>Pré-cadastro:</strong> O primeiro passo é realizar um pré-cadastro, onde são fornecidas informações básicas sobre o paciente. Isso pode ser feito online ou presencialmente, dependendo do processo estabelecido pelo projeto.
                  </li>
                  <br />
                  <li>
                    <strong>Aguardar aprovação:</strong> Após o envio do pré-cadastro, a equipe do projeto irá revisar as informações e, com base nos critérios de admissão, entrará em contato para informar se o paciente foi aprovado para participar.
                  </li>
                  <br />
                  <li>
                    <strong>Envio de documentos médicos:</strong> Uma vez aprovado, o responsável deve enviar documentos médicos que comprovem o diagnóstico do paciente e atestem sua aptidão para a prática da equoterapia, garantindo que ele possa participar das atividades com segurança.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4 mt-10">
          {/* Seção "Regras" aprimorada */}
          <div className="w-full h-full items-center justify-center">
            <h2 className="text-2xl font-bold text-[#1f5857] mb-4 text-left">Missão</h2>
            <div className="bg-gradient-to-r from-[#3a5f5f] via-[#4B8A89] to-[#3a5f5f] shadow-lg rounded-lg p-6 w-full">
              <ul className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Oferecer à população de Mossoró/RN e região um tratamento de alta qualidade em equoterapia.',
                  'Fomentar a prática do hipismo por também ser dotado de enorme potencial para o desenvolvimento cognitivo, físico e emocional de seus praticantes.',
                  'Promover a inclusão social e a melhoria da qualidade de vida de pessoas com deficiência e/ou com necessidades especiais.',
                  'Contribuir para o desenvolvimento de pesquisas científicas na área da equoterapia e do hipismo.',
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4 mt-10">
          {/* Seção "Regras" aprimorada */}
          <div className="w-full h-full items-center justify-center">
            <h2 className="text-2xl font-bold text-[#1f5857] mb-4 text-left">Objetivos</h2>
            <div className="bg-gradient-to-r from-[#3a5f5f] via-[#4B8A89] to-[#3a5f5f] shadow-lg rounded-lg p-6 w-full">
              <ul className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Promover na Universidade Federal Rural do Semi-Árido a prática da Equoterapia que é um método terapêutico que utiliza o cavalo dentro de uma abordagem interdisciplinar nas áreas de saúde, educação e equitação, buscando o desenvolvimento biopsicossocial de pessoas com deficiência e/ou com necessidades especiais.',
                  'Oferecer tratamento de equoterapia para pessoas com deficiência, especialmente crianças com Transtorno do Espectro Autista (TEA), utilizando o cavalo como método terapêutico e promover o hipismo como esporte, buscando fomentar o desenvolvimento físico, emocional e cognitivo dos praticantes.',
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col space-y-10 lg:space-y-0 px-4 lg:px-20 mb-10">
          <div className="pt-10 h-full">
            <h2 className="text-2xl font-bold text-[#1f5857] mb-6 text-left">Fotos e vídeos</h2>
            <div className='bg-[#2c4a4a] rounded-lg h-full h-[200px]'>
              <div className="bg-gradient-to-r from-[#3a5f5f] via-[#4B8A89] to-[#3a5f5f] shadow-lg rounded-lg p-6 w-full h-full">
          <SlideDocumentos title='' images={[]} />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="flex flex-col space-y-10 lg:space-y-0 px-4 lg:px-20 mb-10">
          <div className="pt-10">
            <h2 className="text-2xl font-bold text-[#1f5857] mb-6 text-left">Documentos Médicos</h2>
            <div className='bg-[#2c4a4a] rounded-lg'>
              <div className="bg-gradient-to-r from-[#3a5f5f] via-[#4B8A89] to-[#3a5f5f] shadow-lg rounded-lg p-6 w-full">
                <SlideDocumentos title='' images={images} />
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </motion.div>
  );
}
