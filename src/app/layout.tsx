import "@/styles/globals.css";

import EventCountdown from "@/components/event-countdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SponsorsFooterSection from "@/components/sponsors-footer-section";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { type PropsWithChildren } from "react";

// const font = Inter({ subsets: ["latin"] });
const font = Roboto({ subsets: ["latin"], weight: "500" });

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
      <body className={font.className}>
        <EventCountdown />
        <Navbar />
        {children}
        <SponsorsFooterSection />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
