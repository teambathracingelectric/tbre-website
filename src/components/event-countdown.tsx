import eventsData from "@/data/events";

export default function EventCountdown() {
  const nextEvent = eventsData.sort(
    (a, b) => a.date.getTime() - b.date.getTime(),
  )[0];

  if (!nextEvent) {
    return null;
  }

  const daysToEvent = Math.ceil(
    (nextEvent.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="text-white p-2 w-full flex justify-center items-center bg-tbre-yellow">
      <p className="text-sm">
        <span className="font-bold">Next {nextEvent?.type ?? "Event"}:</span> {nextEvent.name} in{" "}
        {daysToEvent} days!
      </p>
    </div>
  );
}
