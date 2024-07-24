import React from "react";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import mamikos from "../../../public/assets/icons/mamikos.png";
import rukita from "../../../public/assets/icons/rukita.png";
import cove from "../../../public/assets/icons/cove.png";
import WebsiteLogo from "./WebsiteLogo";

const Hero = () => {
  return (
    <section className="md:px-15 py-14 flex items-center justify-center">
      <div className="flex md:flex-row flex-col">
        <HeroCarousel />
        <div className="lg:w-[588px] sm:w-[360px] w-[90vw] lg:px-[65px] px-[35px] sm:py-0 py-8 flex flex-col justify-center lg:gap-5 gap-2 bg-secondary text-white sm:rounded-tr-3xl sm:rounded-br-3xl sm:rounded-bl-none rounded-bl-3xl rounded-br-3xl ">
          <h3 className="font-montserrat font-regular lg:text-[43px] text-[30px]">
            Get the best deals with <span className="font-bold">DwellDeal</span>
            !
          </h3>
          <p className="font-averia lg:text-xl text-sm">
            Find and compare the best properties for the lowest prices from
            different websites.
          </p>
          <div className="flex lg:gap-7 gap-3">
            <div className="website-logo">
              <WebsiteLogo website={mamikos} href="https://mamikos.com/" />
            </div>
            <div className="website-logo">
              <WebsiteLogo website={rukita} href="https://www.rukita.co/" />
            </div>
            <div className="website-logo">
              <WebsiteLogo website={cove} href="https://cove.id/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
