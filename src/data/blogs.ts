export type Blog = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  content: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
};

export const blogs: Blog[] = [
  {
    id: "1",
    title: "First Place at Formula Student Germany",
    excerpt:
      "Our team's journey to victory at one of Europe's most prestigious competitions...",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/our_achievements.jpg",
    category: "Competitions",
    slug: "blog-post-1",
    content: `
    <p class="text-lg leading-relaxed mb-6">
      We are thrilled to announce our remarkable victory at Formula Student Germany 2023! This achievement represents countless hours of dedication, innovation, and teamwork from every member of TBRE Racing.
    </p>

    <h2 class="text-2xl font-bold mb-4 mt-8">The Competition</h2>
    <p class="leading-relaxed mb-6">
      Formula Student Germany is one of the most prestigious engineering competitions in the world, attracting top teams from universities across the globe. This year's event saw over 100 teams competing across various categories.
    </p>

    <div class="my-8">
      <img src="/car.jpg" alt="Team celebration" class="rounded-lg w-full" />
      <p class="text-sm text-zinc-600 mt-2">The team celebrating our victory at Hockenheimring</p>
    </div>

    <h2 class="text-2xl font-bold mb-4">Key Achievements</h2>
    <ul class="list-disc list-inside space-y-2 mb-6 text-zinc-600">
      <li>1st Place Overall in Electric Vehicle Class</li>
      <li>1st Place in Engineering Design Event</li>
      <li>2nd Place in Acceleration Event</li>
      <li>3rd Place in Endurance Event</li>
    </ul>

    <p class="leading-relaxed mb-6">
      Our success in the Engineering Design event particularly highlighted the innovative solutions we implemented in our 2023 car, including our advanced aerodynamics package and sophisticated battery management system.
    </p>

    <blockquote class="border-l-4 border-tbre-blue pl-4 italic my-8">
      "This victory is a testament to the incredible dedication of our entire team and the unwavering support from our sponsors and university." - Alex Thompson, Team Principal
    </blockquote>
  `,
    author: {
      name: "Alex Thompson",
      role: "Team Principal",
    },
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
    slug: "blog-post-2",
    content: `
    <p class="text-lg leading-relaxed mb-6">
      We are thrilled to announce our remarkable victory at Formula Student Germany 2023! This achievement represents countless hours of dedication, innovation, and teamwork from every member of TBRE Racing.
    </p>

    <h2 class="text-2xl font-bold mb-4 mt-8">The Competition</h2>
    <p class="leading-relaxed mb-6">
      Formula Student Germany is one of the most prestigious engineering competitions in the world, attracting top teams from universities across the globe. This year's event saw over 100 teams competing across various categories.
    </p>

    <div class="my-8">
      <img src="/car.jpg" alt="Team celebration" class="rounded-lg w-full" />
      <p class="text-sm text-zinc-600 mt-2">The team celebrating our victory at Hockenheimring</p>
    </div>

    <h2 class="text-2xl font-bold mb-4">Key Achievements</h2>
    <ul class="list-disc list-inside space-y-2 mb-6 text-zinc-600">
      <li>1st Place Overall in Electric Vehicle Class</li>
      <li>1st Place in Engineering Design Event</li>
      <li>2nd Place in Acceleration Event</li>
      <li>3rd Place in Endurance Event</li>
    </ul>

    <p class="leading-relaxed mb-6">
      Our success in the Engineering Design event particularly highlighted the innovative solutions we implemented in our 2023 car, including our advanced aerodynamics package and sophisticated battery management system.
    </p>

    <blockquote class="border-l-4 border-tbre-blue pl-4 italic my-8">
      "This victory is a testament to the incredible dedication of our entire team and the unwavering support from our sponsors and university." - Alex Thompson, Team Principal
    </blockquote>
  `,
    author: {
      name: "Alex Thompson",
      role: "Team Principal",
    },
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
    slug: "blog-post-3",
    content: `
    <p class="text-lg leading-relaxed mb-6">
      We are thrilled to announce our remarkable victory at Formula Student Germany 2023! This achievement represents countless hours of dedication, innovation, and teamwork from every member of TBRE Racing.
    </p>

    <h2 class="text-2xl font-bold mb-4 mt-8">The Competition</h2>
    <p class="leading-relaxed mb-6">
      Formula Student Germany is one of the most prestigious engineering competitions in the world, attracting top teams from universities across the globe. This year's event saw over 100 teams competing across various categories.
    </p>

    <div class="my-8">
      <img src="/car.jpg" alt="Team celebration" class="rounded-lg w-full" />
      <p class="text-sm text-zinc-600 mt-2">The team celebrating our victory at Hockenheimring</p>
    </div>

    <h2 class="text-2xl font-bold mb-4">Key Achievements</h2>
    <ul class="list-disc list-inside space-y-2 mb-6 text-zinc-600">
      <li>1st Place Overall in Electric Vehicle Class</li>
      <li>1st Place in Engineering Design Event</li>
      <li>2nd Place in Acceleration Event</li>
      <li>3rd Place in Endurance Event</li>
    </ul>

    <p class="leading-relaxed mb-6">
      Our success in the Engineering Design event particularly highlighted the innovative solutions we implemented in our 2023 car, including our advanced aerodynamics package and sophisticated battery management system.
    </p>

    <blockquote class="border-l-4 border-tbre-blue pl-4 italic my-8">
      "This victory is a testament to the incredible dedication of our entire team and the unwavering support from our sponsors and university." - Alex Thompson, Team Principal
    </blockquote>
  `,
    author: {
      name: "Alex Thompson",
      role: "Team Principal",
    },
  },
] as const;
