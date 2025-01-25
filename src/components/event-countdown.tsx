"use client";

import { eventsData } from "@/data/events";
import { TimerIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = +targetDate - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
}

export function EventCountdown() {
  const nextEvent = useMemo(
    () =>
      eventsData
        .filter((event) => event.date.getTime() > Date.now())
        .sort((a, b) => a.date.getTime() - b.date.getTime())[0],
    [],
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(
      () => setTimeLeft(calculateTimeLeft(nextEvent.date)),
      1000,
    );

    return () => clearInterval(timer);
  }, [nextEvent]);

  if (
    !nextEvent ||
    (timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0)
  ) {
    return null;
  }

  return (
    <div className="bg-tbre-blue py-4 text-white w-full">
      <div className="mx-auto container flex flex-col items-center justify-between gap-4 sm:flex-row px-4">
        <div className="flex items-center gap-2">
          <TimerIcon className="h-5 w-5 text-tbre-yellow" />
          <span className="font-medium text-center">
            <span className="hidden sm:inline">
              Next {nextEvent.type ?? "Event"}:{" "}
            </span>
            {nextEvent.name}
          </span>
        </div>

        <div className="flex gap-4 text-sm">
          <div className="text-center">
            <span className="block text-xl font-bold text-tbre-yellow">
              {timeLeft.days}
            </span>
            <span className="text-white/80">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-tbre-yellow">
              {timeLeft.hours}
            </span>
            <span className="text-white/80">Hours</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-tbre-yellow">
              {timeLeft.minutes}
            </span>
            <span className="text-white/80">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-tbre-yellow">
              {timeLeft.seconds}
            </span>
            <span className="text-white/80">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
