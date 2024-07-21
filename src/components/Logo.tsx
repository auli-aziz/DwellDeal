import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icons/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={logo} alt="Logo" width={32} height={32} />
      <p className="font-montserrat font-medium text-primary text-xl">
        Dwell<span className="font-extrabold text-dark">Deal</span>
      </p>
    </Link>
  );
};

export default Logo;
