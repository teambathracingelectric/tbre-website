import type { NavigationLink } from "@/data/navigation";
import { cn } from "@/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

type NavbarLinkVariant = "desktop" | "mobile";

const navbarLinkStyles = {
  desktop: {
    linkClassName:
      "inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 transition-all hover:text-tbre-yellow",
    iconClassName: "h-4 w-4",
  },
  mobile: {
    linkClassName:
      "inline-flex items-center gap-1 text-lg font-semibold text-zinc-900 transition-all hover:text-tbre-yellow",
    iconClassName: "h-5 w-5",
  },
} satisfies Record<
  NavbarLinkVariant,
  { linkClassName: string; iconClassName: string }
>;

function getNavLinkClassName(
  href: string,
  pathname: string,
  external: boolean | undefined,
  baseClassName: string,
) {
  const isActive =
    !external && (href === "/" ? pathname === href : pathname.startsWith(href));

  return cn(baseClassName, isActive && "text-tbre-yellow");
}

type NavbarLinkProps = {
  link: NavigationLink;
  pathname: string;
  variant: NavbarLinkVariant;
};

export function NavbarLink({ link, pathname, variant }: NavbarLinkProps) {
  const { linkClassName, iconClassName } = navbarLinkStyles[variant];
  const content = (
    <>
      <span>{link.name}</span>
      {link.icon && <link.icon className={iconClassName} />}
      {link.external && <ExternalLinkIcon className={iconClassName} />}
    </>
  );

  const className = getNavLinkClassName(
    link.href,
    pathname,
    link.external,
    linkClassName,
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}
