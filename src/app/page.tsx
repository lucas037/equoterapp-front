"use client"

import SlideTxt from '@/components/SlideTxt';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';
import SlideImg from '../components/SlideImg';
import SlideDocumentos from '@/components/SlideDocumentos';
import SlideInfo from '@/components/SlideInfo';

export default function Home() {
  const images = [
    { image: '/assets/Capturar.png', alt: 'Imagem Principal', nameDocument: 'Documento 1' },
    { image: '/assets/Capturar2.png', alt: 'Imagem Principal2', nameDocument: 'Documento 2' },
    { image: '/assets/Capturar3.png', alt: 'Imagem Principal', nameDocument: 'Documento 3' },
    { image: '/assets/Capturar4.png', alt: 'Imagem Principal2', nameDocument: 'Documento 4' },
    { image: '/assets/Capturar5.png', alt: 'Imagem Principal', nameDocument: 'Documento 5' },
    { image: '/assets/Capturar6.png', alt: 'Imagem Principal2', nameDocument: 'Documento 6' },
    { image: '/assets/Capturar7.png', alt: 'Imagem Principal', nameDocument: 'Documento 7' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[15vh] mt-2">
        <Header2 />
      </div>

      <div className="flex-grow">
        <SlideImg />
      </div>

      <div className="flex flex-col lg:flex-row h-full justify-between w-full px-4 lg:px-20 space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="lg:w-1/2 h-full">
          <SlideTxt
            title="Quem somos nós?"
            slides={[
              "Texto do Primeiro Slider 1",
              "Texto do Primeiro Slider 2",
              "Texto do Primeiro Slider 3",
              "Texto do Primeiro Slider 4"
            ]}
          />
        </div>
        <div className="lg:w-1/2 h-full">
          <SlideTxt
            title="Regras"
            slides={[
              "lorem",
              "Texto do Segundo Slider 2",
              "Texto do Segundo Slider 3",
              "Texto do Segundo Slider 4"
            ]}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-10 lg:space-y-0">
        <div className="h-full px-4 lg:px-20">
          <SlideInfo
            title={'Como funciona'}
            slides={[
              { text1: 'Texto do Primeiro Slider 1A', text2: 'Texto do Primeiro Slider 1B' },
              { text1: 'Texto do Segundo Slider 2A', text2: 'Texto do Segundo Slider 2B' },
            ]}
          />
        </div>

        <div className="h-full px-4 lg:px-20 mt-20">
          <SlideDocumentos title='Documentos' images={images} />
        </div>
      </div>

      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
}
