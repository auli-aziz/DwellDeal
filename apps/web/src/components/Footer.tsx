"use client";

import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.endsWith("/auth") || pathname.startsWith("/settings")) {
    return null;
  }

  return (
    <section className="flex flex-col gap-3 items-center bg-tertiary pt-20 pb-10">
      <Logo />
      <p className="font-montserrat">&copy; 2024 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
