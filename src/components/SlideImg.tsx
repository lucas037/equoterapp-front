"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideImg() {
    interface imagesProps {
        image: string;
        alt: string;
    }

    const images: imagesProps[] = [
        {
            image: '/assets/imgPrincipal.png',
            alt: 'Imagem Principal'
        },
        {
            image: '/assets/logoufersa.png',
            alt: 'Imagem Principal 2'
        },
        {
            image: '/assets/logo.png',
            alt: 'Imagem Principal 3'
        },
    ];

    const settings = {
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        infinite: true,
        arrows: false,
        dots: true,
    };

    return (
        <div className="w-full h-[80vh] mt-5">
            <Slider {...settings}>
                {images.map((imagens, index) => (
                    <div key={index} className="h-full">
                        <div className="relative w-full h-[50vh]"> 
                            <Image
                                src={imagens.image} 
                                alt={imagens.alt}
                                fill 
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}