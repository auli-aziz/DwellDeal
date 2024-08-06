import { getServerSession } from "next-auth";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AccountSettings = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  

  return (
    <>
      <div className="flex gap-5">
        <IoPersonCircleSharp className="text-primary text-[195px]" />
        <div className="w-[600px] flex flex-col gap-3 justify-center text-dark">
          <h3 className="font-bold text-5xl">{session?.user.sub.name}</h3>
          <p className="font-thin text-xl">{session?.user.email}</p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default AccountSettings;
