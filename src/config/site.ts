export const SITE_URL = "https://teambathracingelectric.com";

export const ACTIVE_SEASON = 2026;

export const APPLY_FORM_URL =
  "https://forms.office.com/Pages/ResponsePage.aspx?id=Ij1-N6FOLUKwrY_MiUBrnuaHFEKzAxRImIds5xrI0glUOEhZSVQ4OUhQUFJYMFdESVgyQzY2TDNWSC4u";

export const SPONSORSHIP_PROSPECTUS_URL =
  "https://drive.google.com/file/d/1oTeHoMViRoouj5Zl5DmZSOH-BuBCpAAd/view";

export const CROWDFUNDING_URL =
  "https://www.crowdfunder.co.uk/p/team-bath-racing-electric-2026-1";

export const CROWDFUNDING_VIDEO_URL =
  "https://drive.google.com/file/d/1sMVqW0zc0rLuVHism1pvRp4gWXs0-rpI/preview";

export const SOCIAL_URLS = {
  email: "mailto:tbre@bath.ac.uk",
  facebook: "https://facebook.com/TeamBathRacingElectric",
  instagram: "https://instagram.com/teambathracingelectric",
  linkedin: "https://linkedin.com/company/team-bath-racing-electric",
  newsletter: "https://share-eu1.hsforms.com/1ukabeofkRfmlDApsM4k01A2dfx7i",
  tiktok: "https://tiktok.com/@teambathracingelectric",
  twitter: "https://twitter.com/TeamBathRacingE",
  x: "https://x.com/TeamBathRacingE",
  youtube: "https://youtube.com/@TeamBathRacingElectric",
} as const;

type NavigationLink = {
  name: string;
  href: string;
  icon?: "Sparkles";
};

export const navigation: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Recruitment", href: "/recruitment", icon: "Sparkles" },
  { name: "Cars", href: "/cars" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Gallery", href: "/gallery" },
  { name: "Crowdfunding", href: "/crowdfunding", icon: "Sparkles" },
  { name: "Newsletter", href: SOCIAL_URLS.newsletter },
] as const;

export const socials = [
  {
    name: "LinkedIn",
    href: SOCIAL_URLS.linkedin,
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: SOCIAL_URLS.instagram,
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: SOCIAL_URLS.facebook,
    icon: "facebook",
  },
  {
    name: "X",
    href: SOCIAL_URLS.x,
    icon: "x",
  },
  {
    name: "Email",
    href: SOCIAL_URLS.email,
    icon: "mail",
  },
  {
    name: "YouTube",
    href: SOCIAL_URLS.youtube,
    icon: "youtube",
  },
  {
    name: "TikTok",
    href: SOCIAL_URLS.tiktok,
    icon: "music",
  },
  {
    name: "Newsletter",
    href: SOCIAL_URLS.newsletter,
    icon: "newspaper",
  },
] as const;

export const socialRedirects = {
  "/facebook": SOCIAL_URLS.facebook,
  "/instagram": SOCIAL_URLS.instagram,
  "/linkedin": SOCIAL_URLS.linkedin,
  "/newsletter": SOCIAL_URLS.newsletter,
  "/tiktok": SOCIAL_URLS.tiktok,
  "/twitter": SOCIAL_URLS.twitter,
  "/x": SOCIAL_URLS.x,
  "/youtube": SOCIAL_URLS.youtube,
} as const;
