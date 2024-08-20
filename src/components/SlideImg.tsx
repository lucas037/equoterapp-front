"use client";
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
        centerPadding: '15%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 40000,
        speed: 500,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '5%',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '0%', 
                }
            }
        ]
    };

    return (
        <div className="w-full h-[80vh] mt-5">
            <Slider {...settings}>
                {images.map((imagens, index) => (
                    <div key={index} className="h-full flex justify-center items-center">
                        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
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
