"use client";

import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

const socialLinks: { name: string; href: string }[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/team-bath-racing-electric/",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/teambathracingelectric/",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/TeamBathRacingElectric/",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/TeamBathRacingE/",
  },
  {
    name: "X",
    href: "https://x.com/TeamBathRacingE/",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="px-8 w-full flex justify-evenly items-center">
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
      <ul className="w-1/3 space-x-8 flex justify-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "font-semibold text-white hover:text-tbre-yellow",
                pathname === link.href && "text-tbre-yellow",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="w-1/3 space-x-4 flex justify-end">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="font-semibold text-white hover:text-tbre-yellow"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
