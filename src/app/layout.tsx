import "@/styles/globals.css";

import EventCountdown from "@/components/event-countdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SponsorsSection from "@/components/sponsors-section";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { PropsWithChildren } from "react";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://teambathracingelectric.com"),
  title: {
    template: "%s ~ Team Bath Racing Electric",
    default: "Team Bath Racing Electric",
  },
  description:
    "Team Bath Racing Electric (TBRe) is a student-led Formula Student team from the University of Bath.",
  keywords:
    "Team Bath Racing Electric, TBRe, Formula Student, University of Bath",
  openGraph: {
    title: "Team Bath Racing Electric",
    description:
      "Team Bath Racing Electric (TBRe) is a student-led Formula Student team from the University of Bath.",
    type: "website",
    url: "https://teambathracingelectric.com",
    images: {
      url: "/tbre_logo_colour.png",
      alt: "Team Bath Racing Electric",
    },
    locale: "en_GB",
  },
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
        <SponsorsSection />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
