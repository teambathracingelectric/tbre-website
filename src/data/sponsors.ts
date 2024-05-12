export type Sponsor = {
  name: string;
  link: string;
  image: string;
  imageHeight: number;
  imageWidth: number;
  description?: string;
  imageOther?: string;
};

// TODO: get list of sponsors

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
        description: `
          Team Bath Racing Electric (TBRe) is a student-led electric racing team
          based at the University of Bath. We design, build, and race an electric
          single-seater racing car to compete in the Formula Student competition.
          Our team is made up of students from a variety of disciplines, including
          engineering, business, and design.
        `,
        imageOther: "/sponsors/tbre-other.jpg",
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
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 100,
        imageWidth: 200,
        imageOther: "/sponsors/tbre-other.jpg",
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
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 75,
        imageWidth: 150,
        imageOther: "/sponsors/tbre-other.jpg",
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
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
        imageOther: "/sponsors/tbre-other.jpg",
      },
      {
        name: "TBRe",
        link: "https://teambathracingelectric.com",
        image: "/sponsors/tbre.png",
        imageHeight: 50,
        imageWidth: 100,
        imageOther: "/sponsors/tbre-other.jpg",
      },
    ],
  },
  {
    level: "Crowdfunding Sponsors",
    sponsors: [],
  },
];

export default sponsorsData;
