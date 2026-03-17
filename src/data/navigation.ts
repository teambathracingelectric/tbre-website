import type { LucideIcon } from "lucide-react";
import { SparkleIcon } from "lucide-react";

export type NavigationLink = {
  name: string;
  href: string;
  icon?: LucideIcon;
  external?: boolean;
};

export const navigation: NavigationLink[] = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Recruitment", href: "/recruitment", icon: SparkleIcon },
  { name: "Cars", href: "/cars" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Contact", href: "/contact" },
  // { name: "Blog", href: "/blog" },
  { name: "Crowdfunding", href: "/crowdfunding", icon: SparkleIcon },
  {
    name: "Newsletter",
    href: "https://share-eu1.hsforms.com/1ukabeofkRfmlDApsM4k01A2dfx7i",
    external: true,
  },
] as const;
