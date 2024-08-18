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
    <div className=" pt-20 w-full h-full flex flex-col justify-center items-center">
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
        {slides.map((text, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-[#65ADAC]"
          >
            <div className="text-xl text-white text-center p-4 w-[300px] h-[200px] overflow-hidden">
              {text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
