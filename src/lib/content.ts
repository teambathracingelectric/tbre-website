import { type CollectionEntry, getCollection } from "astro:content";
import { ACTIVE_SEASON } from "@/config/site";

export type CarEntry = CollectionEntry<"cars">;
export type TeamEntry = CollectionEntry<"team">;
export type SponsorEntry = CollectionEntry<"sponsors">;
export type RecruitmentEntry = CollectionEntry<"recruitment">;
export type BlogEntry = CollectionEntry<"blog">;
export type EventEntry = CollectionEntry<"events">;
export type GalleryEntry = CollectionEntry<"gallery">;

export async function getCars(options: { includeUnlisted?: boolean } = {}) {
  const entries = await getCollection("cars", ({ data }) => data.published);
  return entries
    .filter((entry) => options.includeUnlisted || entry.data.listed)
    .sort((a, b) => b.data.year - a.data.year);
}

export async function getCarByYear(year: number) {
  const cars = await getCars({ includeUnlisted: true });
  return cars.find((car) => car.data.year === year);
}

export function getAdjacentCars(cars: CarEntry[], currentYear: number) {
  const sortedYears = cars.map((car) => car.data.year).sort((a, b) => b - a);
  const currentIndex = sortedYears.indexOf(currentYear);

  return {
    previousYear:
      currentIndex < sortedYears.length - 1
        ? sortedYears[currentIndex + 1]
        : null,
    nextYear: currentIndex > 0 ? sortedYears[currentIndex - 1] : null,
  };
}

export async function getTeamBySeason(season = ACTIVE_SEASON) {
  const members = await getCollection(
    "team",
    ({ data }) => data.active && data.season === season,
  );

  const categories = new Map<string, TeamEntry[]>();
  for (const member of members) {
    const category = categories.get(member.data.category) ?? [];
    category.push(member);
    categories.set(member.data.category, category);
  }

  return Array.from(categories.entries())
    .map(([category, categoryMembers]) => ({
      category,
      members: categoryMembers.sort(sortTeamMembers),
    }))
    .sort((a, b) => a.category.localeCompare(b.category, "en-GB"));
}

function sortTeamMembers(a: TeamEntry, b: TeamEntry) {
  if (a.data.lead && !b.data.lead) return -1;
  if (!a.data.lead && b.data.lead) return 1;
  if (a.data.image && !b.data.image) return -1;
  if (!a.data.image && b.data.image) return 1;
  const nameOrder = a.data.name.localeCompare(b.data.name, "en-GB", {
    sensitivity: "base",
  });
  if (nameOrder !== 0) return nameOrder;
  return a.id.localeCompare(b.id, "en-GB");
}

export async function getSponsors() {
  const entries = await getCollection("sponsors", ({ data }) => data.active);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getRecruitmentRoles() {
  const entries = await getCollection("recruitment", ({ data }) => data.active);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getBlogPosts(options: { includeDrafts?: boolean } = {}) {
  const entries = await getCollection("blog");
  return entries
    .filter((entry) => options.includeDrafts || !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getAdjacentBlogs(posts: BlogEntry[], currentId: string) {
  const currentIndex = posts.findIndex((post) => post.id === currentId);

  return {
    previousBlog:
      currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
    nextBlog: currentIndex > 0 ? posts[currentIndex - 1] : null,
  };
}

export async function getActiveEvents() {
  const entries = await getCollection("events", ({ data }) => data.active);
  return entries.sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
}

export async function getGalleryImages() {
  const entries = await getCollection("gallery");
  return entries.sort((a, b) => a.data.order - b.data.order);
}
