"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import ProfileButton from "./ProfileButton";

const AuthButton = () => {
  const { data: session } = useSession();
  console.log({ session });
  

  if (session && session.user) {
    return (
      <ProfileButton />
    );
  }

  return (
    <Link
      href={"/api/auth/signin"}
      className="font-shanti py-2 w-[120px] text-sm font-regular text-white rounded-full hover:scale-105 text-center button-gradient"
    >
      Login
    </Link>
  );
};

export default AuthButton;
