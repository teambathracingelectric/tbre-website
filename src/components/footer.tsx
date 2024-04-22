import navLinks from "@/data/navLinks";
import socialLinks from "@/data/socialLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-8 border-tbre-yellow bg-black text-white p-8 w-full flex flex-col md:flex-row justify-evenly items-center gap-y-4">
      <ul className="w-1/3 space-x-4 flex justify-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="uppercase text-sm font-semibold hover:text-tbre-yellow transition-all"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-1/3 flex justify-center">
        <Link href="/">
          <Image
            src="/tbre_logo_colour.png"
            alt="tbre logo"
            width={200}
            height={200}
            className="filter grayscale hover:filter-none transition-all"
          />
        </Link>
      </div>
      <ul className="w-1/3 space-x-4 flex justify-center">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-2xl hover:text-tbre-yellow transition-all"
            >
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
