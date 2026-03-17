"use client";

import { NavbarLink } from "@/components/navbar-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/data/navigation";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white border-t-8 border-t-tbre-yellow">
      <div className="h-30 container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          {/* <span className="text-2xl font-bold">
            <span className="text-tbre-blue">TBRe</span>{" "}
            <span className="text-tbre-yellow">Racing</span>
          </span> */}
          <Image
            src="/tbre_logo_colour.png"
            alt="Team Bath Racing Electric (TBRe) logo"
            width={200}
            height={200}
            unoptimized
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navigation.map((link) => (
            <NavbarLink
              key={link.name}
              link={link}
              pathname={pathname}
              variant="desktop"
            />
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>TBRe</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              {navigation.map((link) => (
                <NavbarLink
                  key={link.name}
                  link={link}
                  pathname={pathname}
                  variant="mobile"
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
