"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideTxtProps {
  title: string;
  slides: string[];
}

export default function SlideTxt({ title, slides }: SlideTxtProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 19000,
    speed: 500,
    infinite: true,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 lg:px-8">
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-xl lg:text-2xl">{title}</h2>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 lg:h-3 lg:w-3 rounded-full ${currentSlide === index ? "bg-[#137472]" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      <Slider {...settings} className="w-full">
        {slides.map((text, index) => (
          <div key={index} className="flex justify-center items-center bg-[#65ADAC]"> {/* Adicionei mx-4 para espaçamento horizontal */}
            <div className="text-sm lg:text-xl text-white text-center p-4 lg:p-8 w-full ">
              <p className="text-justify overflow-auto">
                {text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}