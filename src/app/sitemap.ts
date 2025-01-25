// import { carsData } from "@/data/cars";
import type { MetadataRoute } from "next";

const domain = "https://teambathracingelectric.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/cars`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // ...carsData.map((car) => ({
    //   url: `${domain}/cars/${car.year}`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // })),
    // {
    //   url: `${domain}/contact`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // {
    //   url: `${domain}/gallery`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    {
      url: `${domain}/sponsors`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/teams`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // {
    //   url: `${domain}/blog`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
  ];
}
