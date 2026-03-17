import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { blogs } from "@/data/blogs";
import { cars } from "@/data/cars";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAdjacentYears(currentYear: number) {
  const sortedYears = cars.map((car) => car.year).sort((a, b) => b - a); // Sort descending
  const currentIndex = sortedYears.indexOf(currentYear);

  return {
    previousYear:
      currentIndex < sortedYears.length - 1
        ? sortedYears[currentIndex + 1]
        : null,
    nextYear: currentIndex > 0 ? sortedYears[currentIndex - 1] : null,
  };
}

export function getAdjacentBlogs(blogId: string) {
  // TODO: sort blogs by date
  const sortedBlogs = blogs
    .map((blog) => blog.slug)
    .sort()
    .reverse();
  const currentIndex = sortedBlogs.indexOf(blogId);

  return {
    previousBlog:
      currentIndex < sortedBlogs.length - 1
        ? sortedBlogs[currentIndex + 1]
        : null,
    nextBlog: currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null,
  };
}
