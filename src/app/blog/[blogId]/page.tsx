import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { getAdjacentBlogs } from "@/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    blogId: blog.slug,
  }));
}

type Params = {
  blogId: string;
};

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;

  const blog = blogs.find((blog) => blog.slug === params.blogId);

  if (!blog) {
    return {
      title: "Blog",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;

  const blogId = params.blogId;
  const blog = blogs.find((blog) => blog.slug === blogId);

  if (!blog) {
    return notFound();
  }

  const adjacentBlogs = getAdjacentBlogs(blogId);

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="border-b">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/blog">
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex gap-2">
            {adjacentBlogs.previousBlog && (
              <Button asChild variant="ghost" className="gap-2">
                <Link href={`/blog/${adjacentBlogs.previousBlog}`}>
                  <ArrowLeftIcon className="h-4 w-4" />
                  {/* {adjacentBlogs.previousBlog} */}
                </Link>
              </Button>
            )}
            {adjacentBlogs.nextBlog && (
              <Button asChild variant="ghost" className="gap-2">
                <Link href={`/blog/${adjacentBlogs.nextBlog}`}>
                  {/* {adjacentBlogs.nextBlog} */}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative aspect-[2/1] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <article>
        {/* Article Content */}
        <div className="container px-4 py-12">
          <div className="mx-auto max-w-3xl">
            {/* Article Header */}
            <div className="mb-8 space-y-4">
              <div className="inline-block rounded-full bg-tbre-blue/10 px-3 py-1 text-sm font-medium text-tbre-blue">
                {blog.category}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  {blog.readTime}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Image
                  src={blog.author.image ?? "/placeholder.png"}
                  alt={blog.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <div className="font-medium text-zinc-900">
                    {blog.author.name}
                  </div>
                  <div className="text-sm text-zinc-600">
                    {blog.author.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div
              className="prose prose-zinc max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Related Posts */}
            <div className="mt-16 border-t pt-16">
              <h2 className="mb-8 text-2xl font-bold text-zinc-900">
                Related Articles
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.slug}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-zinc-900 group-hover:text-tbre-blue">
                      {relatedBlog.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
