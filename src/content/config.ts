import { defineCollection, z } from "astro:content";

const carsCollection = defineCollection({
  type: "data",
  schema: z.object({
    year: z.number(),
    name: z.string(),
    image: z.string(),
    text: z.string().optional(),
    model: z.string().optional(),
    results: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
        }),
      )
      .optional(),
    team: z
      .array(
        z.object({
          category: z.string(),
          members: z.array(
            z.object({
              name: z.string(),
              role: z.string().optional(),
              lead: z.boolean().optional(),
              image: z.string().optional(),
              link: z.string().optional(),
            }),
          ),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  cars: carsCollection,
};
