"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MediaProps {
    image: string;
    alt: string;
    nameDocument?: string;
}

interface SlideImgProps {
    images?: MediaProps[];
}

const SlideImg: React.FC<SlideImgProps> = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMedia, setActiveMedia] = useState<MediaProps | null>(null);
    const [modalPosition, setModalPosition] = useState({ top: 0 });

    const defaultMedia: MediaProps[] = [
        {
            image: '/assets/video1_nesa.mp4',
            alt: 'Video Principal',
            nameDocument: 'Avaliações Adicionais'
        },
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
    ];

    const mediaToShow = images?.length ? images : defaultMedia;

    const settings = {
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 19000,
        speed: 500,
        infinite: true,
        arrows: false,
        dots: true,
    };

    const isVideo = (src: string) => {
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    };

    // Abre o modal na posição do clique
    const openModal = (media: MediaProps, event: React.MouseEvent) => {
        const { clientY } = event;
        const scrollY = window.scrollY; // Quantidade de rolagem vertical
        const modalTopPosition = clientY + scrollY; // Posição Y final do modal

        setModalPosition({ top: modalTopPosition }); // Define a posição vertical do modal
        setActiveMedia(media);
        setIsOpen(true);
    };

    const closeModal = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            setIsOpen(false);
            setActiveMedia(null);
        }
    };

    return (
        <div className="w-full h-[54vh]">
            <Slider {...settings}>
                {mediaToShow.map((media, index) => (
                    <div key={index} className="h-full px-2">
                        <div
                            className="relative w-full h-[50vh] cursor-pointer"
                            onClick={(e) => openModal(media, e)} // Posição do clique
                        >
                            {isVideo(media.image) ? (
                                <video
                                    src={media.image}
                                    controls
                                    className="object-cover rounded-lg w-full h-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={media.image}
                                    alt={media.alt}
                                    layout="fill"
                                    className="object-cover rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Modal */}
            {isOpen && activeMedia && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-start"
                    onClick={closeModal} // Fecha ao clicar fora
                >
                    <div
                        className="relative w-auto h-auto max-w-full max-h-full"
                        style={{ top: modalPosition.top }} // Posiciona o modal verticalmente no local do clique e horizontalmente fixo
                    >
                        {isVideo(activeMedia.image) ? (
                            <video
                                src={activeMedia.image}
                                controls
                                className="max-w-full max-h-full object-contain"
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={activeMedia.image}
                                alt={activeMedia.alt}
                                width={800}
                                height={600}
                                className="max-w-full max-h-full object-contain"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SlideImg;