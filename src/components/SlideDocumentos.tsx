"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideDocumentosProps {
  title: string;
  images: { image: string; alt: string; nameDocument:string; }[];
}

export default function SlideDocumentos({ title, images }: SlideDocumentosProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 3, 
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 19000,
    speed: 500,
    infinite: true,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center mb-4 px-8">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${
                Math.floor(currentSlide / 3) === index ? "bg-[#137472]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <Slider {...settings} className="w-full">
        {images.map((imagens, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative w-64 h-64">
            <div className='mb-2 text-white'>{imagens.nameDocument}</div>
              <Image
                src={imagens.image}
                alt={imagens.alt}
                fill
                className="object-contain rounded-lg overflow-hidden"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}