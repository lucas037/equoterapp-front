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
            image: '/assets/imgEquoterapia.webp',
            alt: 'Imagem Principal'
        },
        {
            image: '/assets/imgPrincipal.png',
            alt: 'Imagem Principal 2'
        },
        {
            image: '/assets/imgEquoterapia2.png',
            alt: 'Imagem Principal 3'
        },
        {
            image: '/assets/imgEquoterapia3.png',
            alt: 'Imagem Principal 4'
        },
        {
            image: '/assets/imgEquoterapia4.png',
            alt: 'Imagem Principal 5'
        },
    ];

    const settings = {
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 500,
        infinite: true,
        arrows: false,
        dots: true,
    };

    return (
        <div className="w-full h-[50vh] mt-5">
            <Slider {...settings}>
                {images.map((imagens, index) => (
                    <div key={index} className="h-full px-2"> {/* Adiciona espaço entre as imagens */}
                        <div className="relative w-full h-[50vh]"> 
                            <Image
                                src={imagens.image} 
                                alt={imagens.alt}
                                fill 
                                className="object-cover rounded-lg" // Alterado para object-cover
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}