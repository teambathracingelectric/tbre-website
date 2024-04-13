"use client";

import navLinks from "@/data/navLinks";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b-8 border-tbre-yellow bg-black text-white px-8 w-full flex justify-evenly items-center">
      <div className="w-1/3 flex justify-start">
        <Link href="/">
          <Image
            // src="/tbre_logo_white.png"
            src="/tbre_logo_colour.png"
            alt="tbre logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <ul className="w-1/3 space-x-2 hidden md:flex justify-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "uppercase text-sm font-semibold transition-all hover:text-tbre-yellow px-4 py-2 rounded-md border-2 border-transparent hover:border-tbre-yellow hover:bg-white/",
                pathname === link.href && "text-tbre-yellow",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
