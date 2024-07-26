import SearchBar from "@web/components/rooms/SearchBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import buildings from "../../../public/assets/icons/Buildings.png";
import useFetch from "@web/hooks/useFetch";
import Dashboard from "@web/components/rooms/dashboard/Dashboard";

const Rooms = () => {

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-20">
      <Image src={buildings} alt="Buildings" className="mt-5" />
      <div className="flex flex-col items-center pt-5 pb-3 font-montserrat text-dark gap-2">
        <h1 className="font-bold lg:text-3xl text-2xl">Rooms</h1>
        <p className="font-regular lg:text-xl text-base text-center">
            Enter your location to display corresponding rooms
          </p>
      </div>
      <SearchBar />
      <Dashboard/>
    </div>
  );
};

export default Rooms;
