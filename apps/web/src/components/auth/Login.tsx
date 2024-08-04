import React, { useRef, useState } from "react";
import Input from "../Input";
import Link from "next/link";
import SubmitButton from "../SubmitButton";
import { getCsrfToken, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = ({ csrfToken }: { csrfToken: any }) => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    if(result?.ok) {
      router.push("/");
    } else {
      // setError()
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full mt-5 text"
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <Input
        title="Username"
        name="username"
        type="text"
        placeholder="Enter your Username"
        ref={emailRef}
      />
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Enter your Password"
        ref={passwordRef}
      />
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
      <SubmitButton />
    </form>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default Login;
