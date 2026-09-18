---
section: systems

intro: "The hard part of driverless isn't any single system — it's getting all of them working at once. Plenty of teams have strong parts that never meet. So this year we're building a working version of every block below, owned end to end by the students who built it, and running them together on track as early as we can."

systems:
  - category: "Sense"
    name: "Perception"
    description: "LiDAR and stereo camera turned into a list of cones the car can trust. Everything downstream inherits its mistakes, which makes it the biggest single lever we have."

  - category: "Locate"
    name: "SLAM"
    description: "Builds the map of the track and works out where the car sits in it. Once a lap is mapped, the car stops reacting cone to cone and starts driving a track it already knows."

  - category: "Decide"
    name: "Control"
    description: "Turns the map into a racing line, and the line into steering and throttle. This is where lap time comes from, and where the move to Model Predictive Control should buy us the most."

  - category: "Command"
    name: "VCU"
    description: "The gatekeeper between our code and the car. It holds the mission state, converts what the software asks for into what the car can safely do, and refuses anything that doesn't add up."

  - category: "Act"
    name: "Emergency Braking"
    description: "Brakes the car in normal running, and stops it on its own the moment anything looks wrong. No autonomous car passes scrutineering without one, so it decides whether we run at all."

  - category: "Act"
    name: "Autonomous Steering"
    description: "A motor and angle sensor on the steering column that can drive the car and still hand it straight back to a driver. Designed with the main team so TBRe27 loses nothing by carrying it."

tools:
  - name: "Sim"
    description: "Our own Unity simulator, so a mission is driven hundreds of times before it's driven once for real. Track time is the scarcest thing we have, and this is how we stop wasting it."

  - name: "Logs & Tracking"
    description: "Every run is recorded and replayable, so something seen once on track can be taken apart at a desk. It stops the same bug being debugged twice, and backs up what we tell the judges."

joinText: "Want to learn more about these projects and work on them yourself?"
joinButton: "Join the team →"
---
