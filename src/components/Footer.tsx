import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-white h-64 w-full flex border border-t-4">
      <div className="relative h-full flex items-center justify-center">
        {/* Círculo verde maior */}
        <div className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-gray-800 items-center justify-center z-20 ml-14 mb-16">
          {/* Círculo preto com imagem */}
          <div className="relative w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-white flex items-center justify-center z-30">
            <img 
              src="/assets/logoufersa.png" 
              alt="Logo da Ufersa" 
              className="h-[70%] w-[70%] object-contain" 
            />
          </div>
        </div>
      </div>

      <div className="relative w-full h-full bg-white text-black flex flex-col justify-between lg:pl-[25%] z-10">
        <div className="flex justify-between p-4">
          <div>
            <div className='text-[#44807E] text-2xl'>
              NESA
            </div>
            <div className='text-[#859594] text-lg'>
              Núcleo de Equoterapia do Semiárido
            </div>
          </div>
          <div className="relative z-0">
            <img src="/assets/image12.png" alt="Logo da lotus" className="h-8 mr-2" />
            <div className='text-purple-600'> &lt;lacapdevs&gt; </div>
          </div>
        </div>

        <div className="p-4 flex flex-row justify-between">
          <div className="mb-0">
            <div className='text-[#44807E] text-base'>
              Localização
            </div>
            <div className='text-black text-sm'>
              Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró/RN
            </div>
            <div className='text-black text-sm'>
              CEP: 59.625-900
            </div>
            <div className='text-black text-sm'>
              CNPJ: 24.529.265/0001-40
            </div>
          </div>
          <div className="mb-0">
            <div className='text-[#44807E] text-base'>
              REDES SOCIAIS
            </div>
            <div className='text-black text-sm flex items-center'>
              <img src="/assets/instagram.png" alt="Instagram" className="h-5 mr-2" />
              @NESA_UFERSA
            </div>
            <div className='text-black text-sm flex items-center'>
              <img src="/assets/Facebook.png" alt="Facebook" className="h-5 mr-2" />
              @NESA UFERSA
            </div>
          </div>
          <div>
            <div className='text-[#44807E] text-base'>
              CONTATO
            </div>
            <div className='text-black text-sm flex items-center'>
              <img src="/assets/vector.png" alt="Telefone" className="h-5 mr-2" />
              <div>
                +55 84 3317-8200<br />
                +55 84 3317-8200
              </div>
            </div>
            <div className='text-black text-sm flex items-center'>
              <img src="/assets/Gmail.png" alt="Email" className="h-5 mr-2" />
              nesaufersa@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}