"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideInfoProps {
  title: string;
  slides: { text1: string; text2: string }[];
}

export default function SlideInfo({ title, slides }: SlideInfoProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center mb-4 px-8">
        <h2 className="text-2xl">{title}</h2>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-[#137472]" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      <Slider {...settings} className="w-full px-8">
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-between items-center space-x-4">
            {/* Primeiro bloco de texto */}
            <div className="w-[50%] h-[100px] flex justify-center items-center bg-[#65ADAC] p-4 text-white text-xl text-center">
              {slide.text1}
            </div>
            {/* Segundo bloco de texto */}
            <div className="w-[50%] h-[100px] flex justify-center items-center bg-[#65ADAC] p-4 text-white text-xl text-center">
              {slide.text2}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
