import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/logo2.png";

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={logo} alt="Logo" width={width} height={height} />
    </Link>
  );
};

export default Logo;
