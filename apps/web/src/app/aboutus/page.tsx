import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="relative w-full h-[450px]">
        <Image
          src="/assets/images/aboutus.png"
          alt="About Us"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl text-center mt-24 font-montserrat font-extrabold">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="relative w-full h-[500px] px-4 sm:px-8 md:px-16 lg:px-28">
        <div className="p-8 mt-12 relative flex flex-col text-center font-averia">
          <span className="text-md md:text-xl">
            Use DwellDeal to find the best prices from popular online renting
            websites! By pasting a link of the list of available housing, we
            could provide you with statistical insights that help you choose the
            best room according to your necessities. Signup and save your
            favorite rooms and compare them in one platform, instead of
            switching between sites that will take up more of your time.
          </span>

          <span className="text-sm md:text-lg p-8 relative flex flex-col text-center font-averia">
            Here are a list of websites that are supported by our search engine:
          </span>

          <div className="flex justify-center space-x-8">
            <Image
              src="/assets/icons/mamikos.png"
              alt="Mamikos"
              width={50}
              height={50}
              className="text-center"
            />
            <Image
              src="/assets/icons/rukita.png"
              alt="Rukita"
              width={50}
              height={50}
              className="text-center"
            />
            <Image
              src="/assets/icons/cove.png"
              alt="Cove"
              width={50}
              height={50}
              className="text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;