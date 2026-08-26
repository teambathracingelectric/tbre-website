import { ACTIVE_SEASON, SITE_URL } from "@/config/site";
import {
  getBlogPosts,
  getCars,
  getRecruitmentRoles,
  getSponsorsBySeason,
  getTeamBySeason,
  getTeamSeasons,
} from "@/lib/content";
import { formatDate } from "@/utils";

const SUMMARY =
  "Team Bath Racing Electric (TBRe) is a student-run Formula Student team at the University of Bath that designs, builds, and races a fully electric single-seater racing car.";

function resolveBaseUrl(site: URL | undefined) {
  return (site ?? new URL(SITE_URL)).origin;
}

function link(
  baseUrl: string,
  path: string,
  label: string,
  description?: string,
) {
  const href = `${baseUrl}${path}`;
  return description
    ? `- [${label}](${href}): ${description}`
    : `- [${label}](${href})`;
}

export async function buildLlmsTxt(site: URL | undefined): Promise<string> {
  const baseUrl = resolveBaseUrl(site);
  const [cars, teamSeasons, posts] = await Promise.all([
    getCars(),
    getTeamSeasons(),
    getBlogPosts(),
  ]);
  const pastSeasons = teamSeasons.filter((season) => season !== ACTIVE_SEASON);

  const lines: string[] = [
    "# Team Bath Racing Electric",
    "",
    `> ${SUMMARY}`,
    "",
    "Formula Student is the world's largest student engineering competition, and TBRe has competed as an electric team since 2015, racing at Silverstone and internationally.",
    "",
    "## Pages",
    "",
    link(baseUrl, "/", "Home", "Overview of Team Bath Racing Electric"),
    link(
      baseUrl,
      "/cars",
      "Cars",
      `Every car TBRe has built, from ${cars.at(-1)?.data.year} to ${cars[0]?.data.year}`,
    ),
    link(baseUrl, "/team", "Team", `The current ${ACTIVE_SEASON} team roster`),
    link(
      baseUrl,
      "/recruitment",
      "Recruitment",
      "Open roles for joining the team",
    ),
    link(
      baseUrl,
      "/sponsors",
      "Sponsors",
      "Current sponsors and sponsorship information",
    ),
    link(
      baseUrl,
      "/gallery",
      "Gallery",
      "Photos from across the team's history",
    ),
    link(baseUrl, "/blog", "Blog", "News and updates from the team"),
    link(
      baseUrl,
      "/crowdfunding",
      "Crowdfunding",
      "Support the current season's crowdfunding campaign",
    ),
  ];

  if (pastSeasons.length > 0) {
    lines.push("", "## Past Teams", "");
    for (const season of pastSeasons) {
      lines.push(link(baseUrl, `/team/${season}`, `${season} Team`));
    }
  }

  if (posts.length > 0) {
    lines.push("", "## Blog", "");
    for (const post of posts) {
      lines.push(
        link(baseUrl, `/blog/${post.id}`, post.data.title, post.data.excerpt),
      );
    }
  }

  lines.push(
    "",
    "## Optional",
    "",
    link(
      baseUrl,
      "/llms-full.txt",
      "Full site contents",
      "Complete text of every page and content entry on the site",
    ),
  );

  return `${lines.join("\n")}\n`;
}

export async function buildLlmsFullTxt(site: URL | undefined): Promise<string> {
  const baseUrl = resolveBaseUrl(site);
  const [cars, teamSeasons, sponsors, roles, posts] = await Promise.all([
    getCars({ includeUnlisted: true }),
    getTeamSeasons(),
    getSponsorsBySeason(),
    getRecruitmentRoles(),
    getBlogPosts(),
  ]);

  const sections: string[] = [
    "# Team Bath Racing Electric",
    "",
    `> ${SUMMARY}`,
    "",
    `Site: ${baseUrl}`,
    "",
    "## Cars",
  ];

  for (const car of cars) {
    sections.push("", `### ${car.data.name} (${car.data.year})`);
    if (car.body?.trim()) sections.push("", car.body.trim());
    if (car.data.specs.length > 0) {
      sections.push(
        "",
        "Specifications:",
        "",
        ...car.data.specs.map((spec) => `- ${spec.label}: ${spec.value}`),
      );
    }
    if (car.data.results.length > 0) {
      sections.push(
        "",
        "Results:",
        "",
        ...car.data.results.map(
          (result) => `- ${result.title}: ${result.description}`,
        ),
      );
    }
  }

  sections.push("", "## Team");
  for (const season of teamSeasons) {
    const categories = await getTeamBySeason(season);
    sections.push("", `### ${season} Team`);
    for (const category of categories) {
      sections.push(
        "",
        `**${category.category}**`,
        "",
        ...category.members.map((member) => {
          const role = member.data.role ? ` — ${member.data.role}` : "";
          const lead = member.data.lead ? " (Lead)" : "";
          return `- ${member.data.name}${role}${lead}`;
        }),
      );
    }
  }

  sections.push(
    "",
    "## Sponsors",
    "",
    ...sponsors.map(
      (sponsor) => `- ${sponsor.data.name} (${sponsor.data.level})`,
    ),
  );

  sections.push("", "## Recruitment");
  for (const role of roles) {
    sections.push("", `### ${role.data.title} — ${role.data.team}`);
    if (role.body?.trim()) sections.push("", role.body.trim());
  }

  sections.push("", "## Blog");
  for (const post of posts) {
    sections.push(
      "",
      `### ${post.data.title}`,
      "",
      `${formatDate(post.data.date)} · ${post.data.category}`,
    );
    if (post.body?.trim()) sections.push("", post.body.trim());
  }

  return `${sections.join("\n")}\n`;
}
