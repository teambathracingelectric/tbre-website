import type { NextConfig } from "next";

export default {
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      // social media redirects
      {
        source: "/linkedin",
        destination: "https://linkedin.com/company/team-bath-racing-electric",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/teambathracingelectric",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://facebook.com/TeamBathRacingElectric",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/TeamBathRacingE",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/TeamBathRacingE",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://youtube.com/@TeamBathRacingElectric",
        permanent: true,
      },
      {
        source: "/tiktok",
        destination: "https://tiktok.com/@teambathracingelectric",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination:
          "https://share-eu1.hsforms.com/1ukabeofkRfmlDApsM4k01A2dfx7i",
        permanent: true,
      },
      // old website redirects
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-cars",
        destination: "/cars",
        permanent: true,
      },
      {
        source: "/:year-car",
        destination: "/cars/:year",
        permanent: true,
      },
      {
        source: "/team-members",
        destination: "/team",
        permanent: true,
      },
    ];
  },
} satisfies NextConfig;
