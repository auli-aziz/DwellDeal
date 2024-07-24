"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActiveLink from "./ActiveLink";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.endsWith("/auth") || pathname.startsWith("/settings")) {
    return (
      <header className="w-full h-fit py-3 px-10 absolute z-10">
        <Logo width={150} height={32} />
      </header>
    );
  }

  const handleMobileHamburger = () => {
    setIsOpen((curr) => !curr)
  }

  return (
    <>
      <header className="fixed bg-tertiary w-[97vw] h-fit py-3 sm:px-10 px-5 mt-2 left-1/2 transform -translate-x-1/2 z-10 rounded-full">
        <div className="relative flex justify-around items-center lg:gap-x-24 md:gap-x-14">
          <Logo width={120} height={32} />
          <div
            className="sm:hidden text-2xl text-dark"
            onClick={handleMobileHamburger}
          >
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </div>
          <nav className={`nav-list ${isOpen ? "top-[43px]" : "top-[-250px]"}`}>
            <ActiveLink href={"/"} onClick={handleMobileHamburger}>Home</ActiveLink>
            <ActiveLink href={"/rooms"} onClick={handleMobileHamburger}>Rooms</ActiveLink>
            <ActiveLink href={"/aboutus"} onClick={handleMobileHamburger}>About Us</ActiveLink>
            <ActiveLink href={"/favorites"} onClick={handleMobileHamburger}>Favorites</ActiveLink>
            <Link
              href={"/auth"}
              className="font-shanti py-2 w-[120px] text-sm font-regular text-white rounded-full hover:scale-105 text-center button-gradient"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
