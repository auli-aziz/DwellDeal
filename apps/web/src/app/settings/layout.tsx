import SideBar from "@web/components/settings/SideBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode}) {
  return (
    <div className="flex">
      <SideBar />
      <section>{children}</section>
    </div>
  );
}
