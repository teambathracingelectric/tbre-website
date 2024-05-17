"use client";

import { eventsData } from "@/data/events";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useMemo, useState } from "react";

dayjs.extend(duration);

export default function EventCountdown() {
  const nextEvent = useMemo(() => {
    return eventsData
      .filter((event) => event.date.getTime() > Date.now())
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0];
  }, [eventsData]);

  if (!nextEvent) {
    return null;
  }

  const [remainingTime, setRemainingTime] = useState<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    years: 0,
    months: 0,
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

      const years = duration.years();
      const months = duration.months();
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setRemainingTime({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1_000);

    return () => clearInterval(interval);
  }, []);

  if (
    remainingTime.years === 0 &&
    remainingTime.months === 0 &&
    remainingTime.days === 0 &&
    remainingTime.hours === 0 &&
    remainingTime.minutes === 0 &&
    remainingTime.seconds === 0
  ) {
    return null;
  }

  return (
    <div className="text-white p-2 w-full flex justify-center items-center bg-tbre-yellow">
      <p className="md:text-lg">
        <span className="font-bold">Next {nextEvent?.type ?? "Event"}:</span>{" "}
        {nextEvent.name} in {remainingTime.months}m, {remainingTime.days}d,{" "}
        {remainingTime.hours}h, {remainingTime.minutes}m,{" "}
        {remainingTime.seconds}s
      </p>
    </div>
  );
}
