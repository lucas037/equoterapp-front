"use client";

import SlideTxt from '@/components/SlideTxt';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SlideImg from '../components/SlideImg';
import SlideDocumentos from '@/components/SlideDocumentos';
import SlideInfo from '@/components/SlideInfo';
import { motion } from 'framer-motion';

const handleNavigation = () => {
  window.location.href = '/login'; 
};

export default function Home() {
  const images = [
    { image: '/assets/Capturar.png', alt: 'Imagem Principal', nameDocument: 'Documento1' },
    { image: '/assets/Capturar2.png', alt: 'Imagem Principal2', nameDocument: 'Documento 2' },
    { image: '/assets/Capturar3.png', alt: 'Imagem Principal', nameDocument: 'Documento 3' },
    { image: '/assets/Capturar4.png', alt: 'Imagem Principal2', nameDocument: 'Documento 4' },
    { image: '/assets/Capturar5.png', alt: 'Imagem Principal', nameDocument: 'Documento 5' },
    { image: '/assets/Capturar6.png', alt: 'Imagem Principal2', nameDocument: 'Documento 6' },
    { image: '/assets/Capturar7.png', alt: 'Imagem Principal', nameDocument: 'Documento 7' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="page-transition"
      className="flex flex-col min-h-screen"
    >
      <Header buttonName='Entrar' handleClick={handleNavigation} />

      <main className="flex-grow mt-2">
        <SlideImg />

        <section className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4 mt-20">
        <div className="lg:w-1/2 h-full flex items-center justify-center">
        <SlideTxt
      title="Quem somos nós?"
      slides={[
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        "There are many variations of passages of Lorem Ipsum available...",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      ]}
    />
          </div>
          <div className="lg:w-1/2">
          <SlideTxt
      title="Regras"
      slides={[
        "It is a long established fact that a reader will be distracted...",
        "There are many variations of passages of Lorem Ipsum available...",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
      ]}
    />
          </div>
        </section>

        <section className="flex flex-col space-y-10 lg:space-y-0 mt-10">
          <div className="px-4 lg:px-20">
          <SlideInfo
            title={'Como funciona'}
            slides={[
              { text1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..', text2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
              { text1: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', text2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
            ]}
          />
          </div>

          <div className="px-4 lg:px-20 pt-20">
            <SlideDocumentos title='Documentos' images={images} />
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
}
