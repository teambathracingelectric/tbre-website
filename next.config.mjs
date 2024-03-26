// @ts-check

/** @type {import("next").NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/linkedin",
        destination: "https://linkedin.com/company/team-bath-racing-electric/",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/teambathracingelectric/",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://facebook.com/TeamBathRacingElectric/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/TeamBathRacingE/",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/TeamBathRacingE/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
