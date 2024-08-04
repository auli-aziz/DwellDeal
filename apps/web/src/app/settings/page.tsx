import { getServerSession } from "next-auth";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AccountSettings = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  

  return (
    <>
      <div className="flex gap-5 border-2 border-black">
        <IoPersonCircleSharp className="text-primary text-[195px]" />
        <div className="flex flex-col justify-center border-2 border-black">
          <h3>{session?.user.sub.name}</h3>
          <p>{session?.user.email}</p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default AccountSettings;
