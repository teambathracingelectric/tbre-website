"use client";

import eventsData from "@/data/events";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

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

  const [remainingTime, setRemainingTime] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = dayjs();
      const targetTime = dayjs(nextEvent.date);

      const duration = dayjs.duration(targetTime.diff(currentTime));

      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setRemainingTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1_000);

    return () => clearInterval(interval);
  }, []);

  if (
    remainingTime.days === 0 &&
    remainingTime.hours === 0 &&
    remainingTime.minutes === 0 &&
    remainingTime.seconds === 0
  ) {
    return;
  }

  return (
    <div className="text-white p-2 w-full flex justify-center items-center bg-tbre-yellow">
      <p className="text-lg">
        <span className="font-bold">Next {nextEvent?.type ?? "Event"}:</span>{" "}
        {/* {nextEvent.name} in {daysToEvent} days! */}
        {nextEvent.name} in {remainingTime.days}d, {remainingTime.hours}h,{" "}
        {remainingTime.minutes}m, {remainingTime.seconds}s
      </p>
    </div>
  );
}
