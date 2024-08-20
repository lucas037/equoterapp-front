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
    autoplaySpeed: 9000,
    speed: 500,
    infinite: true,
    arrows: false,
    dots: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-4 lg:px-8">
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
      {slides.map((slide, index) => (
        <div key={index}>
          <div className="flex justify-between items-center space-x-4 lg:space-x-20">
            <div className="w-[45%] lg:w-[50%] h-[100px] lg:h-[200px] flex justify-center items-center bg-[#65ADAC] text-white text-sm lg:text-xl text-center p-4 lg:p-8">
              <p className="text-justify">{slide.text1}</p>
            </div>
            <div className="w-[45%] lg:w-[50%] h-[100px] lg:h-[200px] flex justify-center items-center bg-[#65ADAC] text-white text-sm lg:text-xl text-center p-4 lg:p-8">
              <p className="text-justify">{slide.text2}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
}