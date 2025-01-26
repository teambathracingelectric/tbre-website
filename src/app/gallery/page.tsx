"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cars } from "@/data/cars";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Racing",
  "Technical",
  "Behind the Scenes",
  "Events",
] as const;

type Category = (typeof categories)[number];

const galleryImages: {
  id: number;
  src: string;
  alt: string;
  category: Category;
  width: number;
  height: number;
  featured?: boolean;
}[] = [
  {
    id: 1,
    src: "/car.jpg",
    alt: "Car on track",
    category: "Racing",
    width: 600,
    height: 800,
    featured: true,
  },
  {
    id: 2,
    src: "/landing_car_1.jpg",
    alt: "Car on track",
    category: "Racing",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    src: "/landing_car_2.jpg",
    alt: "Car on track",
    category: "Racing",
    width: 600,
    height: 600,
  },
  {
    id: 4,
    src: "/our_achievements.jpg",
    alt: "Car assembly",
    category: "Technical",
    width: 600,
    height: 800,
    featured: true,
  },
  {
    id: 5,
    src: "/our_members.jpeg",
    alt: "Team members",
    category: "Behind the Scenes",
    width: 600,
    height: 400,
  },
  {
    id: 6,
    src: "/our_sponsors.jpeg",
    alt: "Car at event",
    category: "Events",
    width: 600,
    height: 600,
  },
  ...cars.map((car, index) => ({
    id: index + 7,
    src: car.image,
    alt: car.name,
    category: "Racing" as Category,
    width: 600,
    height: 400,
  })),
] as const;

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/car.jpg"
          alt="Gallery hero"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Gallery
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Capturing our journey through the years.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16 mx-auto">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-tbre-blue text-white"
                  : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          layout
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`group cursor-pointer ${image.featured ? "md:col-span-2 md:row-span-2" : ""}`}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent
          hideClose
          className="max-w-5xl border-none bg-transparent p-0 shadow-none"
        >
          {selectedImage !== null && (
            <div className="relative aspect-[16/9]">
              <Image
                src={
                  galleryImages.find((img) => img.id === selectedImage)?.src ??
                  ""
                }
                alt={
                  galleryImages.find((img) => img.id === selectedImage)?.alt ??
                  ""
                }
                fill
                className="rounded-lg object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 text-white hover:bg-white/20 cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                <XIcon className="h-6 w-6" />
              </Button>
              <div className="absolute inset-y-0 left-4 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 cursor-pointer"
                  onClick={() => {
                    const currentIndex = galleryImages.findIndex(
                      (img) => img.id === selectedImage,
                    );
                    const prevIndex =
                      (currentIndex - 1 + galleryImages.length) %
                      galleryImages.length;
                    setSelectedImage(galleryImages[prevIndex].id);
                  }}
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 cursor-pointer"
                  onClick={() => {
                    const currentIndex = galleryImages.findIndex(
                      (img) => img.id === selectedImage,
                    );
                    const nextIndex = (currentIndex + 1) % galleryImages.length;
                    setSelectedImage(galleryImages[nextIndex].id);
                  }}
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
