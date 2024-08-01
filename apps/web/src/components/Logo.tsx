import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/assets/icons/logo2.png";

const Logo = () => {
  return (
    <div className="w-36">
      <Link href="/" className="flex items-center gap-2 relative h-6" >
        <Image src={logo} alt="Logo" fill sizes="150px" style={{ objectFit: "contain"}} />
      </Link>
    </div>
  );
};

export default Logo;
