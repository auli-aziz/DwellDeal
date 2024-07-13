import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoSearchOutline,
  IoPersonOutline,
  IoHeartOutline,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="w-full h-fit py-2 md:px-20 shadow-lg  ">
      <nav className="w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={"/assets/icons/logo.png"} alt="Logo" width={32} height={32} />
          <p className="font-roboto font-semibold text-black">Dwell<span className="font-bold text-blue-900">Deal</span></p>
        </Link>
          <ul className="flex gap-5">
            <li>
              <IoSearchOutline className="text-xl hover:cursor-pointer" />
            </li>
            <li>
              <IoPersonOutline className="text-xl hover:cursor-pointer" />
            </li>
            <li>
              <IoHeartOutline className="text-xl hover:cursor-pointer" />
            </li>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;
