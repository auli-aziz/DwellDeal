"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.email}</p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
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
