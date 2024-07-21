import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/logo.png";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="w-full h-fit py-3 md:px-20 shadow-lg">
      <nav className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
          />
          <p className="font-assistant font-semibold text-black">
            Dwell<span className="font-bold text-primary">Deal</span>
          </p>
        </Link>
        <button className="font-exo font-400 text-white text-base bg-gray-700 py-1 px-7 rounded-md hover:bg-gray-800">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
