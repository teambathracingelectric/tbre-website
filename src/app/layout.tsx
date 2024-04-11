import "@/styles/globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RaceCountdown from "@/components/race-countdown";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Bath Racing Electric",
  description:
    "Team Bath Racing Electric (TBRe) is a student-led Formula Student team from the University of Bath.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <RaceCountdown />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
