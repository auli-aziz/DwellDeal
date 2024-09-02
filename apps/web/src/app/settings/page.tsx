import { getServerSession } from "next-auth";
import React, { useRef } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Input from "@web/components/Input";

const AccountSettings = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const newPassRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);

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
          <Input title="New Password" type="password" placeholder="" name="newpassword" ref={newPassRef} />
          <Input title="Confirm Password" type="password" placeholder="" name="confirmpassword" ref={confirmPassRef} />
          <button type="submit" className="w-[150px] p-2 mt-10 bg-secondary text-white text-lg rounded-xl">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
