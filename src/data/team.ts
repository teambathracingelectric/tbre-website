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
        image: "/team/2022/alexandra_sharankova.png",
      },
      {
        name: "Alexandre About",
        role: "Technical Director",
        link: "https://linkedin.com/in/alexandra-sharankova-396991176/",
      },
    ],
  },
  {
    category: "Chassis",
    members: [
      {
        name: "Joao Maria Jorge",
        role: "Head of Chassis",
        link: "https://www.linkedin.com/in/joao-maria-jorge/",
      },
      {
        name: "Aaron Lopez",
        role: "Composites Lead",
      },
      {
        name: "Joseph Teckman",
        role: "Chassis Engineer",
      },
      {
        name: "Federica La Scala",
        role: "Chassis Engineer",
      },
      {
        name: "Sam Snudden",
        role: "Chassis Engineer",
      },

      {
        name: "Simeon Filipov",
        role: "Chassis Engineer",
      },
      {
        name: "Lucia Juanas-Crowe",
        role: "Structural Engineer",
      },
      {
        name: "Mario Morel",
        role: "Structural Engineer",
      },
    ],
  },
  {
    category: "Vehicle Dynamics",
    members: [
      {
        name: "Daniel Pérez Thomson",
        role: "Vehicle Dynamics Engineer",
      },
      {
        name: "Ivan Chan",
        role: "Vehicle Dynamics Engineer",
      },
      {
        name: "Josh Mobsby",
        role: "Vehicle Dynamics Engineer",
      },
    ],
  },
  {
    category: "Powertrain",
    members: [
      {
        name: "Sam Mutton",
        role: "Powertrain Lead - Traction",
      },
      {
        name: "Abbey Marsden",
        role: "Powertrain Lead - Transmission",
      },
    ],
  },
  {
    category: "Electrical",
    members: [
      {
        name: "Ibraheem Rodrigues",
        role: "Head of Electrical Systems",
      },
      {
        name: "Owen Harms",
        role: "Electrical Integration Engineer",
      },
      {
        name: "James White",
        role: "Electrical Integration Engineer",
      },
      {
        name: "Tommy Lin",
        role: "Electronic Engineer",
      },
      {
        name: "Eugene Levinson",
        role: "Embedded Engineer",
      },
    ],
  },
  {
    category: "Aerodynamics",
    members: [
      {
        name: "Imran Choudhury",
        role: "Co-Head of Aerodynamics",
      },
      {
        name: "Jamie Bradshaw",
        role: "Co-Head of Aerodynamics",
      },
    ],
  },
  {
    category: "Driver Environment",
    members: [
      {
        name: "Jesse Doorgeest",
        role: "Driver Environment Engineer",
      },
      {
        name: "Vincent Morel Cavailhes",
        role: "Driver Environment Engineer",
      },
      {
        name: "Khayaam Waris",
        role: "Driver Environment Engineer",
      },
    ],
  },
  {
    category: "Business Operations",
    members: [
      {
        name: "James Wainwright",
        role: "Head of Business Operations",
      },
      {
        name: "Oskar Chu",
        role: "Logistics Lead",
      },
      {
        name: "Abigail Adrian",
        role: "Marketing Lead",
      },
      {
        name: "Izumi Okuyama",
        role: "Sponsorship Lead",
      },
      {
        name: "Kate Kennedy",
        role: "Logistics Member & Manufacturing Engineer",
      },
      {
        name: "Chiara Marquet",
        role: "Marketing Team Member",
      },
    ],
  },
  {
    category: "Cost & Manufacturing",
    members: [
      {
        name: "Mustafa Bakr Al-Derzi",
        role: "Cost & Manufacturing",
      },
    ],
  },
  {
    category: "Faculty Advisors",
    members: [
      {
        name: "Dr. Christopher Vagg",
        role: "x",
        link: "https://www.linkedin.com/in/chrisvagg/",
      },
      {
        name: "Dr. Benjamin Metcalfe",
        role: "x",
        link: "https://www.linkedin.com/in/benjamin-metcalfe-021a3554/",
      },
      {
        name: "Dr. Jonathan Graham-Harper Cater",
        role: "x",
        link: "https://www.linkedin.com/in/jonathan-graham-harper-cater/",
      },
      {
        name: "Dr. Pedram Asef",
        role: "x",
        link: "https://www.linkedin.com/in/pedram-asef-350870b8/",
      },
    ],
  },
];

const test = {
  name: "lolol",
  role: "lolol",
};

export default teamData;

const teamNames = [
  "alexandra_sharankova",
  "alexandre_about",
  "joao_maria_jorge",
  "aaron_lopez",
  "joseph_teckman",
  "federica_la_scala",
  "sam_snudden",
  "simeon_filipov",
  "lucia_juanas-crowe",
  "mario_morel",
  "daniel_perez_thomson",
  "ivan_chan",
  "josh_mobsby",
  "sam_mutton",
  "abbey_marsden",
  "ibraheem_rodrigues",
  "owen_harms",
  "james_white",
  "tommy_lin",
  "eugene_levinson",
  "imran_choudhury",
  "jamie_bradshaw",
  "jesse_doorgeest",
  "vincent_morel_cavailhes",
  "khayaam_waris",
  "james_wainwright",
  "oskar_chu",
  "abigail_adrian",
  "izumi_okuyama",
  "kate_kennedy",
  "chiara_marquet",
  "mustafa_bakr_al-derzi",
  "dr._christopher_vagg",
  "dr._benjamin_metcalfe",
  "dr._jonathan_graham-harper_cater",
  "dr._pedram_asef",
];
