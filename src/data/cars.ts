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
  text?: string;
  team?: Team;
  results?: Results;
};

const carsData: Car[] = [
  {
    year: 2023,
    name: "TBRe23",
    image: "/cars/2023/car.jpg",
    team: teamData,
  },
  {
    year: 2022,
    name: "TBRe22",
    image: "/cars/2022/car.jpg",
    results: [
      {
        title: "FS UK",
        description: `
        Our home competition, Formula Student UK is organised by the IMechE and runs at Silverstone international race circuit.
        This year, the team achieved the title of top UK-based EV team - a position familiar to TBRe.
        The team faced many challenges at this competition, but we persevered and passed scrutineering in time to compete in some dynamics events.
        This helped us secure our position as the UK's top electric formula student team.

        The AI team also did very well at the 2022 formula student, coming away with the overall win after winning many of the static events.
        `,
        image: "/cars/2022/fs-uk.jpg",
      },
      {
        title: "FSAE Italy",
        description: `
        The TBRe team competed in two European events in 2022- Italy and Spain.
        Formula SAE Italy provided many valuable challenges, from logistical challenges (the Italian competition was scheduled for the week after the UK competition) to physical challenges, with an intense heatwave hitting the country.
        Despite this, the team achieved a fantastic result of 9th overall EV team.
        `,
        image: "/cars/2022/fs-italy.jpg",
      },
      {
        title: "FS Spain",
        description: `
        Our second European competition of the season was in Spain.
        This is a competition known for its fierce competition from the top teams in the world.
        The team brought an updated car to Spain, with revisions to the vehicle dynamics and aerodynamics systems.

        The team came away from the event with a fantastic 18th-place overall finish.
        A great way to finish a very successful year for Team Bath Racing Electric.
        `,
        image: "/cars/2022/fs-spain.jpg",
      },
    ],
  },
  {
    year: 2021,
    name: "TBRe21",
    image: "/cars/2021/car.jpg",
    text: `
    Due to the effects of the COVID 19 pandemic, the 2021 car was an
    iteration of the 2019 chassis. The car had a completely overhauled
    electrical system, improved firewall and adjusted rear packaging,
    utilising the same powertrain components found in the 2019 car. The team
    also made its first-ever aerodynamics package that was mounted to the
    car at the competition but wasn't utilised in the dynamic events. The
    process of manufacturing these aerofoils allowed the team to expand
    their knowledge on composites manufacture and transfer that knowledge to
    future years.
    <br />
    <br />
    With only two and a half months of lab access, the team was very happy
    to walk away from the competition with two trophies, one for efficiency
    and another for the cost and manufacture event. The car was by far the
    fastest electric vehicle on the track, but due to a lack of testing
    time, the reliability was not good enough to allow the full completion
    of the endurance event. With a little more tuning and fixing some bugs,
    this vehicle can form the starting point of a fantastic car capable of
    competing at the highest levels of the formula student competition.
    <br />
    <br />
    The AI team also did very well at the 2021 formula student, coming away
    with the overall win after winning all of the static events they
    entered.
    <br />
    <br />
    The results of the 2021 competition are a testament to what the team can
    achieve regardless of how tough the circumstances are and looking
    forward the team is set to continue challenging the best formula student
    teams in the UK and abroad.
    `,
  },
  {
    year: 2020,
    name: "TBRe20",
    image: "/cars/2020/car.jpg",
  },
  {
    year: 2019,
    name: "TBRe19",
    image: "/cars/2019/car.jpg",
  },
  {
    year: 2018,
    name: "TBRe18",
    image: "/cars/2018/car.jpg",
  },
  {
    year: 2017,
    name: "TBRe17",
    image: "/cars/2017/car.jpg",
    team: [
      {
        category: "Main",
        members: [
          {
            name: "Stefano Dallavalle",
            role: "Project Manager",
            link: "https://linkedin.com/in/stefano-dallavalle/",
          },
          {
            name: "Gregory Tzermias",
            role: "Mechanical Lead",
            link: "https://linkedin.com/in/dr-gregory-tzermias-12a26677/",
          },
          {
            name: "Alex Stokoe",
            role: "Electrical Lead",
            link: "https://linkedin.com/in/alex-stokoe/",
          },
          {
            name: "Assad George Farhat",
            role: "Software Lead",
            link: "https://linkedin.com/in/assad-george-farhat-1b4a1bb8/",
          },
          {
            name: "Antonio Pessanha",
            role: "Marketing/Media Manager",
            link: "https://linkedin.com/in/ant%C3%B3nio-pessanha/",
          },
        ],
      },
    ],
  },
  {
    year: 2016,
    name: "TBRe16",
    image: "/cars/2016/car.jpg",
  },
];

export default carsData;
