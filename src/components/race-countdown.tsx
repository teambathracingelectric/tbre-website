import racesData from "@/data/races";

export default function RaceCountdown() {
  const nextRace = racesData.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  )[0];

  if (!nextRace) {
    return null;
  }

  const daysToRace = Math.ceil(
    (nextRace.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="text-white p-2 w-full flex justify-center items-center bg-tbre-yellow">
      <p className="text-sm">
        <span className="font-bold">Next Race:</span> {nextRace.name} in{" "}
        {daysToRace} days!
      </p>
    </div>
  );
}
