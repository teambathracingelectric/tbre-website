import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dev.teambathracingelectric.com",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://dev.teambathracingelectric.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://dev.teambathracingelectric.com/cars",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://dev.teambathracingelectric.com/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://dev.teambathracingelectric.com/gallery",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://dev.teambathracingelectric.com/sponsors",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://dev.teambathracingelectric.com/teams",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
