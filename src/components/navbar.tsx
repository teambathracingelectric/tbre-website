"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/data/navigationLinks";
import { cn } from "@/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white border-t-8 border-t-tbre-yellow">
      <div className="container flex items-center justify-between px-4 mx-auto">
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
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-zinc-900 uppercase text-sm font-semibold transition-all hover:text-tbre-yellow px-4 py-2 rounded-md",
                pathname === link.href && "text-tbre-yellow",
              )}
            >
              {link.name}
            </Link>
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
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-zinc-900 uppercase text-lg font-semibold transition-all hover:text-tbre-yellow px-4 py-2 rounded-md",
                    pathname === link.href && "text-tbre-yellow",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
