"use client";

import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActiveLink from "./ActiveLink";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/auth" ? (
        <header className="fixed bg-tertiary w-[95vw] h-fit py-3 px-10 mt-5 left-1/2 transform -translate-x-1/2 z-10 rounded-full">
          <nav className="w-full flex justify-between items-center">
            <Logo width={150} height={32} />
              <ActiveLink href={"/"}>Home</ActiveLink>
              <ActiveLink href={"/rooms"}>Rooms</ActiveLink>
              <ActiveLink href={"/aboutus"}>About Us</ActiveLink>
              <ActiveLink href={"/favorites"}>Favorites</ActiveLink>
            <Link
              href={"/auth"}
              className="font-shanti py-2 w-[120px] text-sm font-regular text-white rounded-full hover:scale-105 text-center button-gradient"
            >
              Login
            </Link>
          </nav>
        </header>
      ) : (
        <header className="w-full h-fit py-3 px-10 absolute z-10">
          <Logo width={150} height={32} />
        </header>
      )}
    </>
  );
};

export default Navbar;
