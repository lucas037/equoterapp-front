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
    { image: '/assets/Capturar.PNG', alt: 'Imagem Principal', nameDocument: 'Documento1' },
    { image: '/assets/Capturar2.PNG', alt: 'Imagem Principal2', nameDocument: 'Documento 2' },
    { image: '/assets/Capturar3.PNG', alt: 'Imagem Principal', nameDocument: 'Documento 3' },
    { image: '/assets/Capturar4.PNG', alt: 'Imagem Principal2', nameDocument: 'Documento 4' },
    { image: '/assets/Capturar5.PNG', alt: 'Imagem Principal', nameDocument: 'Documento 5' },
    { image: '/assets/Capturar6.PNG', alt: 'Imagem Principal2', nameDocument: 'Documento 6' },
    { image: '/assets/Capturar7.PNG', alt: 'Imagem Principal', nameDocument: 'Documento 7' },
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
      />


      <main className="flex-grow mt-2">
        <SlideImg />

        <section className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4 mt-20 items-stretch">
  {/* Card "Quem somos" */}
  <div className="lg:w-1/2 flex flex-col justify-center">
    <h2 className="text-xl font-bold mb-4 text-[#1f5857] text-left">Quem somos nós?</h2>
    <div className="bg-white flex-1 h-full">
      <div className="bg-gradient-to-r from-[#396e6d] via-[#4B8A89] to-[#306866] shadow-lg rounded-lg p-6 w-full h-full">
        <p className="text-white text-left">
          <strong>Somos um projeto de equoterapia da UFERSA</strong> que promove o desenvolvimento <strong>físico, emocional e social</strong> de crianças autistas através da <strong>interação terapêutica com cavalos</strong>. A equoterapia combina os <strong>movimentos rítmicos dos animais</strong> com atividades personalizadas, ajudando no fortalecimento muscular, na <strong>coordenação motora</strong> e no desenvolvimento de <strong>habilidades comunicativas e sociais</strong> das crianças.
          <br /><br />
          Além disso, o contato com os cavalos proporciona <strong>melhora na autoestima</strong>, estimula o <strong>controle emocional</strong> e promove uma sensação de <strong>autonomia e confiança</strong> para as crianças. Nossa equipe é composta por profissionais de diversas áreas, garantindo um <strong>acompanhamento multidisciplinar</strong> e um ambiente seguro e acolhedor, onde cada paciente recebe o tratamento de acordo com suas necessidades específicas.
        </p>
      </div>
    </div>
  </div>

  {/* Slide "Como Funciona" */}
  <div className="lg:w-1/2 flex flex-col justify-center">
    <h2 className="text-xl font-bold mb-4 text-[#1f5857] text-left">Como participar?</h2>
    <div className="bg-white flex-1 h-full">
      <div className="bg-gradient-to-l from-[#396e6d] via-[#4B8A89] to-[#306866] shadow-lg rounded-lg p-6 w-full h-full">
        <ul className="list-disc list-inside text-white text-left">
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
            <h2 className="text-2xl font-bold text-[#1f5857] mb-4 text-left">Regras</h2>
            <div className="bg-gradient-to-r from-[#3a5f5f] via-[#4B8A89] to-[#3a5f5f] shadow-lg rounded-lg p-6 w-full">
              <ul className="text-white grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Ser diagnosticado com Transtorno do Espectro Autista (TEA)',
                  'Estar inscrito em um programa social de assistência',
                  'Apresentar documentos médicos que comprovem o diagnóstico',
                  'Não possuir limitações físicas ou motoras severas',
                  'Ter um responsável presente durante as sessões',
                  'Concordar com os termos e condições do programa'
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
  <div className="pt-10">
    <h2 className="text-2xl font-bold text-[#1f5857] mb-6 text-left">Documentos Médicos</h2>
    <div className='bg-[#2c4a4a] rounded-lg'>
      <div className="bg-gradient-to-r from-[#3a5f5f] via-[#4B8A89] to-[#3a5f5f] shadow-lg rounded-lg p-6 w-full">
        <SlideDocumentos title='' images={images} />
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </motion.div>
  );
}
