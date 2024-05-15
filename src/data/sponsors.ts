export type Sponsor = {
  name: string;
  link: string;
  logo: string;
  logoHeight: number;
  logoWidth: number;
  description?: string;
  image?: string;
};

// TODO: add donations

const sponsorsData: {
  level: string;
  sponsors: Sponsor[];
}[] = [
  {
    level: "Title Sponsor",
    sponsors: [
      {
        name: "Rotork",
        link: "https://rotork.com",
        logo: "/sponsors/rotork.svg",
        logoHeight: 200,
        logoWidth: 400,
        description: `
        Rotork is a market-leading global provider of mission-critical flow control and instrumentation solutions for the industrial actuation and flow control markets, with a purpose of "Keeping the World Flowing for Future Generations".
        As our title sponsor, Rotork is providing us with a financial donation along with technical and marketing support, all contributing to the overall production of our car and TBRe's success!
        We look forward to this partnership in the 2024 season!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Diamond Sponsors",
    sponsors: [],
  },
  {
    level: "Platinum Sponsors",
    sponsors: [
      {
        name: "Mewburn Ellis",
        link: "https://mewburn.com",
        logo: "/sponsors/mewburn-ellis.webp",
        logoHeight: 100,
        logoWidth: 200,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Zuken",
        link: "https://zuken.com",
        logo: "/sponsors/zuken.svg",
        logoHeight: 100,
        logoWidth: 200,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "MPC DesignWorks",
        link: "https://mpcdesignworks.com",
        logo: "/sponsors/mpc.png",
        logoHeight: 100,
        logoWidth: 200,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Multimatic",
        link: "https://multimatic.com",
        logo: "/sponsors/multimatic.png",
        logoHeight: 100,
        logoWidth: 200,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Vector",
        link: "https://vector.com",
        logo: "/sponsors/vector.png",
        logoHeight: 100,
        logoWidth: 200,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Gold Sponsors",
    sponsors: [
      {
        name: "Babcock",
        link: "https://babcockinternational.com",
        logo: "/sponsors/babcock.svg",
        logoHeight: 100,
        logoWidth: 200,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Silver Sponsors",
    sponsors: [
      {
        name: "AB Dynamics",
        link: "https://abdynamics.com/",
        logo: "/sponsors/ab-dynamics.png",
        logoHeight: 75,
        logoWidth: 150,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Newbury Electronics",
        link: "https://newburyelectronics.co.uk/",
        logo: "/sponsors/newbury-electronics.svg",
        logoHeight: 75,
        logoWidth: 150,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Altium",
        link: "https://altium.com",
        logo: "/sponsors/altium.png",
        logoHeight: 75,
        logoWidth: 150,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Ansys",
        link: "https://ansys.com",
        logo: "/sponsors/ansys.svg",
        logoHeight: 75,
        logoWidth: 150,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Brunner",
        link: "https://brunner-uk.com",
        logo: "/sponsors/brunner.webp",
        logoHeight: 75,
        logoWidth: 150,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Bronze Sponsors",
    sponsors: [
      {
        name: "Redbull",
        link: "https://redbull.com",
        logo: "/sponsors/redbull.svg",
        logoHeight: 50,
        logoWidth: 100,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Accu",
        link: "https://accu.co.uk",
        logo: "/sponsors/accu.webp",
        logoHeight: 50,
        logoWidth: 100,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Renishaw",
        link: "https://renishaw.com",
        logo: "/sponsors/renishaw.png",
        logoHeight: 50,
        logoWidth: 100,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        name: "Get It Made",
        link: "https://get-it-made.co.uk/",
        logo: "/sponsors/get-it-made.svg",
        logoHeight: 50,
        logoWidth: 100,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Crowdfunding Sponsors",
    sponsors: [],
  },
];

export default sponsorsData;
