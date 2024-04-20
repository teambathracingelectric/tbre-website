// TODO: use this
export type SubTeam = {
  name: string;
  role: string;
  image?: string;
  link?: string;
}[];

export type Team = {
  category: string;
  members: {
    name: string;
    role: string;
    image?: string;
    link?: string;
  }[];
}[];

const teamData: Team = [
  {
    category: "Management",
    members: [
      {
        name: "Alexandra Sharankova",
        role: "Team Principal",
        link: "https://linkedin.com/in/alexandra-sharankova-396991176/",
        image: "/team/2022/alexandra-sharankova.jpg",
      },
      {
        name: "Alexandre About",
        role: "Technical Director",
      },
    ],
  },
  {
    category: "Marketing",
    members: [
      {
        name: "Alexandra Sharankova",
        role: "Team Principal",
        link: "https://linkedin.com/in/alexandra-sharankova-396991176/",
      },
      {
        name: "Alexandre About",
        role: "Technical Director",
      },
    ],
  },
];

export default teamData;
