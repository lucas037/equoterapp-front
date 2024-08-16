import Header from '@/components/Header';
import Image from 'next/image';

export default function Login() {
  return (
    <div className="h-screen w-full flex flex-col items-center">

      <Header />
      
      
      <div className='h-[calc(100%-180px)] w-[80%] opacity-50 flex border-[1px] border-black'>
        <img 
          src="/assets/adulto.png"
          alt="foto"
          className="w-auto h-full"
        />

        <div className='w-full h-auto border-[1px] border-black'>

        </div>
      </div>

    </div>
  );
}
