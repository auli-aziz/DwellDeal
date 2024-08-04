"use client";

import React from "react";
import ActiveLink from "@web/components/ActiveLink";
import Logo from "@web/components/Logo";

const SideBar = () => {
  return (
    <section className="w-[440px] min-h-screen py-10 px-16 bg-secondary rounded-r-xl">
      <Logo />
      <ul className="flex flex-col text-xl font-montserrat gap-5 mt-20">
        <li>
          <ActiveLink href={"/settings"} onClick={() => {}}>
            Account
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={"/settings/notifications"} onClick={() => {}}>
            Notifications
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href={"/"} onClick={() => {}}>
            Home
          </ActiveLink>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
