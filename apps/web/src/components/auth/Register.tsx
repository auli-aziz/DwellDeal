import React from "react";
import Input from "../Input";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <Input title="Email" name="email" type="text" placeholder="Enter your Email" />
      <Input title="Username" name="username" type="text" placeholder="Enter your username" />
      <Input title="Password" name="password" type="password" placeholder="Enter your Password" />
      <Input title="Confirm Password" name="password" type="password" placeholder="Confirm your Password" />
    </>
  );
};

export default Register;
