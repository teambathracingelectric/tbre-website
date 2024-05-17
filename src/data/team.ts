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
    role?: string;
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
        image: "/team/2023/alexandra_sharankova.jpeg",
      },
      {
        name: "Alexandre About",
        role: "Technical Director",
        link: "https://linkedin.com/in/alexandra-sharankova-396991176/",
        image: "/team/2023/alexandre_about.jpeg",
      },
    ],
  },
  {
    category: "Chassis",
    members: [
      {
        name: "Joao Maria Jorge",
        role: "Head of Chassis",
        link: "https://linkedin.com/in/joao-maria-jorge/",
        image: "/team/2023/joao_maria_jorge.jpeg",
      },
      {
        name: "Aaron Lopez",
        role: "Composites Lead",
        image: "/team/2023/aaron_lopez.jpeg",
      },
      {
        name: "Joseph Teckman",
        role: "Chassis Engineer",
        image: "/team/2023/joseph_teckman.jpeg",
      },
      {
        name: "Federica La Scala",
        role: "Chassis Engineer",
        image: "/team/2023/federica_la_scala.jpeg",
      },
      {
        name: "Sam Snudden",
        role: "Chassis Engineer",
        image: "/team/2023/sam_snudden.jpeg",
      },

      {
        name: "Simeon Filipov",
        role: "Chassis Engineer",
        // image: "/team/2023/simeon_filipov.jpeg",
      },
      {
        name: "Lucia Juanas-Crowe",
        role: "Structural Engineer",
        image: "/team/2023/lucia_juanas-crowe.jpeg",
      },
      {
        name: "Mario Morel",
        role: "Structural Engineer",
        image: "/team/2023/mario_morel.jpeg",
      },
    ],
  },
  {
    category: "Vehicle Dynamics",
    members: [
      {
        name: "Daniel Pérez Thomson",
        role: "Vehicle Dynamics Engineer",
        image: "/team/2023/daniel_perez_thomson.jpeg",
      },
      {
        name: "Ivan Chan",
        role: "Vehicle Dynamics Engineer",
        image: "/team/2023/ivan_chan.jpeg",
      },
      {
        name: "Josh Mobsby",
        role: "Vehicle Dynamics Engineer",
        image: "/team/2023/josh_mobsby.jpeg",
      },
    ],
  },
  {
    category: "Powertrain",
    members: [
      {
        name: "Sam Mutton",
        role: "Powertrain Lead - Traction",
        image: "/team/2023/sam_mutton.jpeg",
      },
      {
        name: "Abbey Marsden",
        role: "Powertrain Lead - Transmission",
        image: "/team/2023/abbey_marsden.jpeg",
      },
    ],
  },
  {
    category: "Electrical",
    members: [
      {
        name: "Ibraheem Rodrigues",
        role: "Head of Electrical Systems",
        image: "/team/2023/ibraheem_rodrigues.jpeg",
      },
      {
        name: "Owen Harms",
        role: "Electrical Integration Engineer",
        image: "/team/2023/owen_harms.jpeg",
      },
      {
        name: "James White",
        role: "Electrical Integration Engineer",
        image: "/team/2023/james_white.jpeg",
      },
      {
        name: "Tommy Lin",
        role: "Electronic Engineer",
        image: "/team/2023/tommy_lin.jpeg",
      },
      {
        name: "Eugene Levinson",
        role: "Embedded Engineer",
        // image: "/team/2023/eugene_levinson.jpeg",
      },
    ],
  },
  {
    category: "Aerodynamics",
    members: [
      {
        name: "Imran Choudhury",
        role: "Co-Head of Aerodynamics",
        image: "/team/2023/imran_choudhury.jpeg",
      },
      {
        name: "Jamie Bradshaw",
        role: "Co-Head of Aerodynamics",
        // image: "/team/2023/jamie_bradshaw.jpeg",
      },
    ],
  },
  {
    category: "Driver Environment",
    members: [
      {
        name: "Jesse Doorgeest",
        role: "Driver Environment Engineer",
        image: "/team/2023/jesse_doorgeest.jpeg",
      },
      {
        name: "Vincent Morel Cavailhes",
        role: "Driver Environment Engineer",
        image: "/team/2023/vincent_morel_cavailhes.jpeg",
      },
      {
        name: "Khayaam Waris",
        role: "Driver Environment Engineer",
        // image: "/team/2023/khayaam_waris.jpeg",
      },
    ],
  },
  {
    category: "Business Operations",
    members: [
      {
        name: "James Wainwright",
        role: "Head of Business Operations",
        image: "/team/2023/james_wainwright.jpeg",
      },
      {
        name: "Oskar Chu",
        role: "Logistics Lead",
        image: "/team/2023/oskar_chu.jpeg",
      },
      {
        name: "Abigail Adrian",
        role: "Marketing Lead",
        image: "/team/2023/abigail_adrian.jpeg",
      },
      {
        name: "Izumi Okuyama",
        role: "Sponsorship Lead",
        image: "/team/2023/izumi_okuyama.jpeg",
      },
      {
        name: "Kate Kennedy",
        role: "Logistics Member & Manufacturing Engineer",
        image: "/team/2023/kate_kennedy.jpeg",
      },
      {
        name: "Chiara Marquet",
        role: "Marketing Team Member",
        image: "/team/2023/chiara_marquet.jpeg",
      },
    ],
  },
  {
    category: "Cost & Manufacturing",
    members: [
      {
        name: "Mustafa Bakr Al-Derzi",
        role: "Cost & Manufacturing",
        image: "/team/2023/mustafa_bakr_al-derzi.jpeg",
      },
    ],
  },
  {
    category: "Faculty Advisors",
    members: [
      {
        name: "Dr. Christopher Vagg",
        link: "https://linkedin.com/in/chrisvagg/",
        image: "/team/2023/dr_christopher_vagg.jpeg",
      },
      {
        name: "Dr. Benjamin Metcalfe",
        link: "https://linkedin.com/in/benjamin-metcalfe-021a3554/",
        image: "/team/2023/dr_benjamin_metcalfe.jpeg",
      },
      {
        name: "Dr. Jonathan Graham-Harper Cater",
        link: "https://linkedin.com/in/jonathan-graham-harper-cater/",
        image: "/team/2023/dr_jonathan_graham-harper_cater.jpeg",
      },
      {
        name: "Dr. Pedram Asef",
        link: "https://linkedin.com/in/pedram-asef-350870b8/",
        image: "/team/2023/dr_pedram_asef.jpeg",
      },
    ],
  },
];

export default teamData;
