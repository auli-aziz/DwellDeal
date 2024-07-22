import React from "react";
import Input from "../Input";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Input title="Username" name="username" type="text" placeholder="Enter your Username" />
      <Input title="Password" name="password" type="password" placeholder="Enter your Password" />
      <div className="flex items-center justify-between w-full mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberme"
            name="rememberme"
            value="1"
            className="mr-3"
          />
          <label className="font-montserrat font-extralight text-sm">
            Remember Me
          </label>
        </div>
        <Link href={"/"}>
          <p className="text-sm font-medium font-montserrat">
            Forgot Password?
          </p>
        </Link>
      </div>
    </>
  );
};

export default Login;
