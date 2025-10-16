export const recruitment: {
  name: string;
  description: string;
  contact: string;
  additionalText?: string;
  members: string;
  roles: {
    title: string;
    description: string;
    degree?: string;
    year?: string;
    count?: string | number;
  }[];
}[] = [
  {
    name: "Management",
    description: ``,
    contact: "",
    members: "12",
    roles: [
      {
        title: "Sponsorship Coordinator",
        description: `As Sponsorship Coordinator, you will be responsible for building and maintaining relationships with both existing and potential sponsors. You'll play a key role in securing the funding and resources that allow TBRe to compete at the highest level in Formula Student. This role will give you valuable experience in professional communication and negotiation, as well as the opportunity to represent the team to external companies and industry professionals.

Responsibilities:
- Researching and identifying potential sponsors across relevant industries.
- Drafting and sending sponsorship proposals and tailored communications.
- Maintaining regular contact with existing sponsors and ensuring deliverables are met.
- Coordinating the delivery of sponsor benefits (logos, social media content)
- Working closely with the Marketing team to align messaging and branding.
- Keeping accurate records of sponsor interactions and agreements.`,
        year: "2nd Year +",
        degree: "Any",
        count: "3",
      },
      // {
      //   title: "Costing Lead",
      //   description: `As a Cost & Manufacturing Support, you will assist the Lead in gathering, checking, and recording cost data from across all subsystems. You will help prepare the BOM, CBOM, and cost explanation files, ensuring accuracy and compliance with Formula Student `,
      //   year: "2nd Year +",
      //   degree: "Any",
      //   count: "1",
      // },
      // {
      //   title: "Costing Support",
      //   description: `As a Cost & Manufacturing Support, you will assist the Lead in gathering, checking, and recording cost data from across all subsystems. You will help prepare the BOM, CBOM, and cost explanation files, ensuring accuracy and compliance with Formula Student rules. This role is an opportunity to develop organisational and analytical skills while contributing directly to the team's success in the Cost & Manufacturing Event, with the potential to assist at competition.`,
      //   year: "Any",
      //   degree: "Any",
      //   count: "3",
      // },
      {
        title: "Merchandise Designer",
        description: `As a Merchandise Designer, you will design and manage Team Bath Racing Electric's merchandise for both competition and wider promotional purposes. This includes creating on-brand items such as team kit, supporter gear, and promotional products.

Responsibilities:
- Design and develop merchandise concepts that reflect the team's brand.
- Gather input from team members on kit and merchandise needs.
- Communicate with suppliers to source, cost, and deliver merchandise on time.
- Ensure quality, durability, and practicality of items for competition and events.
- Manage stock, orders, and distribution within the team and to supporters.
- Work with the Marketing team to align merchandise with sponsor branding.`,
        year: "Any",
        degree: "Any degree with interest in design, branding, or business",
        count: "2",
      },
      {
        // title: "Outreach Events",
        title: "Events & Logistics Coordinator",
        description: `As Events & Logistics Coordinator, you will be responsible for managing all communication between TBRe and event organisers, as well as planning the team's logistics for outreach events and competitions. This includes coordinating travel, accommodation, and essential resources. This role offers valuable experience in event management, professional communication, and logistical planning, directly contributing to the smooth running of the team throughout the season.

Responsibilities:
- Act as the primary point of contact between the team and event organisers.
- Coordinate logistics for competitions and outreach events, including travel, accommodation, and schedules.
- Organise transport and ensure all essential equipment, documents, and supplies are accounted for.
- Manage budgets and expenses related to travel and events.
- Ensure the team's presence at outreach events is well-prepared and professionally represented.
- Handle any last-minute logistical issues that arise during competitions or events.`,
        year: "Any",
        degree: "Engineering, Business, Management",
        count: "3",
      },
    ],
  },
  // {
  //   name: "Aerodynamics",
  //   description:
  //     "The Aerodynamics team pushes the boundaries of vehicle performance through advanced simulation, design, and testing. Roles include CFD, composite design, and thermal management.",
  //   contact: "Alexander Crisan",
  //   members: "11",
  //   roles: [
  //     {
  //       title: "Aerodynamic Performance Engineer",
  //       description:
  //         "Work alongside the vehicle performance and vehicle dynamics group to develop a top-level development methodology. Conduct aerodynamic performance analysis of previous competition data. Provide recommendations for aerodynamic targets and development direction. Build tools to quantify aerodynamic gains in lap time/points. Support CFD validation programs.",
  //       degree: "Aerospace / Automotive / Mechanical / Integrated Engineering",
  //       year: "3rd/4th",
  //       count: 2,
  //     },
  //     {
  //       title: "Aerodynamicist",
  //       description:
  //         "Develop aerodynamic solutions that deliver performance, under the direction of the Aerodynamic Lead. Ensure that ideas and designs are legal. Manage your own projects effectively through the design, CFD, part preparation and wind tunnel test process. Create CAD geometry (Solid Modelling/Surfacing) under the direction of the Aerodynamic Lead. Submit CFD cases, deliver CFD analysis and input for your area of the car.",
  //       degree: "Aerospace / Automotive Engineering",
  //       year: "3rd/4th",
  //       count: 3,
  //     },
  //     {
  //       title: "Aerodynamic Composite Designers",
  //       description:
  //         "Build analytical tools for structural analysis. Develop and build Finite Element (FE) models for composite structural analysis. Design and execute experiments/physical testing to validate tools. Complete composite laminate and internal structure design for all aerodynamic devices. Support and lead manufacturing effort.",
  //       degree: "Aerospace / Automotive / Mechanical / Integrated Engineering",
  //       year: "3rd/4th",
  //       count: 3,
  //     },
  //     {
  //       title: "Thermal Engineers",
  //       description:
  //         "Responsible for the development of innovative and effective thermal solutions for powertrain and accumulator (high voltage battery) cooling systems. Use 1D / 3D simulations, to investigate concepts and complete design validation against targets. Work closely with our Aerodynamic, Powertrain and vehicle performance group to implement thermal solutions. Contribute to the calibration and correlation of computational and physical modelling toolsets use for thermal predictions. Investigate and validate concepts with test benches and track testing.",
  //       degree: "Aerospace / Automotive / Mechanical / Integrated Engineering",
  //       year: "3rd/4th",
  //       count: 2,
  //     },
  //     {
  //       title: "CFD Workflow Engineer",
  //       description:
  //         "Contribute to the overall CFD process development, Impact how CFD is used by the whole aerodynamic department, Improve CFD models to increase accuracy of prediction, Work closely with external software providers to improve utility, Help set future directions and trends in CFD Methods, Implement tools to automate CFD workflow.",
  //       degree: "All, Computer Science, Mathematics",
  //       year: "All",
  //       count: 1,
  //     },
  //   ],
  // },
  // {
  //   name: "Chassis",
  //   description:
  //     "The Chassis team is responsible for the design, analysis, and manufacture of the car's structural components, including the monocoque, roll hoop, and other metallic and composite structures.",
  //   contact: "Sam Utley",
  //   members: "6-11",
  //   roles: [
  //     {
  //       title: "Composite Design Engineer - Laminate",
  //       description:
  //         "Monocoque laminate optimisation\nExperience: Composite structural analysis and manufacture. Previous TBRe involvement and experience with SES ideal.\nResponsible for developing the laminate for the monocoque via FEA modelling and calculations. Collaborate with other team members to manufacture test panels and record results in the SES.",
  //       degree: "Mechanical or Aerospace Engineering",
  //       year: "3rd/4th Year",
  //       count: 2,
  //     },
  //     {
  //       title: "Composite Design Engineer - Inserts and Attachments",
  //       description:
  //         "Insert design and FEA modelling\nExperience: Composite structural analysis and manufacture. Understanding of insert design and FEA experience. Previous TBRe involvement and experience with SES ideal.\nResponsible for FEA modelling of inserts and mass optimisation of inserts throughout the car. Log design and manufacture progress of components. Collaborate with other team members to manufacture test panels and record results in the SES.",
  //       degree: "Mechanical or Aerospace Engineering",
  //       year: "3rd/4th Year",
  //       count: 1,
  //     },
  //     {
  //       title: "Mechanical Design Engineer - Metallic Structures",
  //       description:
  //         "Roll hoop design and optimisation\nExperience: Strong CAD skills and metallic FEA skills. Previous TBRe involvement and experience with SES ideal but not required.\nResponsible for CAD modelling, technical drawings and procurement of roll hoops. Responsible for mass optimisation of the metallic structures and sub-assemblies as well as producing FEA reports and contributing to SES documentation.",
  //       degree: "Mechanical or Aerospace Engineering",
  //       year: "3rd/4th Year",
  //       count: 2,
  //     },
  //     {
  //       title: "Manufacture Support",
  //       description:
  //         "Assisting with composites manufacture\nExperience: None required. Interest in Formula Student and composite materials\nHands-on role assisting with manufacture of composite test panels and structures during busy periods. Log progress of manufactured parts.",
  //       degree: "Mechanical Engineering",
  //       year: "Any",
  //       count: 6,
  //     },
  //   ],
  // },
  {
    name: "AI",
    description:
      "The AI team focuses on developing and implementing autonomous driving systems, including perception, planning, and control algorithms to enable the car to navigate tracks without human intervention.",
    contact: "Wenzel Kinsky",
    members: "7",
    roles: [
      {
        title: "Junior Engineer",
        description: `Working with TBReAl to improve and maintain the autonomous driving system, you will develop skills in C/C++ programming and gain experience in autonomous vehicle technologies. This is a hands-on opportunity to develop a real-world
system which will compete across the UK and Europe. You will develop skills in dealing with an established codebase, working in a custom framework, and using version control to work reliably in a team. This is a great opportunity to develop your skills in working with autonomous systems and robotics with a codebase that achieved 3rd place in the 2025 Formula Student UK
autonomous dynamics competition.
Overall, it is a great chance to experience software development, where you can directly see the results of your system in action on a real vehicle.
Responsibilities
As a Junior Developer, you will be working in C/C++ with more senior students to
improve the current codebase.
This year, the primary goals for the team will be:
- Implementing a better logging, inspection and testing system using the MCAP format.
- Improving the current simulator to remove dependency on Unity and allow for custom physics to be implemented reliably.
- Implementing Model Predictive Control (MPC) for the vehicle's path planning and control.
- Building a new Simultaneous Localisation and Mapping (SLAM) system.
- Improving LiDAR processing with a new sensor and using custom CUDA kernels.
Requirements
Essential
- First or second year student, preferably here for 2026-2027 academic year.
- Some computational/programming experience with an ability to figure out standard development tasks and workflows independently.
- General organisational skills and the ability to work in a team.
Desirable
- Experience with C/c++ programming.
- Familiarity with CMake and Git.`,
        degree: "ME / EE / CS / IMEE / Maths / Physics",
        year: "1st/2nd Year",
        count: 3,
      },
      {
        title: "Senior Engineer",
        description: `'Working with TBReAl to improve and maintain the autonomous driving system, using C/C++ to gain experience in autonomous vehicle technologies and methods. This is a hands-on opportunity to develop a real-world system which will compete across the UK and Europe.
You will work with more junior students to help deliver the project goals and build leadership skills, gaining experience in reviewing code and maintaining a codebase collaboratively.
This is a great opportunity to develop your skills in working with autonomous systems and robotics with a codebase that achieved 3rd place in the 2025 Formula Student UK autonomous dynamics competition.
Responsibilities
As a Senior Developer, you will be working with and mentoring more junior students to improve the current codebase.
This year the primary goals for the team will be:
- Implementing a better logging, inspection and testing system using the MCAP format.
- Improving the current simulator to remove dependency on Unity and allow for custom physics to be implemented reliably.
- Implementing Model Predictive Control (MPC) for the vehicle's path planning and control.
- Building a new Simultaneous Localization and Mapping (SLAM) system.
- Improving LiDAR processing with a new sensor and using custom CUDA kernels.

Requirements
Essential
- Penultimate or final year student, preferably here for 2026-2027 academic year.
- Experience in C/C++ development.
- Experience with Git or another version control system.
- General organisational skills and ability to work in a team.
Desirable
- Experience with C/C++ programming.
- Familiarity with CMake.
- Some leadership or mentoring experience.`,
        degree: "ME / EE / CS / IMEE / Maths / Physics",
        year: "3rd/4th Year",
        count: 3,
      },
      {
        title: "Integration Engineer",
        description: `Responsible for design and integration of steering and braking systems for autonomous control. You will not only work closely with the software Al team to enable accurate control, but with Electrical, Vehicle Dynamics, and Mechanical Design teams as well. The role is critical to the full integration of the autonomous driving system into the main car.
Responsibilities:
In order to integrate the autonomous systems into the car, you will need to implement an accurate steering control system to work in tandem with manual control by fitting a steering angle sensor and shaft shaft-mounted motor. Additionally, you will design and implement a braking system to allow for autonomous braking as well as an emergency stop system.
Requirements:
Essential
- Penultimate or final year student, preferably here for 2026-2027 academic year.
- Experience with CAD software.
- Experience with basic electrical systems and wiring.
- General organisational skills and ability to work in a team.
Desirable
- Experience with vehicle dynamics and control systems.
- Experience with microcontrollers and embedded systems.`,
        degree: "Mech Eng Related / IMEE",
        year: "3rd/4th Year",
        count: 1,
      },
    ],
  },
  {
    name: "Mechanical Design",
    description:
      "The Mechanical Design team is responsible for suspension, wishbone, steering, FEA, R&D, sensor integration, procurement, and manufacturing engineering for the car's mechanical systems.",
    contact: "Huw Williams",
    members: "10-16",
    roles: [
      // {
      //   title: "Suspension & Wishbone Design Engineers",
      //   description:
      //     "Responsible for the detailed design of wishbones based on hardpoints defined by the Performance team. Develop parallel designs for both carbon and steel wishbone sets, considering manufacturability, stiffness, and weight. Collaborate with Procurement and FEA Specialists for material choice and validation, and collaborate with the chassis/composites team on carbon wishbone testing.",
      //   degree: "Mechanical / Automotive Engineering",

      //   count: 1,
      // },
      // {
      //   title: "Dynamics Design Engineers",
      //   description:
      //     "Responsible for the design of push- or pull-rod systems, rocker assemblies, and integration with damper units. Conduct studies to balance performance, compliance, mass and manufacturability. Not doing kinematic aspects.",
      //   degree: "Mechanical / Automotive Engineering",

      //   count: 1,
      // },
      // {
      //   title: "Steering and Pedal Box System Design Engineers",
      //   description:
      //     "Responsible for the design and integration of the steering column, rack, pedal box and linkages. Work closely with the Performance team to optimise rack placement and with the Chassis team to ensure compatibility with SES chassis openings. Complete verification studies on loading.",
      //   degree: "Mechanical / Automotive Engineering",

      //   count: 2,
      // },
      {
        title: "Mechanical Analysis & FEA Specialists",
        description:
          "Develop and maintain FEA models to validate mechanical component performance across the car. Improve fidelity of simulations (mesh refinement, boundary condition accuracy, correlation with physical data). Support subsystem designers (wishbones, dynamics, steering) by providing simulation insights and verification for competition documentation.",
        degree: "Mechanical / Automotive Engineering",

        count: 2,
      },
      // {
      //   title: "R&D Engineers",
      //   description:
      //     "Investigate novel mechanical concepts to improve performance or packaging. Current focuses may include damper cage designs, rod-ends alternatives, and manufacturing capability studies and component rig testing. Responsible for feasibility studies, prototyping, and early-stage validation before integration into the main car design cycle.",
      //   degree: "Mechanical / Automotive Engineering",

      //   count: "2 (Supplementary)",
      // },
      // {
      //   title: "Sensor Integration Engineers",
      //   description:
      //     "Responsible for the mechanical integration of sensors across the car. Develop brackets, mounts, and housings for strain gauges, potentiometers, accelerometers, and other data acquisition devices. Collaborate with Electrical and Telemetry teams to ensure adequate integration.",
      //   degree: "Mechanical / Mechatronics / Automotive Engineering",

      //   count: "1 (Supplementary)",
      // },
      // {
      //   title: "Procurement & Supplier Liaison",
      //   description:
      //     "Responsible for sourcing and acquiring mechanical components and materials. Liaise with suppliers and sponsors to secure parts, raise purchase orders, and manage lead times. Ensure budgetary compliance while supporting the design team with manufacturable solutions.",
      //   degree: "Any",
      //   count: 1,
      // },
      // {
      //   title: "Manufacturing Engineers",
      //   description:
      //     "Responsible for the hands-on manufacturing of small mechanical components in the student workshop. Receive training in machining and assembly processes. Assist during build season to ensure parts are produced on time and to specification. Note - One member of this group will take on the role of Co-Manufacturing Lead, responsible for managing and logging the progress of manufactured parts. They act as the primary link between designers, technicians, and student workshop users to ensure smooth communication and efficient delivery of components.",
      //   degree: "Mechanical / Automotive Engineering",
      //   count: "6 (Supplementary)",
      // },
    ],
  },
  {
    name: "Vehicle Dynamics",
    description:
      "The Vehicle Dynamics team focuses on the car's performance through suspension design, tyre modelling, data analysis, and driver feedback to optimise handling and lap times.",
    contact: "Oliver Johnson",
    additionalText: `If interested please contact Oli to arrange an informal chat. between now and then please read: "Race Car Vehicle Dynamics by Milliken & Milliken, and Tire and vehicle dynamics by pacejka" and watch the OptimumG youtube videos on Tyres, Suspension design, and performance engineering. OptimumG also have a resources page which suggest other good reading. OptimumG also have a course https://optimumg-s-school.thinkific.com/courses/vehicle-dynamics-lecture which is free to sign up to.`,
    members: "8",
    roles: [
      {
        title: "Brakes",
        description: `The TBRe Formula Student car must, by regulation, run two independent hydraulic brake systems. Historically, we have used twin 2-pot calipers on the front axle and a single 2-pot caliper on the rear axle, running DOT 4 performance fluid. Brakes have been one of the team's most challenging areas in recent years, with issues such as boiling fluid, excessive float, caliper failures, leaking lines, and weeping nipples affecting reliability.

For 2026, we are aiming for a step-change in brake system performance and reliability. This includes thermal simulations building on our current pipeline, brake pad and fluid sourcing/testing, a master cylinder redesign, improved packaging of calipers and discs with the chassis team, and a full review of bleed nipples and service procedures.

We're seeking engineers excited to tackle one of the most safety-critical systems on the car, working closely across mechanical and chassis teams to deliver a robust solution.

Are you:

Keen to get hands-on with a safety-critical system in a live motorsport environment?

Someone who enjoys both simulation and experimental testing to prove a design?

Looking to gain experience in hydraulic systems, thermal modelling, and component testing?

This role will involve:

Commitment of at least 8 hours per week throughout both semesters

Collaborating closely with mechanical and chassis teams on packaging master cylinders, reservoirs, calipers, and brake lines

Developing and running thermal simulations, then validating them through testing

Sourcing and testing brake fluids, pads, and components to improve performance and reliability

Supporting the full lifecycle: design, analysis, testing, documentation, and on-track running at Silverstone and international competitions`,
        count: 1,
        degree: "Mech eng related (including IMEE)",
        year: "3+",
      },
      //       {
      //         title: "Tyres",
      //         description: `Tyres are the only contact patch between the TBRe race car and the track surface, making them one of the most performance-defining systems. By regulation, the car must run four tyres with both wet and dry sets available. Currently, TBRe run 16x7.5-10 R20 Hoosiers on all four corners for drys and 16x60-10 W3 Hoosier for the wets.

      // For 2026, this role will focus on building a deeper understanding of tyre performance and making informed design choices. This includes evaluating alternative tyre options, writing the supporting design documentation, and developing a tyre model using TTC (Tyre Test Consortium) data. Since the available longitudinal and combined datasets are for 18” and 20” tyres, part of this challenge will be correctly determining how to scale and then scale the longitudinal and combined data to create representative models for our 16” R20 tyres. The role will also involve setting running pressures for different events, and investigating rim widths—both what is feasible with our current setup and what the team would ideally like to move towards.

      // We're seeking engineers with an analytical mindset and a curiosity for how tyre behaviour underpins vehicle performance.

      // Are you:

      // Excited to work with real-world tyre data and apply it to motorsport performance?

      // Interested in modelling, simulation, and data-driven decision making?

      // Looking to gain experience in documentation, TTC data scaling, and setup development?

      // This role will involve:

      // Commitment of at least 8 hours per week throughout both semesters

      // Analysing tyre data, supporting simulation work, and providing practical setup recommendations

      // Investigating rim width effects, sourcing supporting documentation, and guiding team choices

      // Scaling and adapting existing TTC data to model our chosen tyres accurately

      // Setting car pressures across different dynamic events and validating these choices on track

      // Supporting the team's performance at Silverstone and international competitions`,
      //         count: 1,
      //         degree: "Mech eng related (including IMEE)",
      //         year: "3+",
      //       },
      //       {
      //         title: "Kinematics and Dynamics",
      //         description: `The TBRe Formula Student car's handling is defined by its suspension geometry and how that geometry changes under load. For 2026, we are redesigning the suspension to address two critical challenges: severe inside shoulder wear on the front axle tyres and the integration of a new rear powertrain package. These changes demand a fresh look at suspension kinematics and dynamics to deliver a more consistent, controllable platform.

      // This role will design the suspension geometry, simulate the impact of geometry changes, and work closely with mechanical and chassis teams to ensure designs are manufacturable and serviceable. Key technical challenges include optimising roll-centre height, pitch centre position, camber gain, anti-dive/anti-squat, and compliance effects, while also managing platform control to support aerodynamic performance. Because aero load is highly sensitive to ride height and pitch, you will collaborate directly with the aero team to ensure stability and consistency across conditions.

      // We're seeking engineers who want to bridge theory and practice, turning suspension models into tangible on-track gains.

      // Are you:

      // Excited to tackle real-world problems like tyre wear and powertrain integration?

      // Keen to optimise suspension geometry for both mechanical grip and aerodynamic platform control?

      // Comfortable with kinematic and multibody dynamics simulation and validating models with test data?

      // Looking to gain hands-on experience in CAD, hardpoint definition, and close mechanical integration?

      // This role will involve:

      // Commitment of at least 8 hours per week throughout both semesters.

      // Designing suspension geometry, hardpoints, and linkages, and documenting design choices.

      // Running kinematic and multibody simulations to quantify the impact of geometry changes on tyre wear, powertrain packaging, and platform stability.

      // Working with the aero team to ensure suspension design supports aerodynamic consistency.

      // Collaborating with mechanical and chassis teams on manufacturable detail, including steering geometry, shimming, and inserts.

      // Correlating simulation predictions with rig and track data, iterating designs for maximum performance.

      // Supporting the full project lifecycle: requirements capture, detailed design, manufacture, test, documentation, and on-track validation at Silverstone and international events.

      // Required knowledge: Familiarity with Race Car Vehicle Dynamics by Milliken & Milliken, or an equivalent understanding of vehicle dynamics principles.`,
      //         count: 2,
      //         degree: "Mech eng related (including IMEE)",
      //         year: "3+",
      //       },
      {
        title: "Simulations",
        description: `Vehicle Simulation Engineer
The TBRe team uses IPG CarMaker, a full-car simulation tool, to develop sensitivities and define design targets. For 2026, we are looking for an engineer to provide IPG support, maintaining and expanding our simulation models. This requires a strong understanding of vehicle dynamics, computer systems, and data processing skills to manage, manipulate, and extract insights from simulation datasets.

Are you:

Comfortable with vehicle dynamics and translating theory into practical simulations?

Experienced in handling large simulation datasets and pre/post-processing results?

Keen to ensure the team's simulation pipeline is robust and ready for design decisions?

This role will involve:

Commitment of at least 8 hours per week throughout both semesters

Maintaining and expanding our IPG simulation models

Supporting the team by processing simulation results and generating reports

Collaborating with all vehicle dynamics engineers to integrate updated models

Supporting on-track and offline vehicle development through accurate simulation data

Required knowledge: Familiarity with vehicle dynamics (Milliken & Milliken or equivalent) and experience in data handling or programming for simulations.

Vehicle Simulation Engineer - OptimumG (OptimumD)

TBRe works closely with OptimumG, a consulting company providing free courses and a suite of software tools: OptimumKinematics, OptimumDynamics, and OptimumTyre. While Kinematics & Dynamics Engineers will focus on OptimumK and Tyres Engineers on OptimumTyre, we need an OptimumD engineer to integrate and simulate the full vehicle, coordinating across all subsystems.

Are you:

Interested in full-vehicle dynamics simulation, linking suspension, tyre, and powertrain models?

Comfortable learning and applying professional vehicle dynamics software?

Excited to collaborate with all members of the team to quantify design changes in terms of lap-time impact?

This role will involve:

Commitment of at least 8 hours per week throughout both semesters

Building and validating full-car models in OptimumDynamics

Coordinating with Kinematics, Dynamics, and Tyres engineers to integrate subsystem models

Producing sensitivity analyses and design target reports

Supporting simulation-led decision making to guide hardware design

Required knowledge: Strong understanding of vehicle dynamics, experience with simulation software (MATLAB/Simulink, IPG, or similar), and good data handling skills.

Vehicle Simulation Engineer - General Mathematical Modeling

Some design questions require a “good enough” first approximation before a full simulation. This engineer will create simplified mathematical models to quickly assess parameters like chassis stiffness, suspension compliance, or ride frequencies, feeding results to the OptimumD engineer for lap-time analysis.

Are you:

Comfortable building and analysing simplified models to guide design choices?

Interested in bridging the gap between conceptual design and detailed simulation?

Keen to see your calculations directly influence car setup and hardware decisions?

This role will involve:

Commitment of at least 8 hours per week throughout both semesters

Modelling vehicle and chassis behaviour using simplified mathematical approaches

Providing initial sensitivity analyses to inform full OptimumDynamics models

Collaborating closely with other simulation engineers to translate results into performance predictions

Required knowledge: Strong mathematical modelling ability, experience with MATLAB/Python, and a solid understanding of vehicle dynamics.

Vehicle Simulation Engineer - Model Validation / Data

Once simulation and real-world data are collected, they must be processed, validated, and presented for use across the team. This engineer will manage data pipelines from electronic sensors to team reports, ensuring accuracy and usability. Strong data analysis and modeling skills are required to turn raw datasets into actionable insights.

Are you:

Experienced in data processing, analysis, and validation?

Comfortable working with large datasets from multiple sources (electronics, telemetry, simulations)?

Keen to ensure that simulation and track data are fully leveraged for vehicle performance improvements?

This role will involve:

Commitment of at least 8 hours per week throughout both semesters

Developing and maintaining the workflow from raw data to run reports

Validating model predictions against track and test data

Supporting engineers by producing actionable insights from simulation and measurement data

Maintaining high standards of data quality and traceability

Required knowledge: Proficiency in data analysis and modeling, experience with MATLAB/Python or equivalent, and familiarity with vehicle dynamics.`,
        count: 4,
        degree:
          "Mech eng related, Elec related, IMEE, Comp Sci, Physics, Maths",
        year: "1+",
      },
    ],
  },
  // {
  //   name: "Electrical",
  //   description:
  //     "The Electrical team designs, builds, and tests all electronic, software, and integration systems for the car, including PCBs, wiring, embedded software, and battery management.",
  //   contact: "Brendan Ind",
  //   members: "10",
  //   roles: [
  //     {
  //       title: "Electronics Engineer",
  //       description:
  //         "The TBRe race car is powered by 8-10 custom PCBs handling safety monitoring, sensor acquisition, and data computation to maximise on-track performance.\nFor 2026, we're developing a distributed HV battery management system. Multiple cell monitoring units (CMUs) will track cell voltages and temperatures, while a central microprocessor collates this data, reports to the ECU, and runs software-driven control strategies.\nWe're seeking electronic engineers experienced in microprocessors, digital logic, and CAN/SPI interfacing to design systems that are both performant and highly reliable.\nAre you:\n- Keen to get hands-on with electronics in a practical automotive/motorsport use case?\n- A self-starter who can independently find solutions in a problem space?\n- Looking to build your CV with projects involving microprocessors, digital interfacing, high voltage/safety-critical design?\nThis role will involve:\n- Continuous commitment of at least 8 hours per week throughout both semesters\n- Attending and reporting in whole team and technical meetings about your progress and being vocal in getting support when you face blockers.\n- Supporting a project through its full lifecycle, from requirements capture through detailed design, manufacture/test and documentation.\n- The chance to support your design running on track at Silverstone and international competitions over the summer.\nThis role is open to all students, including those studying computer science, maths, physics, engineering or other degrees.\nIf you are interested, please contact Brendan so we can arrange an informal chat about your experience and how it could fit in with the team's needs.",
  //       degree: "Electrical / IMEE",
  //       year: "Any",
  //       count: 2,
  //     },
  //     {
  //       title: "Software Engineer (Embedded or Vehicle Controls)",
  //       description:
  //         "The TBRe car is powered by a suite of code running on custom microcontrollers and vehicle control units. Data acquisition/telemetry, vehicle performance, firmware and interfacing are all the responsibility of the software team at TBRe.\nThis year, we've committed to a number of technical developments including a new dual-motor powertrain and a redesigned HV battery. This will involve developing custom microcontrollers as well as the associated firmware and SPI/CAN interfacing logic to collect critical data and ensure the battery, inverters and motors are performing as expected.\nWe need software engineers who can draw on knowledge from the rest of the team covering vehicle physics, battery performance and three-phase motor controls, and implement the necessary firmware and controls strategies to connect and enable the system.\nAre you:\n- Keen to grow your skills in a practical setting?\n- A self-starter who can independently find solutions in a problem space?\n- Looking to build your CV with projects in embedded controls systems?\n- Experienced with writing code in C, C++ for embedded applications or modelling and code generation in Simulink/MATLAB?\nThis role will involve:\n- Continuous commitment of at least 8 hours per week throughout both semesters\n- Attending and reporting in whole team and technical meetings about your progress and being vocal in getting support when you face blockers.\n- Supporting a project through its full lifecycle, from requirements capture through coding, testing and calibration and documentation.\n- The chance to support your code running on track at Silverstone and international competitions over the summer.\nThis role is open to all students, including those studying computer science, maths, physics, engineering or other degrees.\nIf you are interested, please contact Brendan so we can arrange an informal chat about your experience and how it could fit in with the team's needs.",
  //       degree: "Electrical / IMEE / Computer Science",
  //       year: "Any",
  //       count: 2,
  //     },
  //     {
  //       title: "PCB & Wiring Specialist (Manufacture & Test)",
  //       description:
  //         "The TBRe race car relies on a network of custom PCBs and wiring harnesses, carrying signals across the car to ensure safety, reliability, and performance. These systems are essential, and we're looking for people who can learn to assemble and test both PCBs and wiring looms.\nYou'll need a sharp eye for detail and the ability to consistently produce high-quality, reliable work—both in manufacturing and testing hardware, as well as documenting your processes clearly. We'll provide the specific training, but you should be:\n• Eager to grow your skills in a practical, hands-on environment\n• A self-starter who can work independently and solve problems\n• Confident in your hands-on abilities, ideally with wiring or PCB projects\n• Someone who takes pride in precision and getting things right\nWhat the role involves:\n• Committing at least 8 hours per week across both semesters (especially in second semester, when we build and test systems)\n• Attending team and technical meetings, reporting progress, and asking for support when needed\n• Focusing on the build/test stage of loom and PCB design, including creating and carrying out test plans to validate our engineers' designs\n• The chance to support your systems in action on track at Silverstone and at international competitions over the summer.\nThis role is open to students from any discipline, including computer science, maths, physics, and engineering.\nIf you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
  //       degree: "Electrical / IMEE",
  //       year: "Any",
  //       count: 2,
  //     },
  //     {
  //       title: "Integration (Battery/Vehicle Systems) Engineers",
  //       description:
  //         "The electrical team still needs mechanically minded members! Although we are mostly known for pushing electrons in the right direction, we are also looking for people to specifically integrate electrical components into the car.\nKey responsibilities include:\n- Managing car assemblies in Inventor - the CAD program the team uses.\n- Designing parts and assemblies for packaging bought in and custom components.\n- Designing with Additive Manufacturing in mind (3D printing), as well as traditional metal sheet bending, turning, etc…\nFor this role, we are looking for someone who:\n- Ideally has some experience in CAD design before, regardless of software package that was used. But if you are keen to learn, do not hesitate to apply.\n- Has strong attention to detail and can interpret and design parts to meet the Formula Student UK and Germany regulations.\n- Can commit at least 8 hours per week - building a race car takes time, and as an Integration Engineer you'll work across multiple system areas.\n- Works independently and takes initiative, but isn't afraid to ask for help when needed. You'll be expected to design parts using both the rules and your own engineering creativity - there's no single “right answer.”\n- Communicates ideas clearly and has excellent spatial reasoning skills. The ability to mentally visualise assemblies and understand how components fit together is highly valuable in this role.\nIf you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
  //       degree: "Electrical / Mechanical / Aero/Automotive",
  //       year: "Any",
  //       count: 2,
  //     },
  //     {
  //       title: "Performance Engineer (E-Powertrain)",
  //       description:
  //         "TBRe runs an electric powertrain. Energy stored in the “Accumulator” (our battery) is delivered to two rear-wheel motors. These motors are powered by “inverters,” which convert the Accumulator's DC voltage into a three-phase AC wave.\nThe inverters are controlled by a central ECU, which translates driver inputs into a “torque request.” Your role will be to work with the inverters and control algorithms to extract maximum performance from the powertrain.\nWe are looking for someone who:\n• Has some experience in data processing (e.g. Python and Pandas) to analyse past car performance and extract insights.\n• Is interested in optimising race car control strategies.\n• Is willing to learn or has experience with MATLAB/Simulink.\n• Has a solid theoretical background and can apply physics and maths concepts in practice.\nDon't worry if this sounds complex — the role can range from analysing past data to implementing advanced control strategies, depending on your experience.\nWe welcome applicants from electrical engineering, computer science, and mathematics backgrounds. If you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
  //       degree:
  //         "Electrical / IMEE / Computer Science (data) / Mech of any type (if you're interested in control theory)",
  //       year: "Any",
  //       count: 1,
  //     },
  //     {
  //       title: "Supply Chain and Build Specialist",
  //       description:
  //         "Building a racecar is as much a huge resource management task as it is an engineering competition. This is why we want someone in the electrical systems team dedicated to resource allocation - a role which specifically handles how parts are sourced, assembled, stored and put on the car as build season progresses.\nThis role can be a good less technical role to start out in the team if you are interested in the operations side of motorsport, not just the technical element.\nThat being said, we need someone who is willing to learn/is familiar with:\n- How electronic assemblies get built, this includes PCBs, additively manufactured parts (3D prints), metal assemblies and looms/connectors.\n- CAD to some degree - we use Inventor but if you have experience with parts and assemblies in any software then this helps.\n- Being very organised, almost OCD, and who is self-motivated when it comes to tracking where parts and deliveries are, what parts are needed when, and the quality of those parts.\n- Being a to take initiative and build the tools that they think they will need to help the team perform better - for example, Excel spreadsheets or other management software.\nIn this role, you will be responsible for:\n- Ensuring BOMs (bills of materials) for PCBs are constructed and ordered.\n- Ensuring that the Elec Systems' timelines are continually updated and reflect the actual state of the project\n- Feeding back to management or peers about the progress of the project from an electrical perspective.\nWe are looking to accept anyone from any degree, as long as they are competent in understanding the electrical system components - you do not have to be pursuing a technical degree. In fact, in this role it can be beneficial not being an engineer!\nIf you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
  //       degree:
  //         "Any degree! Economics, maths, physics, psychology, computer science, engineering of any type.",
  //       year: "Any",
  //       count: 1,
  //     },
  //   ],
  // },
  //   {
  //     name: "Marketing",
  //     description:
  //       "The Marketing team is responsible for promoting the team, securing sponsorship, managing social media, and handling public relations to enhance the team's visibility and engagement.",
  //     contact: "Torey Boss",
  //     members: "8-9",
  //     roles: [
  //       {
  //         title: "Marketing Team Member",
  //         count: "4",
  //         year: "Any",
  //         degree: "Any Business and Management style degrees",
  //         description: `Do you have a passion for F1 or Marketing? Are you looking for a role that fits in with your degree? Do you want to stand out when applying for placements?

  // As a marketing team member, you'll be helping us promote the team to members of the university, alumni, current and potential sponsors and the public. It's a hands-on role where you'll get stuck into a bit of everything: creating social media content, writing captions, helping with posting schedules and supporting the team at events throughout the year.

  // We're looking for someone who's enthusiastic, hard-working and willing to take on a variety of tasks. Your workload will change dependent on the time of the year, but you must be able to commit to weekly meetings that will be fitted around all team members timetables. You'll be a part of a friendly and cooperative team where there's always something going on. It's a great chance to get involved, learn some new skills and maybe even find a new interest!`,
  //       },
  //       {
  //         title: "TikTok Lead",
  //         count: "2",
  //         year: "Any",
  //         degree: "Any Business and Management style degrees",
  //         description: `We're looking for someone to take the lead on growing TBRe's presence on TikTok and showing off what goes on behind the scenes of building a Formula Student car.

  // As a TikTok lead, you'll be the go-to person for creating fun, engaging and creative content that shows who TBRe are and what we're made up of. The sorts of tasks you will be doing include...

  // - Planning, filming and editing TikToks (with support from the marketing team)
  // - Jumping on trends and adapting them to fit TBRe
  // - Coming up with original concepts to showcase the team's work and personality
  // - Working closely with other social media leads to ensure consistency
  // - Helping us grow our audience and have fun with it along the way!

  // What we're looking for...

  // - Someone who is confident filming content and being around the team
  // - Some basic editing skills (CapCut, Premiere Pro or just in-app)
  // - A creative, self-motivated individual who is up for trying new ideas
  // - Someone who keeps up to date with current trends on the app

  // This is a fun and flexible role, perfect if you want to get involved with a team, build your content skills and have a talking point when applying for placements. You must be able to commit to weekly meetings scheduled around timetable hours and ideally 2 TikToks are to be made every week (this may vary depending on the time of the year).`,
  //       },
  //       {
  //         title: "Content and Design Leads",
  //         count: "2-3",
  //         year: "Any",
  //         degree: "Any Business and Management style degrees",
  //         description: `We're looking for someone to take charge of designing content for our social media and website, to ensure TBRe looks as good online as we do on the track!

  // As our Content and Design Lead, you'll be creating posts in Canva (this is preferred, but if you are more comfortable using other tools please state) to help us keep our social media looking polish and consistent. You'll also be editing team headshots, working on event graphics and jumping on anything visual that needs doing.

  // Your tasks may include...

  // - Designing posts and stories for Instagram and LinkedIn
  // - Creating graphics for events and team updates
  // - Editing and formatting team headshots and other photos
  // - Keeping our visual style consistent across platforms
  // - Working closely with the rest of the marketing team to plan content

  // What we're looking for...

  // - Confident using Canva (or similar design tools)
  // - A good eye for layout, fonts and colour
  // - Ability to edit photos and videos
  // - Organised and happy working to a loose content plan
  // - Bonus if you have used tools such as Photoshop or Lightroom

  // This is a great role if you are creative and want to build up a design portfolio while working as part of a hands-on team. You'll have plenty of freedom to try new ideas, improve your skills and make TBRe stand out online. You must be willing to commit to weekly meetings that are scheduled around team members timetable hours.`,
  //       },
  //     ],
  //   },
  {
    name: "Business Operations",
    description:
      "The Business Operations team handles the business aspects of the team, including sponsorship acquisition, financial planning, and stakeholder communications to ensure the team's sustainability and growth.",
    contact: "Nithi Muthu Saravanan",
    members: "3-4",
    roles: [
      {
        title: "Business Operations Team Member",
        description: `In this role, you'll help develop a real-world business case for the Business Plan Presentation (BPP), create and rehearse a professional pitch to industry judges, and support sponsor relationships while exploring new partnerships. You'll contribute to business operations, financial planning, and stakeholder communications, while also collaborating with the technical and media teams to showcase TBRe26's innovation to sponsors, alumni, and the public. The role also includes merchandise design and sales, helping build our brand presence and engage with supporters. This is a fantastic opportunity to gain hands-on experience and make a real impact on TBRe26's success both on and off the track.`,
        degree: "Any degree",
        year: "Any",
        count: "3-4",
      },
    ],
  },
  // {
  //   name: "Costing",
  //   description: `The Costing team is responsible for managing the financial aspects of the project, including budgeting, cost analysis, and ensuring compliance with competition regulations related to cost and manufacturing.`,
  //   contact: "Nithi Muthu Saravanan",
  //   members: "2",
  //   roles: [
  //     {
  //       title: "Cost and Manufacturing Lead",
  //       description: `As a Cost & Manufacturing Engineer, you will play a key role in the Formula Student project by managing the cost and manufacturing documentation for the competition. This involves preparing a detailed Bill of Materials (BOM), Costed Bill of Materials (CBOM), and supporting evidence that demonstrate the team's understanding of manufacturing processes, supply chain, and financial management. You will ensure compliance with Formula Student rules, optimise cost efficiency, and highlight the teams costing design decisions.`,
  //       degree: "Any degree with interest in Excel",
  //       year: "Any",
  //       count: 2,
  //     },
  //   ],
  // },
] as const;
