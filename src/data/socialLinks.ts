import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks: { name: string; href: string; icon: IconType }[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/team-bath-racing-electric/",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/teambathracingelectric/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/TeamBathRacingElectric/",
    icon: FaFacebook,
  },
  {
    name: "XTwitter",
    href: "https://twitter.com/TeamBathRacingE/",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    href: "mailto:teambathracingelectric@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@TeamBathRacingElectric",
    icon: FaYoutube,
  },
];

export default socialLinks;
