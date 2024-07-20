import type { Metadata } from "next";
import { Telex, Exo, Mukta } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const telex = Telex({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-telex",
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "DwellDeal",
  description:
    "Track the cheapest and most comfortable boarding houses with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${telex.variable} ${exo.variable} ${mukta.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
