import React from 'react';

export default function Footer() {
  return (
    <footer className=" mt-20 bg-white text-black h-full pt-20">
      <div className="text-2xl mb-4">
        Contato e Localização
      </div>

      <div className="container mx-auto flex justify-between items-start space-x-8 px-8 md:px-16">
        <div className="flex-col items-center justify-center hidden md:flex">
          <img src="/assets/logoufersa.png" alt="LogoUfersa" className="w-32 mb-4" />
        </div>

        <div className="border-l border-gray-600 h-32 hidden md:block"></div>

        <div className="flex flex-col items-center text-center flex-1">
          <p className="mb-2">Instagram: @Nesa</p>
          <p className="mb-2">Telefone: (XX) XXXX-XXXX</p>
          <p className="mb-2">Site: www.seusite.com.br</p>
          <p>WhatsApp: (XX) XXXX-XXXX</p>
        </div>

        <div className="border-l border-gray-600 h-32 hidden md:block"></div>

        <div className="flex flex-col items-center text-center flex-1">
          <p className="mb-2">Endereço: Rua Exemplo, 123</p>
          <p>CEP: 12345-678</p>
        </div>
      </div>
    </footer>
  );
}
