import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAdjacentYears(currentYear: number, allYears: number[]) {
  const sortedYears = [...allYears].sort((a, b) => b - a); // Sort descending
  const currentIndex = sortedYears.indexOf(currentYear);

  return {
    previousYear:
      currentIndex < sortedYears.length - 1
        ? sortedYears[currentIndex + 1]
        : null,
    nextYear: currentIndex > 0 ? sortedYears[currentIndex - 1] : null,
  };
}
