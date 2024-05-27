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
  model?: string;
};

// TODO: move cars to separate files

export const carsData: Car[] = [
  {
    year: 2023,
    name: "TBRe23",
    image: "/cars/2023/car.jpg",
    team: teamData,
    model: "/cars/2023/model.glb",
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
    team: [
      {
        category: "Management",
        members: [
          {
            name: "Akshay Khanna",
            role: "Team Principal",
            link: "https://www.linkedin.com/in/akshay-khanna-uniofbath/",
          },
          {
            name: "Eddie Waggot",
            role: "Technical Director",
            link: "https://www.linkedin.com/in/edwardwaggott/",
          },
          {
            name: "Adam Meyohas",
            role: "AI Team Principal",
            link: "https://www.linkedin.com/in/adam-meyohas/",
          },
        ],
      },
      {
        category: "Vehicle Dynamics",
        members: [
          {
            name: "Liam Neary",
            role: "Head of Vehicle Dynamics",
            link: "https://www.linkedin.com/in/liam-neary023/",
          },
          {
            name: "Scott van Breda",
            role: "Driver",
            link: "https://www.linkedin.com/in/scottvanbreda/",
          },
          {
            name: "Ben Shellie",
            link: "https://www.linkedin.com/in/ben-shellie/",
          },
        ],
      },
      {
        category: "Chassis",
        members: [
          {
            name: "Ben Liddington",
            role: "Head of Chassis",
            link: "https://www.linkedin.com/in/benliddington/",
          },
        ],
      },
      {
        category: "Powertrain",
        members: [
          {
            name: "James Wilton",
            role: "Head of Powertrain",
            link: "https://www.linkedin.com/in/james-wilton/",
          },
        ],
      },
      {
        category: "Electrical",
        members: [
          {
            name: "Glen Chadburn",
            role: "Head of Electrical Systems",
            link: "https://www.linkedin.com/in/glen-chadburn/",
          },
          {
            name: "Luke Crutchley",
            role: "Head of Electrical Powertrain Development",
            link: "https://www.linkedin.com/in/luke-crutchley/",
          },
          {
            name: "David Cleland",
            link: "https://www.linkedin.com/in/david-cleland-aa5187244/",
          },
          {
            name: "Harley Mak",
            link: "https://www.linkedin.com/in/hau-lai-harley-mak-5b9b681b2/",
          },
        ],
      },
      {
        category: "Aerodynamics",
        members: [
          {
            name: "Jacob Collinson",
            link: "https://www.linkedin.com/in/jacob-collinson-4877171b7/",
          },
          {
            name: "James Wilson",
            link: "https://www.linkedin.com/in/james-wilson-677abb209/",
          },
          {
            name: "Callum Hallworth",
            link: "https://www.linkedin.com/in/callumhallworth/",
          },
        ],
      },
      {
        category: "Driverless",
        members: [
          {
            name: "Onish Sutradhar",
            role: "Head of AI Pipeline Development",
            link: "https://www.linkedin.com/in/onish-sutradhar-8197b6167/",
          },
          {
            name: "Ricardo Pradi Barbosa",
            link: "https://www.linkedin.com/in/ricardopradibarbosa/",
          },
          {
            name: "James Macrae",
            link: "https://www.linkedin.com/in/j-macrae/",
          },
        ],
      },
      {
        category: "Faculty Advisors",
        members: [
          {
            name: "Dr. Benjamin Metcalfe",
            link: "https://www.linkedin.com/in/benjamin-metcalfe-021a3554/",
          },
          {
            name: "Dr. Joseph Flynn",
            link: "https://www.linkedin.com/in/joseph-flynn-70744a15/",
          },
          {
            name: "Prof. Peter Wilson",
            link: "https://www.linkedin.com/in/peter-wilson-b119111/",
          },
          {
            name: "Dr. Jonathan Graham-Harper-Cater",
            link: "https://www.linkedin.com/in/jonathan-graham-harper-cater/",
          },
          {
            name: "Dr. Christopher Vagg",
            link: "https://www.linkedin.com/in/chrisvagg/",
          },
          {
            name: "Dr. Yunjie Gu",
            link: "https://www.linkedin.com/in/yunjie-gu-698172131/",
          },
        ],
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
    text: `
    The design of the Team Bath Racing Electric 2019 car had a large focus on mass reduction. Through the use of composite materials, a first for the team, 10Kg was saved in the hybrid chassis and a further 25Kg was saved in the accumulator (battery).

This light-weighting of the car had a large impact on the design of the vehicle dynamics allowing for improvements across the board. Thanks to the reliability of the 2018 car, a lot of testing was possible, allowing for data to be collected, analysed and improvements to be implemented on the 2019 car.

The team was targeting a 20% mass reduction, hoping to bring the car under 200kg. At the UK competition, the final weight achieved was 196Kg meaning an almost 23% mass reduction from the 2018 car!

A half monocoque half spaceframe chassis for improved torsional stiffness and mounting locations helped achieve this weight saving with a hybrid backplate and composite steering wheel all shaving weight off the design.

All composite components and moulds were made in house by the team, a massive amount of work when considering this was the first time composites were used in the team's designs.

The new inverter, as well as the teams Emrax 228 motor, meant a total of 700Nm was transferred to the rear wheels. This is thanks to the motors 8Kw per Kg of motor mass.

Another huge innovation made in 2019 was the accumulator design. This consisted of 714 Sony Murata VTC6 18650 cells providing 428.4V and 9.36KWh of energy storage. A combination of advanced material techniques and an optimised design resulted in a 40% mass reduction within a year of development. FDM 3D printing was used to make extremely lightweight and fully optimised sub packs which were surrounded by a composite battery container consisting of a carbon fibre sandwich structure. More safety systems were also integrated into the battery and the higher voltage output also improved the powertrain systems efficiency whilst reducing cabling thickness.

Optimised ECU software and a redesigned CAN bus architecture helped improve the cars control and safety systems with a comprehensive fault monitoring system also being implemented. A fully custom dashboard with an integrated letterbox screen also massively improved the driver environment.

Finally, a lower gear ratio of 3:1 instead of 3.6:1 was implemented due to the torque increase with the new inverter as well as the light-weighting.
    `,
    team: [
      {
        category: "Management",
        members: [
          {
            name: "Kieran Shopland",
            role: "Project Manager",
            link: "https://linkedin.com/in/kieran-shopland-3b791110a/",
          },
          {
            name: "Ben Carretta",
            role: "Technical Manager",
          },
          {
            name: "Afkar Ansar",
            role: "Business Manager",
          },
        ],
      },
      {
        category: "Mechanical",
        members: [
          {
            name: "Valerio Pellicciari",
            role: "Chassis Lead",
          },
          {
            name: "Natalie Kyprianou",
            role: "Battery Lead",
          },
          {
            name: "Sam Gray",
            role: "Vehicle Dynamics Lead",
          },
          {
            name: "Oliver Hopkinson",
            role: "Aerodynamics Lead",
          },
          {
            name: "Kieron Holt",
            role: "Safety Lead",
          },
          {
            name: "William Taylor",
            role: "Vehicle Dynamics",
          },
          {
            name: "George Bridgewater",
            role: "Spaceframe",
          },
          {
            name: "Thomas Coxon",
            role: "Nose Cone, Mechanical",
          },
          {
            name: "Joe Capper",
            role: "Integration Engineer",
          },
        ],
      },
      {
        category: "Electrical and Electronics",
        members: [
          {
            name: "Oliver Wilkins",
            role: "Electrical Lead",
          },
          {
            name: "Pete Walker",
            role: "Powertrain Lead",
          },
          {
            name: "Charlotte Deleay",
            role: "Sensors and Telemetry",
          },
          {
            name: "Uvindu Wijesinghe",
            role: "Driverless Technical Manager, Electronics, Dashboard",
          },
          {
            name: "Glen Chadburn",
            role: "Electronics",
          },
          {
            name: "Alex Dyer",
            role: "Electronics",
          },
        ],
      },
      {
        category: "Artificial Intelligence",
        members: [
          {
            name: "Eduard Gascon",
            role: "Autonomous Systems Project Manager",
            link: "https://linkedin.com/in/eduardgascon/",
          },
        ],
      },
      {
        category: "Commercial",
        members: [
          {
            name: "Sofya Morozova",
            role: "Sponsorships",
            link: "https://linkedin.com/in/sofya-morozova-114758150/",
          },
          {
            name: "Samuel Akinwumi",
            role: "Photography/Videography",
            link: "https://linkedin.com/in/samuel-akinwumi-abb22a88/",
          },
          {
            name: "Bassel Ghazali",
            role: "Photography",
            link: "https://linkedin.com/in/basselghazali/",
          },
          {
            name: "Fred Millman",
            role: "Web Development/Design",
            link: "https://linkedin.com/in/fjmillman/",
          },
        ],
      },
    ],
  },
  {
    year: 2018,
    name: "TBRe18",
    image: "/cars/2018/car.jpg",
    text: `
    The biggest innovation in the design of the Team Bath Racing Electric 2018 car was the new accumulator (Battery) designed from scratch.

The accumulator consisted of 720 Sony 18650 cells in a 15 series 8 parallel configuration per sub pack. For the 8 cells in parallel, copper busbars that were spot welded to the cells provided a very low resistance path. The 15 cells in series were held with a cell clamping design allowing the sub packs to be easily serviceable by removing and changing cells. This cell configuration provided 378V and 7KWh of energy storage.

The accumulator consisted of 6 sub packs in a steel enclosure and moved to cylindrical cells to improve charging times and packaging. Each sub pack was also no longer high voltage, making them much easier to work on and service. A full thermal management system was also implemented, measuring 238 data points of temperature as well as 90 cell voltages and the currents entering and exiting the accumulator. Two accumulators were built for added redundancy and reliability which was a primary focus for 2018

New centre-lock wheels were used on the 2018 car due to excessive wear being found on the previous design. Bespoke wheel hubs and centre lock nuts were designed to mitigate this.

A redesigned chassis was used, and the 2018 design was the first year to have a chassis designed from scratch that accommodated the electrical powertrain. This new design saved 20Kg compared to the previous years and consisted of a steel spaceframe. The overall length of the car was manufactured to within 1mm of the designs thanks to the use of an aluminium jig during the chassis manufacture.

The battery was moved from the side-pods to just behind the driver, allowing for better vehicle dynamics. The suspension was optimised to lower ground clearance and improve the vehicle dynamics with the centre of mass now vastly different from the previous year.

The powertrain used the same Emrax 228 motor used in 2019, 2020 and 2021 designs with a fixed rear axle which was a simple and reliable design. A gearing ratio of 3.6:1 was used, and Finite Element Analysis was used to optimise the design of each component and reduce weight resulting in a 13% weight saving across the powertrain.

A rapid prototyping ECU was used, and a detailed diagnostic system was implemented in software allowing the ECU to output lots of data for better fault finding and detailed data logging. The electronic system developed for the 2018 design was focused on being safe and reliable, with a wide array of sensors and 7 custom-designed PCBs.

The focus for the 2018 cars design was on reliability and redundancy. A complete redesign of the vehicle was undertaken to achieve this, and it resulted in the most advanced and lightest vehicle that the team had produced to date. This reliability was demonstrated in the FSUK competition when the vehicle passed scrutineering in time for the dynamic events and retained the title of #1 UK electric team.

This redundancy was integral to success and the teams build not buy mentality showed what could be accomplished with commitment and a passion for engineering. The TBRe18 design was highly commended at FSUK, to the extent that it was used as exemplar material for other teams.
    `,
    team: [
      {
        category: "Management",
        members: [
          {
            name: "Elizabeth Maclennan",
            role: "Project Manager",
            image: "/team/2018/elizabeth_maclennan.jpg",
          },
          {
            name: "Will Minter-Kemp",
            role: "Business Manager, Control Systems Lead",
            link: "https://linkedin.com/in/will-minter-kemp/",
            image: "/team/2018/will_minter-kemp.jpg",
          },
          {
            name: "Jacob Clapp",
            role: "Technical Lead",
            link: "https://linkedin.com/in/jacob-clapp-168428126/",
            image: "/team/2018/jacob_clapp.jpg",
          },
          {
            name: "Tom Dormand",
            role: "Accumulator Lead, Integration Lead",
            link: "https://linkedin.com/in/tomdormand/",
            image: "/team/2018/tom_dormand.jpg",
          },
        ],
      },
      {
        category: "Mechanical",
        members: [
          {
            name: "Daniel Palmer",
            role: "Chassis Lead",
            link: "https://linkedin.com/in/daniel-palmer-2018/",
            image: "/team/2018/daniel_palmer.jpg",
          },
          {
            name: "Simon Julyan",
            role: "Powertrain Lead",
            link: "https://linkedin.com/in/simon-julyan/",
            image: "/team/2018/simon_julyan.jpg",
          },
          {
            name: "Natalie Kyprianou",
            role: "Mechanical",
            link: "https://linkedin.com/in/natalie-kyprianou-7a44609a/",
            image: "/team/2018/natalie_kyprianou.jpg",
          },
        ],
      },
      {
        category: "Electrical and Electronics",
        members: [
          {
            name: "George Balkwill",
            role: "Electrical Lead",
            link: "https://linkedin.com/in/george-balkwill-845655152/",
            image: "/team/2018/george_balkwill.jpg",
          },
          {
            name: "Oliver Wilkins",
            role: "Electrical",
            link: "https://linkedin.com/in/oliver-wilkins/",
            image: "/team/2018/oliver_wilkins.jpg",
          },
          {
            name: "Ben Carretta",
            role: "Electrical",
            link: "https://linkedin.com/in/bencarretta/",
            image: "/team/2018/ben_carretta.jpg",
          },
          {
            name: "Uvindu Wijesinghe",
            role: "Electrical",
            link: "https://linkedin.com/in/uvindu-wijesinghe/",
            image: "/team/2018/uvindu_wijesinghe.jpg",
          },
        ],
      },
    ],
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
