import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import React from "react";

const Home = () => {
  return (
    <div className="w-90% h-fit md:px-20 py-24 border-2">
      <section className="flex flex-wrap justify-around items-center gap-10">
        <HeroCarousel />
        <div className="">
          <div className="w-96 flex flex-col justify-center gap-5">
            <h3 className="font-roboto text-blue-900 font-bold text-4xl">
              Dwell Today!
            </h3>
            <p className="font-normal font-inter text-xl">
              Rent the best properties
              <br /> for the lowest prices
            </p>
          </div>
          <SearchBar />
        </div>
      </section>
    </div>
  );
};

export default Home;
