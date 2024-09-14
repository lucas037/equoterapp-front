"use client";


import Footer from '../components/Footer';
import SlideImg from '../components/SlideImg';
import SlideDocumentos from '@/components/SlideDocumentos';
import { motion } from 'framer-motion';
import FuturoHeader from '@/components/FuturoHeader';

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

      <FuturoHeader buttonName='Entrar' handleClick={handleNavigation} />

      <main className="flex-grow mt-2">
        <SlideImg />

        <section className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4 mt-20">
          {/* Card "Quem somos" */}
          <div className="lg:w-1/2 h-full justify-center">
            <h2 className="text-xl font-bold mb-4 text-[#1f5857] text-left">Quem somos nós?</h2>
         
                <div className='bg-[#2c4a4a]'>
              <div className="bg-gradient-to-t from-[#4B8A89] via-[#4B8A89] to-[#4B8A89] shadow-lg rounded-lg p-6 w-full">
                <p className="text-white text-left">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              </div>

          </div>

          {/* Slide "Como Funciona" */}
          <div className="lg:w-1/2 h-full justify-center">
            <h2 className="text-xl font-bold mb-4 text-[#1f5857] text-left">Como participar?</h2>
              <div className='bg-[#2c4a4a]'>
              <div className="bg-gradient-to-t from-[#4B8A89] via-[#4B8A89] to-[#4B8A89] shadow-lg rounded-lg p-6 w-full">
                <p className="text-white text-left">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
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
                  {['It is a long established fact...', 'There are many variations...', 'Lorem Ipsum is simply...', 'Another text here...', 'It is a long established fact...', 'It is a long established fact...'].map((text, index) => (
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
            <div className='bg-[#2c4a4a]'>
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
