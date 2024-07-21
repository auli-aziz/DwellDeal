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
    <div className='w-[505px] h-[455px] border-2'>
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
            <div key={image.alt} className="relative w-full h-full">
              <Image 
                key={image.alt}
                alt={image.alt}
                src={image.imgUrl}
                width={505}
                height={505}
                className='w-full h-full object-cover'
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default HeroCarousel;