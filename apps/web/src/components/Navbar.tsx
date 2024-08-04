"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import ActiveLink from "./ActiveLink";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/settings")) {
    return (null);
  }

  if (pathname.endsWith("/auth")) {
    return (
      <header className="w-full h-fit py-3 px-10 absolute z-10">
        <Logo />
      </header>
    );
  }

  const handleMobileHamburger = () => {
    setIsOpen((curr) => !curr)
  }

  return (
    <>
      <header className="fixed bg-tertiary w-[97vw] h-[70px] sm:px-10 px-5 mt-2 left-1/2 transform -translate-x-1/2 z-10 rounded-full">
        <div className="h-full relative flex justify-around items-center lg:gap-x-24 md:gap-x-14">
          <Logo />
          <div
            className="sm:hidden text-2xl text-dark"
            onClick={handleMobileHamburger}
          >
            {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </div>
          <nav className={`nav-list font-shanti ${isOpen ? "top-[43px]" : "top-[-250px]"}`}>
            <ActiveLink href={"/"} onClick={handleMobileHamburger}>Home</ActiveLink>
            <ActiveLink href={"/rooms"} onClick={handleMobileHamburger}>Rooms</ActiveLink>
            <ActiveLink href={"/aboutus"} onClick={handleMobileHamburger}>About Us</ActiveLink>
            <ActiveLink href={"/favorites"} onClick={handleMobileHamburger}>Favorites</ActiveLink>
            <AuthButton />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
