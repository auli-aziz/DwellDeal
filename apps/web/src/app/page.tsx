import HeroCarousel from "@/components/HeroCarousel";
import ScrapeBar from "@/components/ScrapeBar";
import React from "react";
import buildings from "../../public/assets/icons/Buildings.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-fit">
      <section className="md:px-15 py-14 flex flex-wrap justify-around items-center gap-10 border-2">
        <HeroCarousel />
          <div className="w-[445px] flex flex-col justify-center gap-5">
            <h3 className="font-montserrat text-blue-900 text-5xl">
              Get the best deals with <span className=" font-semibold">DwellDeal</span>!
            </h3>
            <p className="font-averia text-xl">
              Find and compare the best properties for the lowest prices from different websites
            </p>
          </div>
      </section>
      <section className="w-full h-fit flex flex-col items-center">
        <ScrapeBar />
        <Image 
          src={buildings}
          alt="Buildings"
          className="w-full h-fit"
        />
      </section>
    </div>
  );
};

export default Home;
