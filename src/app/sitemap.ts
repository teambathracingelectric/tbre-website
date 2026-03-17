import type { MetadataRoute } from "next";
import { domain } from "@/data/domain";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      priority: 1.0,
    },
    // {
    //   url: `${domain}/about`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    {
      url: `${domain}/team`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/recruitment`,
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
    //   priority: 0.6,
    // })),
    // {
    //   url: `${domain}/contact`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    {
      url: `${domain}/sponsors`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // {
    //   url: `${domain}/blog`,
    //   lastModified: new Date(),
    //   priority: 0.8,
    // },
    // ...blogPosts.map((post) => ({
    //   url: `${domain}/blog/${post.slug}`,
    //   lastModified: new Date(),
    //   priority: 0.6,
    // })),
    {
      url: `${domain}/crowdfunding`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
