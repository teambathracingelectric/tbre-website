import type { Car } from "@/data/cars";

export const car2019: Car = {
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
};
