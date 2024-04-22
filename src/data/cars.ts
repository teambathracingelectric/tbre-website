import teamData, { type Team } from "@/data/team";

export type Results = {
  title: string;
  description: string;
  image: string;
}[];

export type Car = {
  year: number;
  name: string;
  image: string;
  team?: Team;
  results?: Results;
};

const carsData: Car[] = [
  {
    year: 2023,
    name: "TBRe23",
    image: "/cars/2023/car-2023.jpg",
    team: teamData,
    results: [
      {
        title: "FS UK",
        description: `
        Our home competition, Formula Student UK is organised by the IMechE and runs at Silverstone international race circuit. This year, the team achieved the title of top UK-based EV team - a position familiar to TBRe. The team faced many challenges at this competition, but we persevered and passed scrutineering in time to compete in some dynamics events. This helped us secure our position as the UK's top electric formula student team.

        The AI team also did very well at the 2022 formula student, coming away with the overall win after winning many of the static events.`,
        image: "/cars/2023/car-2023.jpg",
      },
      {
        title: "FS UK",
        description: `
        Our home competition, Formula Student UK is organised by the IMechE and runs at Silverstone international race circuit. This year, the team achieved the title of top UK-based EV team - a position familiar to TBRe. The team faced many challenges at this competition, but we persevered and passed scrutineering in time to compete in some dynamics events. This helped us secure our position as the UK's top electric formula student team.

        The AI team also did very well at the 2022 formula student, coming away with the overall win after winning many of the static events.`,
        image: "/cars/2023/car-2023.jpg",
      },
      {
        title: "FS UK",
        description: `
        Our home competition, Formula Student UK is organised by the IMechE and runs at Silverstone international race circuit. This year, the team achieved the title of top UK-based EV team - a position familiar to TBRe. The team faced many challenges at this competition, but we persevered and passed scrutineering in time to compete in some dynamics events. This helped us secure our position as the UK's top electric formula student team.

        The AI team also did very well at the 2022 formula student, coming away with the overall win after winning many of the static events.`,
        image: "/cars/2023/car-2023.jpg",
      },
    ],
  },
  {
    year: 2022,
    name: "TBRe22",
    image: "/cars/2022/car-2022.jpg",
    team: teamData,
  },
  {
    year: 2021,
    name: "TBRe21",
    image: "/cars/2021/car-2021.jpg",
    team: teamData,
  },
  {
    year: 2020,
    name: "TBRe20",
    image: "/cars/2020/car-2020.jpg",
    team: teamData,
  },
  {
    year: 2019,
    name: "TBRe19",
    image: "/cars/2019/car-2019.jpg",
    team: teamData,
  },
];

export default carsData;
