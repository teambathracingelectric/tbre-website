import "@/styles/globals.css";

import EventCountdown from "@/components/event-countdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SponsorsFooterSection from "@/components/sponsors-footer-section";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { type PropsWithChildren } from "react";

// const font = Roboto({ subsets: ["latin"], weight: "700" });
const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s ~ Team Bath Racing Electric",
    default: "Team Bath Racing Electric",
  },
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
