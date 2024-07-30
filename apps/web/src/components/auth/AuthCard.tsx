"use client";

import React, { useState } from "react";
import Login from "./Login";
import SelectAuthButton from "./SelectAuthButton";
import Register from "./Register";

const AuthCard = () => {
  const [selected, setSelected] = useState<string>("Login");

  const handleSelected = (selected: string) => {
    setSelected(selected);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[560px] px-6">
      <h3 className="font-montserrat font-bold text-dark text-3xl">
        {selected === "Login" ? "Welcome Back!" : "Welcome to DwellDeal"}
      </h3>
      <div className="flex w-fit h-fit font-shanti rounded-3xl gap-3 p-2 mt-8 bg-tertiary">
        <SelectAuthButton
          handleSelected={handleSelected}
          isSelected={selected === "Login"}
        >
          Login
        </SelectAuthButton>
        <SelectAuthButton
          handleSelected={handleSelected}
          isSelected={selected === "Register"}
        >
          Register
        </SelectAuthButton>
      </div>
      {selected === "Login" ? <Login /> : <Register />}
    </div>
  );
};

export default AuthCard;
