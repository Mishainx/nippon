"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    url: '/banner-2.jpg',
    title: 'Nippon Game',
    description: 'Expertos en videojuegos',
    cta: 'Ver juegos',
    ctaLink: '#',
  },
  {
    url: '/nippon-game-ai-banner.jpg',
    title: 'Título 2',
    description: 'Descripción 2',
    cta: 'Shop Now',
    ctaLink: '#',
  },
  {
    url: '/imagen-3.jpg',
    title: 'Título 3',
    description: 'Descripción 3',
    cta: 'Contact Us',
    ctaLink: '#',
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !hovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, hovered]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHovered(false);
  };

  return (
    <div
      className="relative w-full  h-96  lg:h-96 bg-gray-900 bg-opacity-100 text-white flex items-center justify-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute lg:px-6 inset-0 flex flex-col-reverse md:flex-row items-center transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'}`}
        >
          <div className="block w-full absolute bottom-10 items-center h-fullsm:flex sm:flex-col md:opacity-100 md:bg-transparent md:relative md:top-0 md:justify-center md:w-1/2 lg:w-1/2 md:ps-8  justify-start md:items-center text-center md:text-center z-20">
            <h2 className=" text-2xl lg:text-3xl font-bold z-10">{image.title}</h2>
            <p className="pb-2 *:mt-2 text-base lg:text-lg z-20">{image.description}</p>
            <a href={image.ctaLink} className="text-xs p-2 md:text-sm sm:p-2  lg:mt-4 lg:px-4 lg:py-2 bg-red-500 text-white hover:bg-red-700 transition-colors z-10 rounded-3xl  ">{image.cta}</a>
          </div>
          {/*magen*/}
          <div className="pb-20 h-full w-full md:p-4 flex md:items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-50% via-transparent to-transparent sm:from-black sm:via-70% sm:via-white/10 sm:to-transparent z-10 md:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-10%  via-white/10 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-90% via-transparent  to-black z-10"></div>
          <div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-black md:via-50% md:via-transparent md:to-transparent md:z-10"></div>
          <div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-transparent md:via-90% md:via-transparent md:to-black md:z-10"></div>


          <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={image.title}
                fill={true}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Controles para el carrusel */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={handleNextClick}
        className=" absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8250;
      </button>

      {/* Dots para indicar posición */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
