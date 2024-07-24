import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/logo2.png";

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <div className="w-32">
      <Link href="/" className="flex items-center gap-2 relative h-5" >
        <Image src={logo} alt="Logo" fill sizes="150px" />
      </Link>
    </div>
  );
};

export default Logo;
