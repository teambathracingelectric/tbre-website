import { ShowMoreText } from "@/components/show-more-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teams: {
  name: string;
  description: string;
  contact: string;
  members: string;
  roles: {
    title: string;
    description: string;
    degree: string;
    year: string;
    count: string | number;
  }[];
}[] = [
  {
    name: "Aerodynamics",
    description:
      "The Aerodynamics team pushes the boundaries of vehicle performance through advanced simulation, design, and testing. Roles include CFD, composite design, and thermal management.",
    contact: "Alexander Crisan",
    members: "11",
    roles: [
      {
        title: "Aerodynamic Performance Engineer",
        description:
          "Work alongside the vehicle performance and vehicle dynamics group to develop a top-level development methodology. Conduct aerodynamic performance analysis of previous competition data. Provide recommendations for aerodynamic targets and development direction. Build tools to quantify aerodynamic gains in lap time/points. Support CFD validation programs.",
        degree: "Aerospace / Automotive / Mechanical / Integrated Engineering",
        year: "3rd/4th",
        count: 2,
      },
      {
        title: "Aerodynamicist",
        description:
          "Develop aerodynamic solutions that deliver performance, under the direction of the Aerodynamic Lead. Ensure that ideas and designs are legal. Manage your own projects effectively through the design, CFD, part preparation and wind tunnel test process. Create CAD geometry (Solid Modelling/Surfacing) under the direction of the Aerodynamic Lead. Submit CFD cases, deliver CFD analysis and input for your area of the car.",
        degree: "Aerospace / Automotive Engineering",
        year: "3rd/4th",
        count: 3,
      },
      {
        title: "Aerodynamic Composite Designers",
        description:
          "Build analytical tools for structural analysis. Develop and build Finite Element (FE) models for composite structural analysis. Design and execute experiments/physical testing to validate tools. Complete composite laminate and internal structure design for all aerodynamic devices. Support and lead manufacturing effort.",
        degree: "Aerospace / Automotive / Mechanical / Integrated Engineering",
        year: "3rd/4th",
        count: 3,
      },
      {
        title: "Thermal Engineers",
        description:
          "Responsible for the development of innovative and effective thermal solutions for powertrain and accumulator (high voltage battery) cooling systems. Use 1D / 3D simulations, to investigate concepts and complete design validation against targets. Work closely with our Aerodynamic, Powertrain and vehicle performance group to implement thermal solutions. Contribute to the calibration and correlation of computational and physical modelling toolsets use for thermal predictions. Investigate and validate concepts with test benches and track testing.",
        degree: "Aerospace / Automotive / Mechanical / Integrated Engineering",
        year: "3rd/4th",
        count: 2,
      },
      {
        title: "CFD Workflow Engineer",
        description:
          "Contribute to the overall CFD process development, Impact how CFD is used by the whole aerodynamic department, Improve CFD models to increase accuracy of prediction, Work closely with external software providers to improve utility, Help set future directions and trends in CFD Methods, Implement tools to automate CFD workflow.",
        degree: "All, Computer Science, Mathematics",
        year: "All",
        count: 1,
      },
    ],
  },
  {
    name: "Chassis",
    description:
      "The Chassis team is responsible for the design, analysis, and manufacture of the car's structural components, including the monocoque, roll hoop, and other metallic and composite structures.",
    contact: "Sam Utley",
    members: "6-11",
    roles: [
      {
        title: "Composite Design Engineer - Laminate",
        description:
          "Monocoque laminate optimisation\nExperience: Composite structural analysis and manufacture. Previous TBRe involvement and experience with SES ideal.\nResponsible for developing the laminate for the monocoque via FEA modelling and calculations. Collaborate with other team members to manufacture test panels and record results in the SES.",
        degree: "Mechanical or Aerospace Engineering",
        year: "3rd/4th Year",
        count: 2,
      },
      {
        title: "Composite Design Engineer - Inserts and Attachments",
        description:
          "Insert design and FEA modelling\nExperience: Composite structural analysis and manufacture. Understanding of insert design and FEA experience. Previous TBRe involvement and experience with SES ideal.\nResponsible for FEA modelling of inserts and mass optimisation of inserts throughout the car. Log design and manufacture progress of components. Collaborate with other team members to manufacture test panels and record results in the SES.",
        degree: "Mechanical or Aerospace Engineering",
        year: "3rd/4th Year",
        count: 1,
      },
      {
        title: "Mechanical Design Engineer - Metallic Structures",
        description:
          "Roll hoop design and optimisation\nExperience: Strong CAD skills and metallic FEA skills. Previous TBRe involvement and experience with SES ideal but not required.\nResponsible for CAD modelling, technical drawings and procurement of roll hoops. Responsible for mass optimisation of the metallic structures and sub-assemblies as well as producing FEA reports and contributing to SES documentation.",
        degree: "Mechanical or Aerospace Engineering",
        year: "3rd/4th Year",
        count: 2,
      },
      {
        title: "Manufacture Support",
        description:
          "Assisting with composites manufacture\nExperience: None required. Interest in Formula Student and composite materials\nHands-on role assisting with manufacture of composite test panels and structures during busy periods. Log progress of manufactured parts.",
        degree: "Mechanical Engineering",
        year: "Any",
        count: 6,
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
      {
        title: "Suspension & Wishbone Design Engineers",
        description:
          "Responsible for the detailed design of wishbones based on hardpoints defined by the Performance team. Develop parallel designs for both carbon and steel wishbone sets, considering manufacturability, stiffness, and weight. Collaborate with Procurement and FEA Specialists for material choice and validation, and collaborate with the chassis/composites team on carbon wishbone testing.",
        degree: "Mechanical / Automotive Engineering",
        year: "",
        count: 1,
      },
      {
        title: "Dynamics Design Engineers",
        description:
          "Responsible for the design of push- or pull-rod systems, rocker assemblies, and integration with damper units. Conduct studies to balance performance, compliance, mass and manufacturability. Not doing kinematic aspects.",
        degree: "Mechanical / Automotive Engineering",
        year: "",
        count: 1,
      },
      {
        title: "Steering and Pedal Box System Design Engineers",
        description:
          "Responsible for the design and integration of the steering column, rack, pedal box and linkages. Work closely with the Performance team to optimise rack placement and with the Chassis team to ensure compatibility with SES chassis openings. Complete verification studies on loading.",
        degree: "Mechanical / Automotive Engineering",
        year: "",
        count: 2,
      },
      {
        title: "Mechanical Analysis & FEA Specialists",
        description:
          "Develop and maintain FEA models to validate mechanical component performance across the car. Improve fidelity of simulations (mesh refinement, boundary condition accuracy, correlation with physical data). Support subsystem designers (wishbones, dynamics, steering) by providing simulation insights and verification for competition documentation.",
        degree: "Mechanical / Automotive Engineering",
        year: "",
        count: 2,
      },
      {
        title: "R&D Engineers",
        description:
          "Investigate novel mechanical concepts to improve performance or packaging. Current focuses may include damper cage designs, rod-ends alternatives, and manufacturing capability studies and component rig testing. Responsible for feasibility studies, prototyping, and early-stage validation before integration into the main car design cycle.",
        degree: "Mechanical / Automotive Engineering",
        year: "",
        count: "2 (Supplementary)",
      },
      {
        title: "Sensor Integration Engineers",
        description:
          "Responsible for the mechanical integration of sensors across the car. Develop brackets, mounts, and housings for strain gauges, potentiometers, accelerometers, and other data acquisition devices. Collaborate with Electrical and Telemetry teams to ensure adequate integration.",
        degree: "Mechanical / Mechatronics / Automotive Engineering",
        year: "",
        count: "1 (Supplementary)",
      },
      {
        title: "Procurement & Supplier Liaison",
        description:
          "Responsible for sourcing and acquiring mechanical components and materials. Liaise with suppliers and sponsors to secure parts, raise purchase orders, and manage lead times. Ensure budgetary compliance while supporting the design team with manufacturable solutions.",
        degree: "Any",
        year: "",
        count: 1,
      },
      {
        title: "Manufacturing Engineers",
        description:
          "Responsible for the hands-on manufacturing of small mechanical components in the student workshop. Receive training in machining and assembly processes. Assist during build season to ensure parts are produced on time and to specification. Note - One member of this group will take on the role of Co-Manufacturing Lead, responsible for managing and logging the progress of manufactured parts. They act as the primary link between designers, technicians, and student workshop users to ensure smooth communication and efficient delivery of components.",
        degree: "Mechanical / Automotive Engineering",
        year: "",
        count: "6 (Supplementary)",
      },
    ],
  },
  {
    name: "Vehicle Dynamics",
    description: "The Vehicle Dynamics team focuses on the car's performance through suspension design, tyre modelling, data analysis, and driver feedback to optimise handling and lap times.",
    "contact": "Oliver Johnson",
    members: "8",
    roles: [],
  },
  {
    name: "Electrical",
    description:
      "The Electrical team designs, builds, and tests all electronic, software, and integration systems for the car, including PCBs, wiring, embedded software, and battery management.",
    contact: "Brendan Ind",
    members: "10",
    roles: [
      {
        title: "Electronics Engineer",
        description:
          "The TBRe race car is powered by 8-10 custom PCBs handling safety monitoring, sensor acquisition, and data computation to maximise on-track performance.\nFor 2026, we're developing a distributed HV battery management system. Multiple cell monitoring units (CMUs) will track cell voltages and temperatures, while a central microprocessor collates this data, reports to the ECU, and runs software-driven control strategies.\nWe're seeking electronic engineers experienced in microprocessors, digital logic, and CAN/SPI interfacing to design systems that are both performant and highly reliable.\nAre you:\n- Keen to get hands-on with electronics in a practical automotive/motorsport use case?\n- A self-starter who can independently find solutions in a problem space?\n- Looking to build your CV with projects involving microprocessors, digital interfacing, high voltage/safety-critical design?\nThis role will involve:\n- Continuous commitment of at least 8 hours per week throughout both semesters\n- Attending and reporting in whole team and technical meetings about your progress and being vocal in getting support when you face blockers.\n- Supporting a project through its full lifecycle, from requirements capture through detailed design, manufacture/test and documentation.\n- The chance to support your design running on track at Silverstone and international competitions over the summer.\nThis role is open to all students, including those studying computer science, maths, physics, engineering or other degrees.\nIf you are interested, please contact Brendan so we can arrange an informal chat about your experience and how it could fit in with the team's needs.",
        degree: "Electrical / IMEE",
        year: "Any",
        count: 2,
      },
      {
        title: "Software Engineer (Embedded or Vehicle Controls)",
        description:
          "The TBRe car is powered by a suite of code running on custom microcontrollers and vehicle control units. Data acquisition/telemetry, vehicle performance, firmware and interfacing are all the responsibility of the software team at TBRe.\nThis year, we've committed to a number of technical developments including a new dual-motor powertrain and a redesigned HV battery. This will involve developing custom microcontrollers as well as the associated firmware and SPI/CAN interfacing logic to collect critical data and ensure the battery, inverters and motors are performing as expected.\nWe need software engineers who can draw on knowledge from the rest of the team covering vehicle physics, battery performance and three-phase motor controls, and implement the necessary firmware and controls strategies to connect and enable the system.\nAre you:\n- Keen to grow your skills in a practical setting?\n- A self-starter who can independently find solutions in a problem space?\n- Looking to build your CV with projects in embedded controls systems?\n- Experienced with writing code in C, C++ for embedded applications or modelling and code generation in Simulink/MATLAB?\nThis role will involve:\n- Continuous commitment of at least 8 hours per week throughout both semesters\n- Attending and reporting in whole team and technical meetings about your progress and being vocal in getting support when you face blockers.\n- Supporting a project through its full lifecycle, from requirements capture through coding, testing and calibration and documentation.\n- The chance to support your code running on track at Silverstone and international competitions over the summer.\nThis role is open to all students, including those studying computer science, maths, physics, engineering or other degrees.\nIf you are interested, please contact Brendan so we can arrange an informal chat about your experience and how it could fit in with the team's needs.",
        degree: "Electrical / IMEE / Computer Science",
        year: "Any",
        count: 2,
      },
      {
        title: "PCB & Wiring Specialist (Manufacture & Test)",
        description:
          "The TBRe race car relies on a network of custom PCBs and wiring harnesses, carrying signals across the car to ensure safety, reliability, and performance. These systems are essential, and we're looking for people who can learn to assemble and test both PCBs and wiring looms.\nYou'll need a sharp eye for detail and the ability to consistently produce high-quality, reliable work—both in manufacturing and testing hardware, as well as documenting your processes clearly. We'll provide the specific training, but you should be:\n• Eager to grow your skills in a practical, hands-on environment\n• A self-starter who can work independently and solve problems\n• Confident in your hands-on abilities, ideally with wiring or PCB projects\n• Someone who takes pride in precision and getting things right\nWhat the role involves:\n• Committing at least 8 hours per week across both semesters (especially in second semester, when we build and test systems)\n• Attending team and technical meetings, reporting progress, and asking for support when needed\n• Focusing on the build/test stage of loom and PCB design, including creating and carrying out test plans to validate our engineers' designs\n• The chance to support your systems in action on track at Silverstone and at international competitions over the summer.\nThis role is open to students from any discipline, including computer science, maths, physics, and engineering.\nIf you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
        degree: "Electrical / IMEE",
        year: "Any",
        count: 2,
      },
      {
        title: "Integration (Battery/Vehicle Systems) Engineers",
        description:
          "The electrical team still needs mechanically minded members! Although we are mostly known for pushing electrons in the right direction, we are also looking for people to specifically integrate electrical components into the car.\nKey responsibilities include:\n- Managing car assemblies in Inventor - the CAD program the team uses.\n- Designing parts and assemblies for packaging bought in and custom components.\n- Designing with Additive Manufacturing in mind (3D printing), as well as traditional metal sheet bending, turning, etc…\nFor this role, we are looking for someone who:\n- Ideally has some experience in CAD design before, regardless of software package that was used. But if you are keen to learn, do not hesitate to apply.\n- Has strong attention to detail and can interpret and design parts to meet the Formula Student UK and Germany regulations.\n- Can commit at least 8 hours per week - building a race car takes time, and as an Integration Engineer you'll work across multiple system areas.\n- Works independently and takes initiative, but isn't afraid to ask for help when needed. You'll be expected to design parts using both the rules and your own engineering creativity - there's no single “right answer.”\n- Communicates ideas clearly and has excellent spatial reasoning skills. The ability to mentally visualise assemblies and understand how components fit together is highly valuable in this role.\nIf you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
        degree: "Electrical / Mechanical / Aero/Automotive",
        year: "Any",
        count: 2,
      },
      {
        title: "Performance Engineer (E-Powertrain)",
        description:
          "TBRe runs an electric powertrain. Energy stored in the “Accumulator” (our battery) is delivered to two rear-wheel motors. These motors are powered by “inverters,” which convert the Accumulator's DC voltage into a three-phase AC wave.\nThe inverters are controlled by a central ECU, which translates driver inputs into a “torque request.” Your role will be to work with the inverters and control algorithms to extract maximum performance from the powertrain.\nWe are looking for someone who:\n• Has some experience in data processing (e.g. Python and Pandas) to analyse past car performance and extract insights.\n• Is interested in optimising race car control strategies.\n• Is willing to learn or has experience with MATLAB/Simulink.\n• Has a solid theoretical background and can apply physics and maths concepts in practice.\nDon't worry if this sounds complex — the role can range from analysing past data to implementing advanced control strategies, depending on your experience.\nWe welcome applicants from electrical engineering, computer science, and mathematics backgrounds. If you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
        degree:
          "Electrical / IMEE / Computer Science (data) / Mech of any type (if you're interested in control theory)",
        year: "Any",
        count: 1,
      },
      {
        title: "Supply Chain and Build Specialist",
        description:
          "Building a racecar is as much a huge resource management task as it is an engineering competition. This is why we want someone in the electrical systems team dedicated to resource allocation - a role which specifically handles how parts are sourced, assembled, stored and put on the car as build season progresses.\nThis role can be a good less technical role to start out in the team if you are interested in the operations side of motorsport, not just the technical element.\nThat being said, we need someone who is willing to learn/is familiar with:\n- How electronic assemblies get built, this includes PCBs, additively manufactured parts (3D prints), metal assemblies and looms/connectors.\n- CAD to some degree - we use Inventor but if you have experience with parts and assemblies in any software then this helps.\n- Being very organised, almost OCD, and who is self-motivated when it comes to tracking where parts and deliveries are, what parts are needed when, and the quality of those parts.\n- Being a to take initiative and build the tools that they think they will need to help the team perform better - for example, Excel spreadsheets or other management software.\nIn this role, you will be responsible for:\n- Ensuring BOMs (bills of materials) for PCBs are constructed and ordered.\n- Ensuring that the Elec Systems' timelines are continually updated and reflect the actual state of the project\n- Feeding back to management or peers about the progress of the project from an electrical perspective.\nWe are looking to accept anyone from any degree, as long as they are competent in understanding the electrical system components - you do not have to be pursuing a technical degree. In fact, in this role it can be beneficial not being an engineer!\nIf you're interested, please contact Brendan to arrange an informal chat about your experience and how you could contribute to the team.",
        degree:
          "Any degree! Economics, maths, physics, psychology, computer science, engineering of any type.",
        year: "Any",
        count: 1,
      },
    ],
  },
] as const;

export function RecruitmentSection() {
  return (
    <section className="container px-4 py-16 mx-auto">
      {teams.map((team) => (
        <div key={team.name} className="mb-12">
          <div className="mb-12">
            <h2 className="text-center text-2xl font-bold text-zinc-900">
              {team.name} Team Roles
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
              {team.description}
            </p>
            <div className="flex flex-col items-center mt-2 mb-2">
              <span className="text-sm text-zinc-500">
                <strong>Contact:</strong> {team.contact} &nbsp;|&nbsp;{" "}
                <strong>Members:</strong> {team.members}
              </span>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                asChild
                size="lg"
                className="bg-tbre-yellow hover:bg-tbre-yellow/90 text-white"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ij1-N6FOLUKwrY_MiUBrnuaHFEKzAxRImIds5xrI0glUOEhZSVQ4OUhQUFJYMFdESVgyQzY2TDNWSC4u"
                >
                  Apply to Join
                </a>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.roles.map((role) => (
              <Card key={role.title} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="mb-2 text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ShowMoreText text={role.description} maxLength={550} />
                  <ul className="mb-2 text-gray-600">
                    <li>
                      <strong>Preferred Degree:</strong> {role.degree}
                    </li>
                    <li>
                      <strong>Preferred Year:</strong> {role.year}
                    </li>
                    <li>
                      <strong>Number of roles:</strong> {role.count}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
