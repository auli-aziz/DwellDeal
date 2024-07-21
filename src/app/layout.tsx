import type { Metadata } from "next";
import { Montserrat, Averia_Libre, Shanti } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const averia = Averia_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
});

const shanti = Shanti({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shanti",
});

export const metadata: Metadata = {
  title: "DwellDeal",
  description:
    "Track the cheapest and most comfortable boarding houses with ease from multiple websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${averia.variable} ${shanti.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
