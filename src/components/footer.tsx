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
            <Link href={link.href} className="hover:text-tbre-yellow">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-1/3 flex justify-center">
        <Link href="/">
          <Image
            src="/tbre_logo_white.png"
            // src="/tbre_logo_colour.png"
            alt="tbre logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <ul className="w-1/3 space-x-4 flex justify-center">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-xl hover:text-tbre-yellow"
              rel="noopener noreferrer"
              target="_blank"
            >
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
