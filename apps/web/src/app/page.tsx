import React from "react";
import ScrapeBar from "@/components/home/ScrapeBar";
import buildings from "../../public/assets/icons/Buildings.png";
import Image from "next/image";
import Hero from "@web/components/home/Hero";
import Recents from "@web/components/home/Recents";

const Home = async () => {
  return (
    <div className="px-3 pt-14">
      <Hero />
      <section className="relative w-full h-fit flex flex-col items-center">
        <div className="flex flex-col items-center pt-5 pb-3 font-montserrat text-dark gap-2">
          <h1 className="font-bold lg:text-3xl text-2xl">Scrape A Webpage</h1>
          <p className="font-regular lg:text-xl text-base text-center">
            Insert your link here and let us do the scraping
          </p>
        </div>
        <ScrapeBar />
        <Image src={buildings} alt="Buildings" className="mt-5" />
      </section>
      <Recents />
    </div>
  );
};

export default Home;
