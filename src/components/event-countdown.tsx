"use client";

import { TimerIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { eventsData } from "@/data/events";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = +targetDate - Date.now();

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
    if (!nextEvent) {
      return;
    }

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
    <div className="w-full bg-tbre-blue py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <TimerIcon className="h-5 w-5 text-tbre-yellow" />
          <span className="text-center font-medium">
            <span className="hidden sm:inline">
              Next {nextEvent.type ?? "Event"}:{" "}
            </span>
            {nextEvent.link ? (
              <a
                href={nextEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-tbre-yellow"
              >
                {nextEvent.name}
              </a>
            ) : (
              nextEvent.name
            )}
          </span>
        </div>

        <div className="flex gap-4 text-sm">
          <div className="text-center">
            <span className="block font-bold text-tbre-yellow text-xl">
              {timeLeft.days}
            </span>
            <span className="text-white/80">Days</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-tbre-yellow text-xl">
              {timeLeft.hours}
            </span>
            <span className="text-white/80">Hours</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-tbre-yellow text-xl">
              {timeLeft.minutes}
            </span>
            <span className="text-white/80">Minutes</span>
          </div>
          <div className="text-center">
            <span className="block font-bold text-tbre-yellow text-xl">
              {timeLeft.seconds}
            </span>
            <span className="text-white/80">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
