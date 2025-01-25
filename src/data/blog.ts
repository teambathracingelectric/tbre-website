export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "First Place at Formula Student Germany",
    excerpt:
      "Our team's journey to victory at one of Europe's most prestigious competitions...",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/our_achievements.jpg",
    category: "Competitions",
    slug: "formula-student-germany-2024",
  },
  {
    id: "2",
    title: "Introducing TBRe-23: Our Most Advanced Car Yet",
    excerpt:
      "A deep dive into the innovative features and technology behind our latest racing car...",
    date: "2023-12-20",
    readTime: "8 min read",
    image: "/our_members.jpeg",
    category: "Technology",
    slug: "introducing-tbre-23",
  },
  {
    id: "3",
    title: "The Future of Electric Racing",
    excerpt:
      "How our team is pushing the boundaries of electric vehicle technology in motorsport...",
    date: "2023-12-10",
    readTime: "6 min read",
    image: "/our_sponsors.jpeg",
    category: "Innovation",
    slug: "future-of-electric-racing",
  },
] as const;
