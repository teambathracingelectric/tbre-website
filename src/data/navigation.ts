import type { LucideIcon } from "lucide-react";
import { SparkleIcon } from "lucide-react";

export const navigation: { name: string; href: string; icon?: LucideIcon }[] = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Cars", href: "/cars" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Contact", href: "/contact" },
  // { name: "Blog", href: "/blog" },
  { name: "Crowdfunding", href: "/crowdfunding", icon: SparkleIcon },
] as const;
