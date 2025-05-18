type Sponsor = {
  id: string;
  name: string;
  link: string;
  logo: string;
  description?: string;
};

type SponsorLevel = {
  level:
    | "Title Sponsor"
    | "Diamond Sponsors"
    | "Platinum Sponsors"
    | "Gold Sponsors"
    | "Silver Sponsors"
    | "Bronze Sponsors"
    | "Crowdfunding Sponsors";
  sponsors: Sponsor[];
};

export type Sponsors = SponsorLevel[];

export const sponsors: Sponsors = [
  {
    level: "Title Sponsor",
    sponsors: [
      {
        id: "rotork",
        name: "Rotork",
        link: "https://rotork.com/en",
        logo: "/sponsors/rotork.svg",
        description: `
        Rotork is a global leader in mission-critical flow control and actuation solutions, supporting key industries such as energy, water, and infrastructure. With a purpose of "Keeping the World Flowing for Future Generations," their engineering expertise and sustainability focus drive industrial innovation worldwide.
As our Title Sponsor, Rotork provides us with vital financial backing and technical support towards our powertrain development. We’re also excited to be hosting our 2025 car launch event with them once again!
Rotork’s support is crucial in helping us push the boundaries of electric racing—and we can’t wait to show what we’ll achieve together this season!

        `,
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
        logo: "/sponsors/mewburn-ellis.png",
        description: `
        Mewburn Ellis is one of Europe's top specialist Intellectual Property firms, providing strategic advice to maximise the potential of their clients IP as an asset, increasing the value of businesses.
        As a platinum sponsor, Mewburn Ellis offer us a generous financial deliverable contributing to the overall production of our car!
        `,
      },
      {
        id: "zuken",
        name: "Zuken",
        link: "https://zuken.com",
        logo: "/sponsors/zuken.png",
        description: `
        Zuken is a global software company offering advanced design solutions for the creation and management of PCB designs, electrical and fluid systems and 3D cabinet and wire harness layouts.
        As a platinum sponsor Zuken offer us E3 Software a leading single-platform electrical CAD software capable of taking a design from concept to manufacture, which will contribute to the overall design and production of our car!
        `,
      },
      {
        id: "mpc-designworks",
        name: "MPC DesignWorks",
        link: "https://mpcdesignworks.com",
        logo: "/sponsors/mpc.png",
        description: `
        MPC DesignWorks is an engineering and design company specialised in advanced composites, providing multidisciplinary product development and production-oriented design services to the automotive industry.
        As a platinum sponsor MPC DesignWorks offer us technical consulting which will contribute to the overall production of our car!
        `,
      },
      {
        id: "handling-concepts",
        name: "Handling Concepts",
        link: "https://handlingconcepts.com",
        logo: "/sponsors/handling-concepts.png",
        description: `
        Handling Concepts specialises in advanced materials handling equipment, delivering bespoke lifting and movement solutions across a wide range of industries. With a strong foundation in precision engineering, they drive innovation through robust and reliable manufacturing expertise.

As a Platinum Sponsor, Handling Concepts provides us with critical manufacturing services, including the fabrication of essential welded assemblies for our 2025 car.

        `,
      },
    ],
  },
  {
    level: "Gold Sponsors",
    sponsors: [
       {
        id: "vector",
        name: "Vector",
        link: "https://vector.com",
        logo: "/sponsors/vector.png",
        description: `
        Vector Informatik is a globally recognised leader in software tools and embedded components for the development of electronic systems, specialising in networks like CAN and Automotive Ethernet. Their mission is to simplify the development of automotive electronics with solutions made for engineers, by engineers.

As a Gold Sponsor, Vector provides us with key car components and specialist training, giving our team the knowledge and tools needed to optimise our vehicle’s electronic systems.
        `,
      },
      {
        id: "cross",
        name: "Cross Manufacturing",
        link: "https://crossmanufacturing.com/",
        logo: "/sponsors/cross.png",
        description: `
        Cross Manufacturing is a world-leading producer of bespoke, high-temperature, corrosion-resistant metallic sealing solutions. Their precision engineering expertise is trusted globally across some of the most demanding industrial applications.
As a Gold Sponsor, Cross Manufacturing supports us with crucial Design for Manufacturing expertise and steel machining services for our suspension wishbones—directly contributing to the performance and reliability of our 2025 car.

        `,
      },
      {
        id: "babcock",
        name: "Babcock",
        link: "https://babcockinternational.com",
        logo: "/sponsors/babcock.svg",
        description: `
        Babcock design and manufacture specialist defence and civil equipment, from ships and submarine components to liquid gas and weapons handling systems.
        They provide through-life technical and engineering support for their customers' assets, delivering improvements in performance, availability and programme cost.
        Babcock's purpose is to create a safe and secure world, together.
        As a gold sponsor, Babcock offer us a financial deliverable, which assists with the overall production of our car!
        `,
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
        description: `
        Multimatic are suppliers of innovative automotive components, systems and engineering services worldwide.
        Multimatic aim to solve their customers' problems through their know-how, embedded in the products and services they sell.
        As a platinum sponsor, Multimatic offer us support contributing to the overall production of our car!
        `,
      },
      {
        id: "ab-dynamics",
        name: "AB Dynamics",
        link: "https://abdynamics.com/",
        logo: "/sponsors/ab-dynamics.png",
        description: `
        AB Dynamics is one of the world's leading specialists in automotive test systems, developing cutting-edge products and solutions for customers which include all the major automotive brands, high-tech autonomous vehicle developers, motorsport racing teams, and global test facilities.
        As a silver sponsor, AB Dynamics offer us a financial deliverable, which assists with the overall production of our car!
        `,
      },
      {
        id: "newbury-electronics",
        name: "Newbury Electronics",
        link: "https://newburyelectronics.co.uk/",
        logo: "/sponsors/newbury-electronics.svg",
        description: `
        Newbury Electronics (PCB Train) are a leading PCB manufacturer with over 60 years of experience designing and assembling PCBs.
As a Silver Sponsor, Newbury Electronics supports our team with custom PCB boards, providing the high-quality electronic components essential for the development of our 2025 car.
        `,
      },
      {
        id: "altium",
        name: "Altium",
        link: "https://altium.com",
        logo: "/sponsors/altium.png",
        description: `
        Altium are the #1 choice for PCB designers worldwide and have years of experience creating software tools to empower designers and manufacturers to create products more efficiently.
As a Silver Sponsor, Altium provides us with comprehensive access to their industry-leading software, equipping our team with the tools needed to design and develop high-performance PCBs for our 2025 car.

        `,
      },
      {
        id: "ansys",
        name: "Ansys",
        link: "https://ansys.com",
        logo: "/sponsors/ansys.svg",
        description: `
        Ansys are industry leaders in the simulation software engineering space, with over 50 years of experience pushing the boundaries of the predictive power of simulation.
As a Silver Sponsor, Ansys provides us with software licenses and technical support, enabling our team to design and simulate critical systems for our 2025 car—including the development of our new Autonomous system.
        `,
      },
      // {
      //   id: "brunner",
      //   name: "Brunner",
      //   link: "https://brunner-uk.com",
      //   logo: "/sponsors/brunner.webp",
      //   description: `
      //   Brunner are a UK-based furniture manufacturer, focused on state-of-the-art designs which help to transform the workplaces of numerous high-profile clients all around the world.
      //   As a silver sponsor, Brunner offer us a financial deliverable, which assists with the overall production of our car!
      //   `,
      // },
      {
        id: "frewer",
        name: "Frewer",
        link: "https://frewer-engineering.com/",
        logo: "/sponsors/frewer.png",
        description: `
        Frewer Engineering provides world-class design and analysis consultancy services to customers requiring innovative and creative solutions across a number of challenging industry sectors. Their mission is to deliver creative and practical engineering solutions that help teams like ours push the boundaries of performance.
As a Silver Sponsor, Frewer Engineering continues to provide exceptional technical support, playing a key role in the development of our CFD and Thermal models - vital to the aerodynamic and cooling systems of our 2025 car.
`
      },
      {
        id: "airbourne",
        name: "Airbourne",
        link: "https://airbourne.co.uk/",
        logo: "/sponsors/airbourne.png",
        description: `
        Airborne is a leader in advanced composite manufacturing, dedicated to accelerating industry innovation through automation, high-precision manufacturing, and cutting-edge digital solutions.
As a Silver Sponsor, Airborne supports us with high-quality ply-cutting services, ensuring we have precision-cut carbon fibre plys for our carbon monocoque and aerodynamic package of our 2025 car.
`
      }
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
        description: `
        Easy Composites are a global leader in the supply of advanced composite materials and equipment.
        The principle of Easy Composites is to make a complex and challenging subject as straightforward and accessible as possible.
        As a bronze sponsor, Easy Composites offer us discounts contributing to the overall production of our car!
        `,
      },
      {
        id: "pro-carve",
        name: "Pro Carve",
        link: "https://procarve.co.uk/",
        logo: "/sponsors/pro-carve.png",
        description: `
        Pro Carve provide specialist CNC routing services to designers, engineers, model makers, cabinetmakers and artists, cutting a wide range of materials. As a bronze sponsor, Pro Carve offer us discounts on machining contributing to the overall production of our car!`,
      },
      // {
      //   id: "redbull",
      //   name: "Redbull",
      //   link: "https://redbull.com",
      //   logo: "/sponsors/redbull.svg",
      //   description: `
      //   Red Bull are a global brand, who started manufacturing energy drinks in 1987, and have since made groundbreaking steps into new ventures, including the creation of a Formula One racing team.
      //   As a bronze sponsor, Red Bull provide us with their award-winning energy drinks, giving us enough energy to put maximum effort into the creation of our car!
      //   `,
      // },
      {
        id: "accu",
        name: "Accu",
        link: "https://accu.co.uk",
        logo: "/sponsors/accu.webp",
        description: `
        Accu is a UK based, high precision engineering company specialising in small mechanical components and sub-assemblies.
        Accu offer us website credit, allowing us to order mechanical components which go into the creation of our car!
        `,
      },
      {
        id: "renishaw",
        name: "Renishaw",
        link: "https://renishaw.com",
        logo: "/sponsors/renishaw.png",
        description: `
        Renishaw are an internationally focused company, skilled in many sectors, including motion control and manufacturing.
        As a bronze sponsor, Renishaw offer us a discount on their metal manufacturing, which allow us to ensure we have the skills needed to build our car!
        `,
      },
      {
        id: "get-it-made",
        name: "Get It Made",
        link: "https://get-it-made.co.uk/",
        logo: "/sponsors/get-it-made.png",
        description: `
        Get It Made are a manufacturer, specialising in bespoke metal and plastic parts, tailor-made for unique engineering projects.
        As a bronze sponsor, Get It Made offer us a generous discount on their metal materials, which go into the creation of our car!
        `,
      },
      {
        id: "textreme",
        name: "TeXtreme",
        link: "https://textreme.com/",
        logo: "/sponsors/textreme.png",
        description: `
        Oxeon is a research-based material company that develops, produces, and sells extremely thin carbon fiber materials. Founded in 2003, the company is now a leading player in the field of spread tow thin ply reinforcements, and the material is marketed under the brand name TeXtreme®. In applications where TeXtreme® is used, customers achieve higher mechanical performance and significantly reduced weight. Today, our fabrics are used in many areas, such as aviation, industrial, and sports applications.`,
      },
      {
        id: "rapid_harness",
        name: "Rapid Harness",
        link: "https://rapidharness.com/",
        logo: "/sponsors/rapid_harness.png",
        description: `
        RapidHarness is a full lifecycle CAD solution built for designing production-ready wire harness schematics. Whether you're working on quick test articles or aerospace grade drawings, RapidHarness will revolutionize the way you work.`,
      },
      {
        id: "creat3d",
        name: "CREAT3D",
        link: "https://creat3d.shop/",
        logo: "/sponsors/creat3d.jpg",
        description: `
        CREAT3D is a value-add partner specialising in Additive Manufacturing solutions.
        They provide a broad range of Additive Manufacturing products, services and solutions to help organisations streamline their manufacturing, design and engineering processes.
        As a bronze sponsor CREAT3D offer us discounts on their 3D printing services contributing to the overall production of our car!
        `,
      },
      {
        id: "3dconnexion",
        name: "3Dconnexion",
        link: "https://3dconnexion.com/uk/",
        logo: "/sponsors/3dconnexion.png",
        description: `
        3Dconnexion designs powerful, research-based ergonomic hardware and smart, easy-to-use software that combine seamlessly to make working in the world's most popular CAD applications and 3D environments fast, comfortable and fun.
        As a bronze sponsor 3Dconnexion provides us with access to a full range of 3Dconnexion products, special pricing and visibility opportunities, all contributing to the overall production of our car!
        `,
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
