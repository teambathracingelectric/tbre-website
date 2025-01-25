import type { Team } from "@/data/cars";
// import { car2023 } from "@/data/cars/2023";

// export const teamData: Team = car2023.team! as Team;
export const teamData2: Team = [
  {
    category: "Leadership",
    members: [
      {
        name: "Abbey Marsden",
        role: "Team Leader",
        image: "/team/2025/abbey_marsden.png",
      },
      {
        name: "Daniel Pérez Thomson",
        role: "Technical Director",
        image: "/team/2025/daniel_perez_thomson.png",
      },
    ],
  },
  {
    category: "",
    members: [
      {
        name: "Alexander Crisan",
        role: "Aerodynamics Lead",
        image: "/team/2025/alexander_crisan.png",
      },
      { name: "Seb Hall", role: "AI Lead", image: "/team/2025/seb_hall.png" },
      {
        name: "Federica La Scala",
        role: "Chassis Lead",
        image: "/team/2025/federica_la_scala.png",
      },
      {
        name: "Sam Snudden",
        role: "Composite Lead",
        image: "/team/2025/sam_snudden.png",
      },
      {
        name: "Karolis Banys",
        role: "Driver Environment Lead",
        image: "/team/2025/karolis_banys.png",
      },
      {
        name: "Alex Cucchiara",
        role: "Electrical Systems Lead",
        image: "/team/2025/alex_cucchiara.png",
      },
      {
        name: "Sam Mutton",
        role: "Powertrain Lead",
        image: "/team/2025/sam_mutton.png",
      },
      {
        name: "Ivan Chan",
        role: "Vehicle Dynamics Lead",
        image: "/team/2025/ivan_chan.png",
      },
      {
        name: "Chiara Marquet",
        role: "Marketing Lead",
        image: "/team/2025/chiara_marquet.png",
      },
      {
        name: "Audrey Raguin",
        role: "Co-Business Operations Lead",
        image: "/team/2025/audrey_raguin.png",
      },
      {
        name: "Emma Dickson",
        role: "Co-Business Operations Lead",
        image: "/team/2025/emma_dickson.png",
      },
    ],
  },
];

export const teamData: Team = [
  {
    category: "Management",
    members: [
      {
        name: "Abbey Marsden",
        role: "Team Leader",
        important: true,
        image: "/team/2025/abbey_marsden.png",
      },
      {
        name: "Daniel Perez Thomson",
        role: "Technical Director",
        important: true,
        image: "/team/2025/daniel_perez_thomson.png",
      },
    ],
  },
  {
    category: "Elec",
    members: [{ name: "Alex", role: "HVAC" }],
  },
  {
    category: "AI",
    members: [
      {
        name: "Seb Hall",
        role: "TBReAI Lead - Control Systems & Integration Lead",
        important: true,
        image: "/team/2025/seb_hall.png",
      },
      { name: "Nikhil Anisetti", role: "Object Detection Lead" },
      { name: "Mia (Xiaotong) Tan", role: "LIDAR Lead" },
      { name: "Ronald Piku", role: "Path Planning Lead" },
      { name: "Roberta Griffiths", role: "SLAM Lead" },
    ],
  },
  {
    category: "Chassis",
    members: [
      {
        name: "Callum Hallworth",
        role: "Chassis Structures Designer",
        important: true,
      },
      {
        name: "Ben Bowles",
        role: "Chassis Mechanical Designer",
        important: true,
      },
      {
        name: "Federica La Scala",
        role: "Chassis Lead",
        image: "/team/2025/federica_la_scala.png",
      },
    ],
  },
  {
    category: "Statics",
    members: [
      {
        name: "Nithi Muthu Saravanan",
        role: "Cost and Manufacturing Lead",
        important: true,
      },
      {
        name: "Ben Fall",
        role: "Static Events Team Member (BPP and Cost)",
        important: true,
      },
    ],
  },
  {
    category: "BOps",
    members: [
      {
        name: "Audrey Raguin",
        role: "Co-Business Operations Lead",
        image: "/team/2025/audrey_raguin.png",
        important: true,
      },
      {
        name: "Emma Dickson",
        role: "Co-Business Operations Lead",
        image: "/team/2025/emma_dickson.png",
        important: true,
      },
    ],
  },
  {
    category: "Marketing",
    members: [
      {
        name: "Chiara Marquet",
        role: "Marketing Lead",
        image: "/team/2025/chiara_marquet.png",
      },
      { name: "Mary Weir", role: "Marketing Team Member", important: true },
      {
        name: "Michelle Stejskalova",
        role: "Co TikTok Admin",
        important: true,
      },
      { name: "Sasha Key", role: "Co TikTok Admin", important: true },
      { name: "Millie Watson", role: "Instagram Admin", important: true },
      { name: "Ishika Goel", role: "Website Admin", important: true },
      {
        name: "Maddie Tregonning",
        role: "Marketing Team Member",
        important: true,
      },
      { name: "Torey Boss", role: "Marketing Team Member", important: true },
      { name: "Priya Nath", role: "NewsLetter Admin", important: true },
    ],
  },
];
