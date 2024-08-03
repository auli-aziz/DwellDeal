import { RoomContext } from '@web/contexts/RoomContext';
import image from 'next/image';
import React, { useContext } from 'react'

const RoomDetail = () => {
  return (
    <div className="bg-white pt-14">
      <div className="max-w-5xl mx-auto mt-8 p-4 bg-white">
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
        <p className="mt-4 text-gray-700">Jl.in aja dulu no.00 Rt.1000 Rw.1000, Kel.elahan Kec.ewa</p>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Facilities</h2>
          <div className="grid grid-cols-3 gap-4 text-center text-gray-700">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-8-8 8 8 0 0 1 8 8z"></path></svg>
              <p>Air Conditioner</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M16 3H8C5.79 3 4 4.79 4 7v10c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4z"></path></svg>
              <p>TV</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7a2 2 0 1 1 2 2 2 2 0 0 1-2-2z"></path></svg>
              <p>Shower</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20h8v2H4v-2h8v-3h-2a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-2z"></path></svg>
              <p>Laundry</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M5 2v20l7-5 7 5V2H5zm6 7h2v6h-2V9zm0-4h2v2h-2V5z"></path></svg>
              <p>Swimming Pool</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 18l4.29 4.29c.63.63 1.71.18 1.71-.71v-2.87a4.48 4.48 0 0 0-3.71-4.46V10h1.5a1 1 0 0 0 0-2H14V6.09a1 1 0 1 0-2 0V8H10.5a1 1 0 0 0 0 2H12v3.24a4.48 4.48 0 0 0-3.71 4.46v2.87c0 .89 1.08 1.34 1.71.71L12 18z"></path></svg>
              <p>Wifi</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-200 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Price</p>
              <p className="text-xl font-bold">Rpharga,00/month</p>
            </div>
            <div>
              <p className="text-gray-600">Rating</p>
              <p className="text-xl font-bold">4.3 <span className="text-gray-500">(1000)</span></p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between">
              <p className="text-gray-600">Lowest Price</p>
              <p className="text-gray-600">Rpharga,00/month</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-600">Highest Price</p>
              <p className="text-gray-600">Rpharga,00/month</p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Visit Site</a>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;