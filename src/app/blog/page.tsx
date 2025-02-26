import { Card, CardContent } from "@/components/ui/card";
import { blogs } from "@/data/blogs";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay up to date with our latest achievements, innovations, and team updates",
};

const featuredBlog = blogs[0];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/car.jpg"
          alt="Blog"
          className="object-cover"
          fill
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Latest News
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Stay up to date with our latest achievements, innovations, and
              team updates
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container px-4 py-16 mx-auto">
        <Card className="overflow-hidden border-zinc-200">
          <CardContent className="grid gap-8 p-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <div className="mb-4 inline-block w-fit rounded-full bg-tbre-blue/10 px-3 py-1 text-sm font-medium text-tbre-blue">
                {featuredBlog.category}
              </div>
              <h2 className="mb-4 text-2xl font-bold text-zinc-900 sm:text-3xl">
                {featuredBlog.title}
              </h2>
              <p className="mb-6 text-zinc-600">{featuredBlog.excerpt}</p>
              <div className="mb-6 flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {new Date(featuredBlog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {featuredBlog.readTime}
                </div>
              </div>
              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="inline-flex items-center text-tbre-blue hover:text-tbre-blue/90"
              >
                Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* All Posts */}
      <section className="border-t bg-zinc-50 py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-zinc-900">All Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-zinc-200 bg-white transition-all hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 inline-block rounded-full bg-tbre-blue/10 px-3 py-1 text-sm font-medium text-tbre-blue">
                      {post.category}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-zinc-900">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-zinc-600">{post.excerpt}</p>
                    <div className="mb-4 flex items-center gap-4 text-sm text-zinc-500">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-tbre-blue hover:text-tbre-blue/90"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
