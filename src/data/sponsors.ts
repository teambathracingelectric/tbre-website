export type Sponsor = {
  id: string;
  name: string;
  link: string;
  logo: string;
  logoHeight: number;
  logoWidth: number;
  description?: string;
  image?: string;
  invert?: boolean;
};

// TODO: refactor this to have typed sponsor levels
export const sponsorsData: {
  level: string;
  sponsors: Sponsor[];
}[] = [
  {
    level: "Title Sponsor",
    sponsors: [
      {
        id: "rotork",
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
        id: "mewburn-ellis",
        name: "Mewburn Ellis",
        link: "https://mewburn.com",
        logo: "/sponsors/mewburn-ellis.webp",
        logoHeight: 100,
        logoWidth: 200,
        description: `
        Mewburn Ellis is one of Europe's top specialist Intellectual Property firms, providing strategic advice to maximise the potential of their clients IP as an asset, increasing the value of businesses.
        As a platinum sponsor, Mewburn Ellis offer us a generous financial deliverable contributing to the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "zuken",
        name: "Zuken",
        link: "https://zuken.com",
        logo: "/sponsors/zuken.svg",
        logoHeight: 100,
        logoWidth: 200,
        description: `
        Zuken is a global software company offering advanced design solutions for the creation and management of PCB designs, electrical and fluid systems and 3D cabinet and wire harness layouts.
        As a platinum sponsor Zuken offer us E3 Software a leading single-platform electrical CAD software capable of taking a design from concept to manufacture, which will contribute to the overall design and production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "mpc-designworks",
        name: "MPC DesignWorks",
        link: "https://mpcdesignworks.com",
        logo: "/sponsors/mpc.png",
        logoHeight: 100,
        logoWidth: 200,
        description: `
        MPC DesignWorks is an engineering and design company specialised in advanced composites, providing multidisciplinary product development and production-oriented design services to the automotive industry.
        As a platinum sponsor MPC DesignWorks offer us technical consulting which will contribute to the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "vector",
        name: "Vector",
        link: "https://vector.com",
        logo: "/sponsors/vector.png",
        logoHeight: 100,
        logoWidth: 200,
        description: `
        Vector is the leading manufacturer of software tools and embedded components for the development of electronic systems and their networking with many different systems from CAN to Automotive Ethernet.
        Vector's mission is to simplify the development of automotive electronics with solutions made for engineers, by engineers.
        As a Platinum sponsor Vector generously offer us software, hardware and training which all contributes to the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Gold Sponsors",
    sponsors: [
      {
        id: "babcock",
        name: "Babcock",
        link: "https://babcockinternational.com",
        logo: "/sponsors/babcock.svg",
        logoHeight: 100,
        logoWidth: 200,
        description: `
        Babcock design and manufacture specialist defence and civil equipment, from ships and submarine components to liquid gas and weapons handling systems.
        They provide through-life technical and engineering support for their customers' assets, delivering improvements in performance, availability and programme cost.
        Babcock's purpose is to create a safe and secure world, together.
        As a gold sponsor, Babcock offer us a financial deliverable, which assists with the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Silver Sponsors",
    sponsors: [
      {
        id: "multimatic",
        name: "Multimatic",
        link: "https://multimatic.com",
        logo: "/sponsors/multimatic.png",
        logoHeight: 100,
        logoWidth: 200,
        description: `
        Multimatic are suppliers of innovative automotive components, systems and engineering services worldwide.
        Multimatic aim to solve their customers' problems through their know-how, embedded in the products and services they sell.
        As a platinum sponsor, Multimatic offer us support contributing to the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
        invert: true,
      },
      {
        id: "ab-dynamics",
        name: "AB Dynamics",
        link: "https://abdynamics.com/",
        logo: "/sponsors/ab-dynamics.png",
        logoHeight: 75,
        logoWidth: 150,
        description: `
        AB Dynamics is one of the world’s leading specialists in automotive test systems, developing cutting-edge products and solutions for customers which include all the major automotive brands, high-tech autonomous vehicle developers, motorsport racing teams, and global test facilities.
        As a silver sponsor, AB Dynamics offer us a financial deliverable, which assists with the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "newbury-electronics",
        name: "Newbury Electronics",
        link: "https://newburyelectronics.co.uk/",
        logo: "/sponsors/newbury-electronics.svg",
        logoHeight: 75,
        logoWidth: 150,
        description: `
        Newbury Electrics (PCB Train) are a leading PCB manufacturer with over 60 years of experience designing and assembling PCBs.
        As a silver sponsor, Newbury Electronics offer us website credit to be able to spend of PCB technology for our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "altium",
        name: "Altium",
        link: "https://altium.com",
        logo: "/sponsors/altium.png",
        logoHeight: 75,
        logoWidth: 150,
        description: `
        Altium are the #1 choice for PCB designers worldwide and have years experience creating software tools to empower designers and manufacturers to create products more efficiently.
        As a silver sponsor, Altium offer is a software license, allowing us to design the best possible PCBs for our car!
        `,
        image: "/sponsors/tbre-image.jpg",
        invert: true,
      },
      {
        id: "ansys",
        name: "Ansys",
        link: "https://ansys.com",
        logo: "/sponsors/ansys.svg",
        logoHeight: 75,
        logoWidth: 150,
        description: `
        Ansys are innovators in the simulation software engineering space, with over 50 years experience pushing the boundaries of the predictive power of simulation.
        As a silver sponsor, Ansys offer us a software license, allowing us to design simulations assisting with the designing of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "brunner",
        name: "Brunner",
        link: "https://brunner-uk.com",
        logo: "/sponsors/brunner.webp",
        logoHeight: 75,
        logoWidth: 150,
        description: `
        Brunner are a UK-based furniture manufacturer, focused on state-of-the-art designs which help to transform the workplaces of numerous high-profile clients all around the world.
        As a silver sponsor, Brunner offer us a financial deliverable, which assists with the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
        invert: true,
      },
      {
        id: "frewer",
        name: "Frewer",
        link: "https://frewer-engineering.com/",
        logo: "/sponsors/frewer.png",
        logoHeight: 75,
        logoWidth: 150,
        // TODO: add description
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "cross",
        name: "Cross Manufacturing",
        link: "https://crossmanufacturing.com/",
        logo: "/sponsors/cross.png",
        logoHeight: 75,
        logoWidth: 150,
        // TODO: add description
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Bronze Sponsors",
    sponsors: [
      {
        id: "easy-composites",
        name: "Easy Composites",
        link: "https://easycomposites.co.uk/",
        logo: "/sponsors/easy-composites.png",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        Easy Composites are a global leader in the supply of advanced composite materials and equipment.
        The principle of Easy Composites is to make a complex and challenging subject as straightforward and accessible as possible.
        As a bronze sponsor, Easy Composites offer us discounts contributing to the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "pro-carve",
        name: "Pro Carve",
        link: "https://procarve.co.uk/",
        logo: "/sponsors/pro-carve.png",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        Pro Carve provide specialist CNC routing services to designers, engineers, model makers, cabinetmakers and artists, cutting a wide range of materials. As a bronze sponsor, Pro Carve offer us discounts on machining contributing to the overall production of our car!`,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "redbull",
        name: "Redbull",
        link: "https://redbull.com",
        logo: "/sponsors/redbull.svg",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        Red Bull are a global brand, who started manufacturing energy drinks in 1987, and have since made groundbreaking steps into new ventures, including the creation of a Formula One racing team.
        As a bronze sponsor, Red Bull provide us with their award-winning energy drinks, giving us enough energy to put maximum effort into the creation of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "accu",
        name: "Accu",
        link: "https://accu.co.uk",
        logo: "/sponsors/accu.webp",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        Accu is a UK based, high precision engineering company specialising in small mechanical components and sub-assemblies.
        Accu offer us website credit, allowing us to order mechanical components which go into the creation of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
        invert: true,
      },
      {
        id: "renishaw",
        name: "Renishaw",
        link: "https://renishaw.com",
        logo: "/sponsors/renishaw.png",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        Renishaw are an internationally focused company, skilled in many sectors, including motion control and manufacturing.
        As a bronze sponsor, Renishaw offer us a discount on their metal manufacturing, which allow us to ensure we have the skills needed to build our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "get-it-made",
        name: "Get It Made",
        link: "https://get-it-made.co.uk/",
        logo: "/sponsors/get-it-made.svg",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        Get It Made are a manufacturer, specialising in bespoke metal and plastic parts, tailor-made for unique engineering projects.
        As a bronze sponsor, Get It Made offer us a generous discount on their metal materials, which go into the creation of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "textreme",
        name: "TeXtreme",
        link: "https://textreme.com/",
        logo: "/sponsors/textreme.png",
        logoHeight: 50,
        logoWidth: 100,
        // TODO: add description
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "rapid_harness",
        name: "Rapid Harness",
        link: "https://rapidharness.com/",
        logo: "/sponsors/rapid_harness.png",
        logoHeight: 50,
        logoWidth: 100,
        // TODO: add description
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "creat3d",
        name: "CREAT3D",
        link: "https://creat3d.shop/",
        logo: "/sponsors/creat3d.jpg",
        logoHeight: 50,
        logoWidth: 100,
        description: `
        CREAT3D is a value-add partner specialising in Additive Manufacturing solutions.
        They provide a broad range of Additive Manufacturing products, services and solutions to help organisations streamline their manufacturing, design and engineering processes.
        As a bronze sponsor CREAT3D offer us discounts on their 3D printing services contributing to the overall production of our car!
        `,
        image: "/sponsors/tbre-image.jpg",
      },
      {
        id: "3dconnexion",
        name: "3Dconnexion",
        link: "https://3dconnexion.com/uk/",
        logo: "/sponsors/3dconnexion.png",
        logoHeight: 50,
        logoWidth: 100,
        // TODO: add description
        image: "/sponsors/tbre-image.jpg",
      },
    ],
  },
  {
    level: "Crowdfunding Sponsors",
    sponsors: [],
  },
];

export const donationData: string[] = [
  "Professor Gary Hawley",
  "Mr. Bob Rogers",
];
