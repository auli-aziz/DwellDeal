import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { BsGearWideConnected } from "react-icons/bs";
import { IoLogOut, IoPersonCircleSharp } from "react-icons/io5";

const ProfileButton = () => {
  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      await signOut({ redirect: false });
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <div
      className="relative w-[185px] flex justify-center"
      onClick={() => setOpen((curr) => !curr)}
    >
      <IoPersonCircleSharp className="text-5xl text-primary" />
      {open && (
        <div className="absolute top-16 right-0 flex flex-col items-center py-5 w-[185px] bg-tertiary rounded-xl">
          <Link
            href={"/settings"}
            className="flex items-center justify-center gap-1 mb-3 py-2 w-[160px] font-shanti text-base font-semibold text-dark rounded-full text-center border-2 border-dark"
          >
            <BsGearWideConnected className="text-2xl" />
            Settings
          </Link>
          <button
            onClick={handleLogOut}
            className="flex items-center justify-center gap-1 py-2 w-[160px] font-shanti text-base font-semibold text-white rounded-full text-center button-gradient"
          >
            <IoLogOut className="text-2xl" />
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
