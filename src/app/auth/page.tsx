import Image from 'next/image';
import React from 'react';
import auth from "../../../public/assets/images/auth.png";

const Auth = () => {
  

  return (
    <div className="flex h-screen w-full">
      <section className="relative w-[1000px]">
        <Image
          alt="Authentication"
          src={auth}
          className="w-full h-full object-cover object-right-top"
        />
      </section>
      <section className="flex bg-gradient-to-l from-neutral via-neutral to-transparent absolute h-screen right-0 md:w-[1000px] lg:w-[1100px]">
        <div className="flex justify-end h-full w-full px-10 pb-10 pt-16">
          <div className="w-[560px] border-2 border-black">
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Auth;