import { socials } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-8 border-tbre-yellow bg-tbre-blue text-white p-8 w-full flex flex-col md:flex-row justify-evenly items-center gap-y-4">
      <div className="md:w-1/3 space-x-4 flex justify-center">
        <p className="text-sm font-semibold">
          Team Bath Racing Electric &copy; {new Date().getFullYear()}
        </p>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <Link href="/">
          <Image
            src="/tbre_logo_white.png"
            alt="tbre logo"
            width={200}
            height={200}
            className="hover:white-to-yellow"
          />
        </Link>
      </div>

      <ul className="md:w-1/3 space-x-4 flex justify-center">
        {socials.map((link) => (
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
