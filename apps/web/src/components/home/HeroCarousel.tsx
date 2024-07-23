"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const slides = [
  { img: "/assets/images/kost-1.jpg", alt: "kost-1" },
  { img: "/assets/images/apartment-1.jpg", alt: "apartment-1" },
  { img: "/assets/images/apartment-2.jpg", alt: "apartment-2" },
];

const HeroCarousel = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="relative overflow-hidden lg:w-[600px] sm:w-[320px] w-[90vw] lg:h-[420px] h-[220px] border-2 md:rounded-bl-3xl md:rounded-tr-none rounded-tl-3xl rounded-tr-3xl">
      <div className="overflow-hidden">
        <div
          className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => (
            <Image
              key={s.alt}
              src={s.img}
              alt={s.alt}
              width={650}
              height={450}
              priority={true}
              className="object-cover"
            />
          ))}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 text-xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-2 h-2 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
