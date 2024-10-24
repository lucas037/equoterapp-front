import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-200 h-auto w-full flex flex-col border-teal-400 border-t-4">
      <div className="relative h-full flex items-center justify-center">
        {/* Círculo verde maior */}
        <div className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 transform translate-y-3 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-slate-300 items-center justify-center z-20 mb-16">
          {/* Círculo preto com imagem */}
          <div className="relative w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-slate-500 flex items-center justify-center z-30">
            <img
              src="/assets/logoufersa.png"
              alt="Logo da Ufersa"
              className="h-[70%] w-[70%] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full bg-slate-200 text-black flex flex-col justify-between lg:pl-[25%] z-10">
        <div className="flex flex-col lg:flex-row justify-between p-4">
          <div className="mb-4 lg:mb-0">
            <div className='text-[#44807E] text-2xl sm:text-xl'>
              NESA
            </div>
            <div className='text-[#859594] text-sm sm:text-lg'>
              Núcleo de Equoterapia do Semiárido
            </div>
          </div>
          <div className="relative z-0 justify-items-center center mb-4 lg:mb-0 lg:mr-16">
            <img src="/assets/image12.png" alt="Logo da lotus" className='' />
          </div>
        </div>

        <div className="p-4 flex flex-col lg:flex-row justify-between">
          <div className="mb-4 lg:mb-0">
            <div className='text-[#44807E] text-sm sm:text-base'>
              Localização
            </div>
            <div className='text-black text-xs sm:text-sm'>
              Av. Francisco Mota, 572, Mossoró/RN
            </div>
            <div className='text-black text-xs sm:text-sm'>
              CEP: 59.625-900
            </div>
            <div className='text-black text-xs sm:text-sm'>
              CNPJ: 24.529.265/0001-40
            </div>
          </div>
          <div className="mb-4 lg:mb-0">
            <div className='text-[#44807E] text-xs sm:text-base mb-3'>
              Redes Sociais
            </div>
            <a href="https://www.instagram.com/nesa_ufersa" target="_blank" rel="noopener noreferrer" className='text-black text-xs sm:text-sm flex items-center mb-2'>
              <img src="/assets/instagram.png" alt="Instagram" className="h-4 mr-2" />
              @nesa_ufersa
            </a>
            {/* <div className='text-black text-xs sm:text-sm flex items-center'>
              <img src="/assets/Facebook.png" alt="Facebook" className="h-4 mr-2" />
              @nesa_ufersa
            </div> */}
          </div>
          <div className='mr-0 lg:mr-20 justify-items-start ml-0 lg:ml-5'>
            <div className='text-[#44807E] text-xs sm:text-base mb-3'>
              Contatos
            </div>
            <div className='text-black text-xs sm:text-sm flex items-center mb-2'>
              <img src="/assets/tel.png" alt="Telefone" className="h-4 mr-2 text-sm" />
              <div className='text-xs sm:text-sm'>
                +55 84 3317-8200
              </div>
            </div>
            <div className='text-black text-xs sm:text-sm flex items-center mb-2'>
              <img src="/assets/Gmail.png" alt="Email" className="h-4 mr-2" />
              nesaufersa@gmail.com
            </div>
            <div className='text-black text-xs sm:text-sm flex items-center mb-2'>
              <img src="/assets/Gmail.png" alt="Email" className="h-4 mr-2" />
              hudson.palhano@ufersa.edu.br
            </div>
            <div className='text-black text-xs sm:text-sm flex items-center'>
              <img src="/assets/Gmail.png" alt="Email" className="h-4 mr-2" />
              fabriciocavalcante@ufersa.edu.br
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}