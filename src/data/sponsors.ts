export type Sponsor = {
  name: string;
  link: string;
  image: string;
  imageHeight: number;
  imageWidth: number;
};

const sponsorsData: {
  level: string;
  sponsors: Sponsor[];
}[] = [
  {
    level: "Title Sponsor",
    sponsors: [
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 200,
        imageWidth: 400,
      },
    ],
  },
  {
    level: "Diamond Sponsors",
    sponsors: [],
  },
  {
    level: "Platinum Sponsors",
    sponsors: [],
  },
  {
    level: "Gold Sponsors",
    sponsors: [
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 100,
        imageWidth: 200,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 100,
        imageWidth: 200,
      },
    ],
  },
  {
    level: "Silver Sponsors",
    sponsors: [
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
      },
    ],
  },
  {
    level: "Bronze Sponsors",
    sponsors: [
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
      },
    ],
  },
  {
    level: "Crowdfunding Sponsors",
    sponsors: [],
  },
];

export default sponsorsData;
