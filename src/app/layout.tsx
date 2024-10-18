import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "IB & GCSE Notes",
  description: "Notes for iGCSE and IBDP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
