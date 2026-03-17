import type { Metadata } from "next";
import Image from "next/image";
import { GalleryContent } from "@/app/gallery/gallery-content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Capturing our journey through the years.",
};

export default function Page() {
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
            <h1 className="mb-4 font-bold text-4xl text-white tracking-tighter sm:text-5xl md:text-6xl">
              Gallery
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Capturing our journey through the years.
            </p>
          </div>
        </div>
      </section>

      <GalleryContent />
    </div>
  );
}
