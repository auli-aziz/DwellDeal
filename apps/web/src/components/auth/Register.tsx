import React, { useRef } from "react";
import Input from "../Input";
import SubmitButton from "../SubmitButton";

const Register = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmpasswordRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const res = await fetch(
      process.env.NEXT_PUBLIC_NESTJS_SERVER + "/auth/register",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef!.current!.value,
          name: nameRef!.current!.value,
          password: passwordRef!.current!.value,
          confirmpassword: confirmpasswordRef!.current!.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      alert(res.statusText);
      return;
    } else {
      alert("User Registered!");
      window.location.href = "/auth";
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col items-center w-full mt-5 text"
    >
      <Input
        title="Email"
        name="email"
        type="text"
        placeholder="Enter your Email"
        ref={emailRef}
      />
      <Input
        title="Name"
        name="name"
        type="text"
        placeholder="Enter your name"
        ref={nameRef}
      />
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Enter your Password"
        ref={passwordRef}
      />
      <Input
        title="Confirm Password"
        name="password"
        type="password"
        placeholder="Confirm your Password"
        ref={confirmpasswordRef}
      />
      <SubmitButton />
    </form>
  );
};

export default Register;
