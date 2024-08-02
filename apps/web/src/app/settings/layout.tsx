import SideBar from "@web/components/settings/SideBar";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode}) {
  return (
    <div className="flex">
      <SideBar />
      <section className="flex items-center justify-center">{children}</section>
    </div>
  );
}
