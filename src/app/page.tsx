import SlideTxt from '@/components/SlideTxt';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';
import SlideImg from '../components/SlideImg';
import SlideDocumentos from '@/components/SlideDocumentos';
import SlideInfo from '@/components/SlideInfo';

export default function Home() {

  const images = [
    { image: '/assets/Capturar.png', alt: 'Imagem Principal' },
    {image: '/assets/Capturar2.png', alt: 'Imagem Principal2' },
    {image: '/assets/Capturar3.png', alt: 'Imagem Principal' },
    {image: '/assets/Capturar4.png', alt: 'Imagem Principal2' },
    {image: '/assets/Capturar5.png', alt: 'Imagem Principal' },
    {image: '/assets/Capturar6.png', alt: 'Imagem Principal2' },
    {image: '/assets/Capturar7.png', alt: 'Imagem Principal' }
  ];

  return (
    <div>
      <div className="h-[15vh] mt-2">
        <Header2 />
      </div>

      <div className="h-[50vh]">
        <SlideImg />
      </div>
    
      {/* Ajuste aqui */}
      <div className="h-[30vh] flex justify-between w-full mt-10 px-20 space-x-4">
        <div className="w-1/2 h-full">
          <SlideTxt
            title="Quem somos nós?"
            slides={[
              "Texto do Primeiro Slider 1",
              "Texto do Primeiro Slider 2",
              "Texto do Primeiro Slider 3",
              "Texto do Primeiro Slider 4 Texto do Primeiro Slider 4 Texto do Primeiro Slider 4 Texto do Primeiro Slider 4 Texto do Primeiro Slider 4 Texto do Primeiro Slider 4"
            ]}
          />
        </div>
        <div className="w-1/2 h-full">
          <SlideTxt
            title="Regras"
            slides={[
              "lorem ",
              "Texto do Segundo Slider 2",
              "Texto do Segundo Slider 3",
              "Texto do Segundo Slider 4"
            ]}
          />
        </div>
      </div>
      <div className='h-[10vh]'/>

      <div className='h-[30vh] px-20'>
        <SlideInfo 
          title={'Como funciona'} 
          slides={[
            {text1: 'Texto do Primeiro Slider 1', text2: 'Texto do Primeiro Slider 2'},
            {text1: 'Texto do Segundo Slider 1', text2: 'Texto do Segundo Slider 2'},
            {text1: 'Texto do Terceiro Slider 1', text2: 'Texto do Terceiro Slider 2'}
          ]}
        />
      </div>
      
      <div className='h-[20vh]'/>
      
      <div className='h-[30vh] pt-20 px-20'>
        <SlideDocumentos title='Documentos' images={images}/>
      </div>
      
      <div className='h-[10vh]'/>
     
      <div className="pt-20 h-[15vh]">
        <Footer />
      </div>
    </div>
  );
}
