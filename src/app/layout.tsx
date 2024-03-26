import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RaceCountdown from "@/components/race-countdown";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Bath Racing Electric",
  description:
    "Team Bath Racing Electric (TBRe) is a student-led Formula Student team from the University of Bath.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RaceCountdown />
        <Navbar />
        {/* <div className="min-h-screen"> */}
        {children}
        {/* </div> */}
        <Footer />
      </body>
    </html>
  );
}
