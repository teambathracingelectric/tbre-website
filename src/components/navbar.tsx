"use client";

import navLinks from "@/data/navLinks";
import { cn } from "@/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// TODO: black bg and coloured logo or blue bg and white logo?

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black border-b-8 border-tbre-yellow">
      {/* <nav className="bg-tbre-blue border-b-8 border-tbre-yellow"> */}
      {/*  Logo + desktop + mobile button */}
      <div className="w-full lg:w-4/5 mx-auto flex justify-between items-center px-4">
        {/* Logo link */}
        <Link href="/">
          <Image
            src="/tbre_logo_colour.png"
            // src="/tbre_logo_white.png"
            alt="tbre logo"
            width={200}
            height={200}
            className="filter grayscale"
            // className="py-4"
          />
        </Link>

        {/* Desktop navigation menu */}
        <div className="hidden md:flex space-x-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-white uppercase text-sm font-semibold transition-all hover:text-tbre-yellow px-4 py-2 rounded-md",
                pathname === link.href && "text-tbre-yellow",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-white"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3",
          isOpen ? "block" : "hidden",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "block text-white uppercase text-sm font-semibold transition-all hover:text-tbre-yellow px-4 py-2 rounded-md",
              pathname === link.href && "text-tbre-yellow",
            )}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
