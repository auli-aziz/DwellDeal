import { RoomContext } from '@web/contexts/RoomContext';
import image from 'next/image';
import React, { useContext } from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const RoomDetail = () => {
  return (
    <div className="bg-white pt-14">
      <div className="max-w-5xl mx-auto mt-8 p-4 bg-white font-montserrat text-dark">
        <h1 className="text-3xl font-bold text-center mb-4">Kos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="room.jpg" alt="Main Room" className="w-full h-auto rounded-lg mb-4" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="bedroom.jpg" alt="Bedroom" className="w-full h-auto rounded-lg" />
            <img src="bathroom.jpg" alt="Bathroom" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <h1 className="mt-4 text-dark font-shanti font-bold">Jl.in aja dulu no.00 Rt.1000 Rw.1000, Kel.elahan Kec.ewa</h1>
        <div className="mt-4 bg-gray-200 p-4 rounded-lg bg-neutral">
          <div className="flex-col justify-between items-center">
            <div className="mb-4">
              <div className="flex flex-row items-center">
                <MonetizationOnIcon className="w-8 h-8 mb-2 mr-2" />
                <p className="text-gray-600 font-bold">Price</p>
              </div>
              <p className="text-xl font-averia font-semibold">Rpharga,00/month</p>
            </div>
            <div className="mb-4">
              <div className="flex flex-row items-center">
                <StarIcon className="w-8 h-8 mb-2 mr-2" />
                <p className="text-gray-600 font-bold">Rating</p>
              </div>
              <p className="text-xl font-averia font-semibold">4.3 <span className="text-gray-500">(1000)</span></p>
            </div>
            <div className="mb-4">
              <div className="flex flex-row items-center">
                <SouthWestIcon className="w-8 h-8 mb-2 mr-2" />
                <p className="text-gray-600 font-bold">Lowest Price</p>
              </div>
              <p className="text-xl font-averia font-semibold">Rpharga,00/month</p>
            </div>
            <div className="mb-4">
              <div className="flex flex-row items-center">
                <NorthEastIcon className="w-8 h-8 mb-2 mr-2" />
                <p className="text-gray-600 font-bold">Highest Price</p>
              </div>
              <p className="text-xl font-averia font-semibold">Rpharga,00/month</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="items-center inline-block border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white">
            <OpenInNewIcon className="w-5 h-5 mb-2 mr-2" />
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;