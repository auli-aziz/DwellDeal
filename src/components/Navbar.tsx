import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="w-full h-fit py-3 md:px-20 shadow-lg  ">
      <nav className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={"/assets/icons/logo.png"}
            alt="Logo"
            width={32}
            height={32}
          />
          <p className="font-mukta font-semibold text-black">
            Dwell<span className="font-bold text-blue-900">Deal</span>
          </p>
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
