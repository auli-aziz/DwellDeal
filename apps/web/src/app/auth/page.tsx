import Image from 'next/image';
import React from 'react';
import auth from "../../../public/assets/images/auth.png";
import AuthCard from '@/components/auth/AuthCard';

const Auth = () => {
  

  return (
    <div className="flex h-screen w-full">
      <section className="relative w-[1000px]">
        <Image
          alt="Authentication"
          placeholder='blur'
          quality={100}
          src={auth}
          className="w-full h-full object-cover object-right-top"
        />
      </section>
      <section className="bg-gradient-to-l from-neutral via-neutral to-transparent absolute h-screen right-0 md:w-[1000px] lg:w-[1100px] hidden sm:block">
        <div className="flex justify-end h-full w-full px-10 pb-10 pt-16">
          <AuthCard />
        </div>
      </section>
    </div>
  );
}

export default Auth;