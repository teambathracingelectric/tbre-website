import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const publicImagePath = z.string().startsWith("/");

const cars = defineCollection({
  loader: glob({ base: "./src/content/cars", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    year: z.coerce.number().int(),
    name: z.string(),
    image: publicImagePath,
    listed: z.boolean().default(true),
    published: z.boolean().default(true),
    gallery: z
      .array(
        z.object({
          url: publicImagePath,
          alt: z.string(),
        }),
      )
      .default([]),
    specs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .default([]),
    results: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: publicImagePath.optional(),
        }),
      )
      .default([]),
    model: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ base: "./src/content/team", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    season: z.coerce.number().int(),
    category: z.string(),
    name: z.string(),
    role: z.string().optional(),
    image: publicImagePath.optional(),
    link: z.string().optional(),
    lead: z.boolean().default(false),
    active: z.boolean().default(true),
  }),
});

const sponsors = defineCollection({
  loader: glob({ base: "./src/content/sponsors", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    level: z.string(),
    logo: publicImagePath.optional(),
    link: z.string().optional(),
    logoInverted: z.boolean().default(false),
    active: z.boolean().default(true),
    order: z.coerce.number().int().default(0),
  }),
});

const recruitment = defineCollection({
  loader: glob({ base: "./src/content/recruitment", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    team: z.string(),
    teamDescription: z.string(),
    contact: z.string(),
    members: z.string(),
    additionalText: z.string().optional(),
    title: z.string(),
    degree: z.string().optional(),
    year: z.string().optional(),
    count: z.union([z.string(), z.number()]).optional(),
    active: z.boolean().default(true),
    order: z.coerce.number().int().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    image: publicImagePath,
    category: z.string(),
    draft: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      role: z.string(),
      image: publicImagePath.optional(),
    }),
  }),
});

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    type: z.string().optional(),
    link: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

const gallery = defineCollection({
  loader: glob({ base: "./src/content/gallery", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    src: publicImagePath,
    alt: z.string(),
    category: z.string(),
    width: z.coerce.number().int().default(600),
    height: z.coerce.number().int().default(400),
    featured: z.boolean().default(false),
    order: z.coerce.number().int().default(0),
  }),
});

export const collections = {
  blog,
  cars,
  events,
  gallery,
  recruitment,
  sponsors,
  team,
};
