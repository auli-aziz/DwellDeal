import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ScrapeBar from "@/components/ScrapeBar";
import buildings from "../../public/assets/icons/Buildings.png";
import Image from "next/image";

const Home = async () => {
  return (
    <>
      <section className="md:px-15 py-14 flex items-center justify-center">
        <div className="flex">
          <HeroCarousel />
          <div className="w-[588px] px-[65px] flex flex-col justify-center gap-5 bg-secondary text-white rounded-r-3xl">
            <h3 className="font-montserrat font-regular text-[43px]">
              Get the best deals with{" "}
              <span className="font-bold">DwellDeal</span>!
            </h3>
            <p className="font-averia text-xl">
              Find and compare the best properties for the lowest prices from
              different websites.
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full h-fit flex flex-col items-center">
        <div className="flex flex-col items-center pt-5 pb-3 font-montserrat text-dark gap-2">
          <h1 className="font-bold text-3xl">Scrape A Webpage</h1>
          <p className="font-regular text-xl">
            Insert your link here and let us do the scraping
          </p>
        </div>
        <ScrapeBar />
        <Image src={buildings} alt="Buildings" className="mt-5" />
      </section>
      <section className="flex flex-col items-center my-10">
        <h3 className="font-montserrat font-bold text-dark text-3xl">Recent</h3>
        <div className="grid">
          
        </div>
      </section>
    </>
  );
};

export default Home;
