import type { Car } from "@/data/cars";

export const car2025: Car = {
  year: 2025,
  name: "TBRe25",
  image: "/cars/2025/car.jpeg",
  team: [
    {
      category: "Management",
      members: [
        {
          name: "Abbey Marsden",
          role: "Team Leader",
          lead: true,
          image: "/team/2025/abbey_marsden.png",
        },
        {
          name: "Daniel Perez Thomson",
          role: "Technical Director",
          lead: true,
          image: "/team/2025/daniel_perez_thomson.png",
        },
      ],
    },
    {
      category: "Artificial Intelligence",
      members: [
        {
          name: "Seb Hall",
          role: "TBReAI Lead - Control Systems & Integration Lead",
          lead: true,
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
          lead: true,
        },
        {
          name: "Ben Bowles",
          role: "Chassis Mechanical Designer",
          lead: true,
        },
        {
          name: "Federica La Scala",
          role: "Chassis Lead",
          image: "/team/2025/federica_la_scala.png",
          lead: true,
        },
      ],
    },
    {
      category: "Statics",
      members: [
        {
          name: "Nithi Muthu Saravanan",
          role: "Cost and Manufacturing Lead",
          lead: true,
        },
        {
          name: "Ben Fall",
          role: "Static Events Team Member (BPP and Cost)",
          lead: true,
        },
      ],
    },
    {
      category: "Electronics",
      members: [{ name: "Alex", role: "HVAC" }],
    },
    {
      category: "Business Operations",
      members: [
        {
          name: "Audrey Raguin",
          role: "Co-Business Operations Lead",
          image: "/team/2025/audrey_raguin.png",
          lead: true,
        },
        {
          name: "Emma Dickson",
          role: "Co-Business Operations Lead",
          image: "/team/2025/emma_dickson.png",
          lead: true,
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
          lead: true,
        },
        { name: "Mary Weir", role: "Marketing Team Member" },
        {
          name: "Michelle Stejskalova",
          role: "Co TikTok Admin",
          lead: true,
        },
        { name: "Sasha Key", role: "Co TikTok Admin", lead: true },
        { name: "Millie Watson", role: "Instagram Admin", lead: true },
        { name: "Ishika Goel", role: "Website Admin", lead: true },
        {
          name: "Maddie Tregonning",
          role: "Marketing Team Member",
        },
        { name: "Torey Boss", role: "Marketing Team Member" },
        { name: "Priya Nath", role: "NewsLetter Admin", lead: true },
      ],
    },
  ],
  // model: "/cars/2025/model.glb",
};
