"use client";

import React from 'react';
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const heroImages = [
  { imgUrl: "/assets/images/kost-1.jpg", alt: "kost-1" },
  { imgUrl: "/assets/images/apartment-1.jpg", alt: "apartment-1" },
  { imgUrl: "/assets/images/apartment-2.jpg", alt: "apartment-2" },
]

const HeroCarousel = () => {
  return (
    <div className='w-[450px] h-fit border-2'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {
          heroImages.map((image) => (
            <Image 
              key={image.alt}
              alt={image.alt}
              src={image.imgUrl}
              width={484}
              height={484}
              className='w-full h-full object-cover'
            />
          ))
        }
      </Carousel>
    </div>
  )
}

export default HeroCarousel;