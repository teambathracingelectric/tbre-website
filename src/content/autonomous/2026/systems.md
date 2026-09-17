---
section: systems

intro: "Cones in, brake pressure out. Six modules carry the car around the track, and two more keep us honest about whether it works."

systems:
  - category: "Sense"
    name: "Perception"
    description: "Cone detection and classification from camera and LiDAR, moving to a new sensor with custom CUDA kernels."

  - category: "Locate"
    name: "SLAM"
    description: "Where the car is and where the track goes, solved at once. Being rebuilt this season."

  - category: "Decide"
    name: "Control"
    description: "Path planning and vehicle control, moving to Model Predictive Control."

  - category: "Command"
    name: "VCU"
    description: "Mission select, state machine and the safety checks between software and car."

  - category: "Act"
    name: "Emergency Braking"
    description: "The EBS: autonomous braking under normal missions, and a fail-safe stop the moment anything looks wrong."

  - category: "Act"
    name: "Autonomous Steering"
    description: "A shaft-mounted motor and angle sensor that steer the car without shutting out the driver."

tools:
  - name: "Sim"
    description: "Our own simulator. Every mission runs here before it runs on track, with physics we can change and trust."

  - name: "Logs & Tracking"
    description: "MCAP logging and inspection, so any run can be replayed, compared and regression-tested."

joinText: "Want to learn more about these projects and work on them yourself?"
joinButton: "Join the team →"
---