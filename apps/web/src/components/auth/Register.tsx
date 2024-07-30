import React from "react";
import Input from "../Input";
import SubmitButton from "../SubmitButton";

const Register = () => {
  return (
    <form action="" className="flex flex-col items-center w-full mt-5 text">
      <Input
        title="Email"
        name="email"
        type="text"
        placeholder="Enter your Email"
      />
      <Input
        title="Username"
        name="username"
        type="text"
        placeholder="Enter your username"
      />
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Enter your Password"
      />
      <Input
        title="Confirm Password"
        name="password"
        type="password"
        placeholder="Confirm your Password"
      />
      <SubmitButton />
    </form>
  );
};

export default Register;
