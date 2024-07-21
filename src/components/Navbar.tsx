"use client";

import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/auth" ? (
        <header className="w-full h-fit py-3 md:px-20 shadow-lg">
          <nav className="w-full flex justify-between items-center">
            <Logo />
            <Link
              href={"/auth"}
              className="font-shanti text-sm font-regular text-white bg-primary py-1 px-7 rounded-2xl hover:scale-105"
            >
              Login
            </Link>
          </nav>
        </header>
      ) : (
        <header className="w-full h-fit py-3 md:px-20 absolute">
          <Logo />
        </header>
      )}
    </>
  );
};

export default Navbar;
