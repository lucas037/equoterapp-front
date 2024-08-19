import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white h-52 w-full flex">
      <div className=" w-[0%] lg:w-[20%] h-[0%] lg:h-full flex items-center justify-center rounded-full bg-black">
        <img 
          src="/assets/logoufersa.png" 
          alt="Logo da Ufersa" 
          className="max-h-full max-w-full h-auto object-contain" 
        />
      </div>

      <div className="  w-[100%] lg:w-[80%] h-full bg-black text-white flex flex-col justify-between">
        <div className="flex justify-between p-4">
          <div>
            <div className='text-[#44807E] text-2xl '>
              NESA
            </div>
            <div className='text-[#859594] text-lg'>
              Núcleo de Equoterapia do Semiárido
            </div>
          </div>
          <div>
            <img src="/assets/image12.png" alt="Logo da lotus" className="h-8 mr-2" />
            <div className='text-purple-600'> &lt;lacapdevs&gt; </div>
          </div>
        </div>

        <div className="p-4 flex flex-row justify-between">
          <div className="mb-0">
            <div className='text-[#44807E] text-base'>
              Localização
            </div>
            <div className='text-white text-sm'>
              Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró/RN
            </div>
            <div className='text-white text-sm'>
              CEP: 59.625-900
            </div>
            <div className='text-white text-sm'>
              CNPJ: 24.529.265/0001-40
            </div>
          </div>
          <div className="mb-0">
            <div className='text-[#44807E] text-base'>
              REDES SOCIAIS
            </div>
            <div className='text-white text-sm flex items-center'>
              <img src="/assets/instagram.png" alt="Instagram" className="h-5 mr-2" />
              @NESA_UFERSA
            </div>
            <div className='text-white text-sm flex items-center'>
              <img src="/assets/Facebook.png" alt="Facebook" className="h-5 mr-2" />
              @NESA UFERSA
            </div>
          </div>
          <div>
            <div className='text-[#44807E] text-base'>
              CONTATO
            </div>
            <div className='text-white text-sm flex items-center'>
              <img src="/assets/vector.png" alt="Telefone" className="h-5 mr-2" />
              <div>
                +55 84 3317-8200<br />
                +55 84 3317-8200
              </div>
            </div>
            <div className='text-white text-sm flex items-center'>
              <img src="/assets/Gmail.png" alt="Email" className="h-5 mr-2" />
              nesaufersa@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
