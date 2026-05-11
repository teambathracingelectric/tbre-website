import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";
import { ACTIVE_SEASON } from "../src/config/site";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "src", "content");
const publicRoot = path.join(root, "public");

type Entry = {
  collection: string;
  id: string;
  filePath: string;
  data: Record<string, unknown>;
  body: string;
};

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(entryPath) : entryPath;
    }),
  );
  return files.flat();
}

async function readEntry(filePath: string): Promise<Entry | null> {
  if (!/\.(md|mdx)$/.test(filePath)) return null;
  const text = await readFile(filePath, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${filePath}: missing frontmatter`);
  const relative = path.relative(contentRoot, filePath);
  const [collection, ...rest] = relative.split(path.sep);
  return {
    collection,
    id: rest.join("/").replace(/\.(md|mdx)$/, ""),
    filePath,
    data: (parse(match[1]) ?? {}) as Record<string, unknown>,
    body: match[2].trim(),
  };
}

function publicPathExists(value: unknown) {
  return (
    typeof value === "string" &&
    value.startsWith("/") &&
    existsSync(path.join(publicRoot, value))
  );
}

function requiredImage(
  errors: string[],
  entry: Entry,
  field: string,
  value: unknown,
) {
  if (!publicPathExists(value)) {
    errors.push(
      `${entry.collection}/${entry.id}: ${field} references missing public asset ${String(
        value,
      )}`,
    );
  }
}

async function main() {
  const files = await walk(contentRoot);
  const entries = (await Promise.all(files.map(readEntry))).filter(
    Boolean,
  ) as Entry[];
  const errors: string[] = [];

  const idsByCollection = new Map<string, Set<string>>();
  for (const entry of entries) {
    const ids = idsByCollection.get(entry.collection) ?? new Set<string>();
    if (ids.has(entry.id)) {
      errors.push(`${entry.collection}/${entry.id}: duplicate content id`);
    }
    ids.add(entry.id);
    idsByCollection.set(entry.collection, ids);
  }

  const sponsors = entries.filter((entry) => entry.collection === "sponsors");
  const sponsorIds = new Set<string>();
  for (const sponsor of sponsors) {
    const id = String(sponsor.data.id ?? "");
    if (sponsorIds.has(id)) {
      errors.push(`sponsors/${sponsor.id}: duplicate sponsor id ${id}`);
    }
    sponsorIds.add(id);
  }

  for (const entry of entries) {
    if (entry.collection === "cars") {
      requiredImage(errors, entry, "image", entry.data.image);
      for (const [index, image] of ((entry.data.gallery as unknown[]) ?? []).entries()) {
        requiredImage(errors, entry, `gallery[${index}].url`, (image as { url?: unknown }).url);
      }
    }

    if (entry.collection === "sponsors") {
      if (entry.data.logo) {
        requiredImage(errors, entry, "logo", entry.data.logo);
      }
    }

    if (entry.collection === "blog") {
      requiredImage(errors, entry, "image", entry.data.image);
      if ((entry.data.author as { image?: unknown })?.image) {
        requiredImage(errors, entry, "author.image", (entry.data.author as { image?: unknown }).image);
      }
    }

    if (entry.collection === "gallery") {
      requiredImage(errors, entry, "src", entry.data.src);
    }

    if (entry.collection === "team" && entry.data.image && !publicPathExists(entry.data.image)) {
      errors.push(
        `team/${entry.id}: image references missing public asset ${String(
          entry.data.image,
        )}`,
      );
    }
  }

  const activeCar = entries.find(
    (entry) =>
      entry.collection === "cars" && Number(entry.data.year) === ACTIVE_SEASON,
  );
  if (!activeCar) {
    errors.push(`cars: missing car entry for ACTIVE_SEASON ${ACTIVE_SEASON}`);
  }

  const activeTeam = entries.filter(
    (entry) =>
      entry.collection === "team" && Number(entry.data.season) === ACTIVE_SEASON,
  );
  if (activeTeam.length === 0) {
    errors.push(`team: missing team entries for ACTIVE_SEASON ${ACTIVE_SEASON}`);
  }

  const titleSponsors = sponsors.filter(
    (entry) => entry.data.level === "Title Sponsor" && entry.data.active !== false,
  );
  if (titleSponsors.length === 0) {
    errors.push("sponsors: missing active Title Sponsor");
  }

  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
    return;
  }

  const counts = Array.from(
    entries.reduce((groups, entry) => {
      groups.set(entry.collection, (groups.get(entry.collection) ?? 0) + 1);
      return groups;
    }, new Map<string, number>()),
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([collection, count]) => `${collection}: ${count}`)
    .join("\n");

  console.log(`Content validation passed.\n${counts}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
