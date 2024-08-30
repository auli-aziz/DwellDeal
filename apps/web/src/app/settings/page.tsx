import { getServerSession } from "next-auth";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AccountSettings = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  

  return (
    <div className="flex flex-col">
      <div className="flex gap-5">
        <IoPersonCircleSharp className="text-primary text-[195px]" />
        <div className="w-[600px] flex flex-col gap-3 justify-center text-dark">
          <h3 className="font-bold text-5xl">{session?.user.sub.name}</h3>
          <p className="font-thin text-xl">{session?.user.email}</p>
        </div>
      </div>
      <div className={"mt-5 p-5 w-full rounded-lg"}>
        <h3 className="font-montserrat font-bold text-dark text-xl">Account Settings</h3>
        <form method="POST" className="flex flex-col">
          <label htmlFor="">Current Password</label>
          <input type="password" className="border-2 rounded-xl" />
          <label htmlFor="">Reset Password</label>
          <input type="password" className="border-2 rounded-xl" />
          <button type="submit" className="w-[150px] p-2 mt-10 bg-secondary text-white text-lg rounded-xl">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
