import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-evenly gap-y-4 border-tbre-yellow border-t-8 bg-tbre-blue p-8 text-white md:flex-row">
      <div className="flex justify-center space-x-4 md:w-1/3">
        <p className="font-semibold text-sm">
          Team Bath Racing Electric &copy; {new Date().getFullYear()}
        </p>
      </div>

      <div className="flex justify-center md:w-1/3">
        <Link href="/">
          <Image
            src="/tbre_logo_white.png"
            alt="tbre logo"
            width={200}
            height={200}
            className="hover:white-to-yellow"
            unoptimized
          />
        </Link>
      </div>

      <ul className="flex justify-center space-x-4 md:w-1/3">
        {socials.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-2xl transition-all hover:text-tbre-yellow"
            >
              <link.icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
