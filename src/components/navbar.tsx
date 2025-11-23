"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/data/navigation";
import { cn } from "@/utils";
import { MenuIcon } from "lucide-react";

export function Navbar({ pathname }: { pathname: string }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white border-t-8 border-t-tbre-yellow">
      <div className="h-30 container flex items-center justify-between px-4 mx-auto">
        <a href="/" className="flex items-center space-x-2">
          {/* <span className="text-2xl font-bold">
            <span className="text-tbre-blue">TBRe</span>{" "}
            <span className="text-tbre-yellow">Racing</span>
          </span> */}
          <img
            src="/tbre_logo_colour.png"
            alt="Team Bath Racing Electric (TBRe) logo"
            width={200}
            height={200}
          />
        </a>

        <nav className="hidden gap-6 md:flex">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-zinc-900 text-sm font-semibold transition-all hover:text-tbre-yellow",
                link.href === "/"
                  ? pathname === link.href && "text-tbre-yellow"
                  : pathname.startsWith(link.href) && "text-tbre-yellow",
              )}
            >
              {link.name}
              {link.icon && <link.icon className="inline-block w-4 h-4 ml-1" />}
            </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-zinc-900 text-lg font-semibold transition-all hover:text-tbre-yellow",
                    link.href === "/"
                      ? pathname === link.href && "text-tbre-yellow"
                      : pathname.startsWith(link.href) && "text-tbre-yellow",
                  )}
                >
                  {link.name}
                  {link.icon && (
                    <link.icon className="inline-block w-5 h-5 ml-1" />
                  )}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
