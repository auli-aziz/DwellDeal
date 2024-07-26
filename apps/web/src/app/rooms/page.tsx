"use client";

import SearchBar from "@web/components/rooms/SearchBar";
import Image from "next/image";
import React, { useState } from "react";
import buildings from "@public/assets/icons/Buildings.png";
import { RoomProvider } from "@web/contexts/RoomContext";

const Rooms = () => {
  return (
    <>
      <RoomProvider>
        <section className="w-full min-h-screen flex flex-col items-center pt-20">
          <Image src={buildings} alt="Buildings" className="mt-5" />
          <div className="flex flex-col items-center pt-5 pb-3 font-montserrat text-dark gap-2">
            <h1 className="font-bold lg:text-3xl text-2xl">Rooms</h1>
            <p className="font-regular lg:text-xl text-base text-center">
              Enter your location to display data visualization and matching
              rooms
            </p>
          </div>
          <SearchBar />
        </section>
      </RoomProvider>
    </>
  );
};

export default Rooms;
