import HeroCarousel from "@/components/HeroCarousel";
import React from "react";

const Home = () => {
  return (
    <div className="w-90% h-fit md:px-15 py-14 border-2">
      <section className="flex flex-wrap justify-around items-center gap-10">
        <HeroCarousel />
          <div className="w-[445px] flex flex-col justify-center gap-5">
            <h3 className="font-exo  text-5xl">
              Get the best deals with <span className="text-blue-900 font-semibold">DwellDeal</span>!
            </h3>
            <p className="font-averia text-xl">
              Find and compare the best properties for the lowest prices from different websites
            </p>
          </div>
      </section>
    </div>
  );
};

export default Home;
