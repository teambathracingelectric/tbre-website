"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function CarGallery({
  images,
}: {
  images: {
    url: string;
    alt: string;
  }[];
}) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent
          hideClose
          className="max-w-4xl border-none bg-transparent p-0 shadow-none"
        >
          <div className="relative aspect-[16/9]">
            {selectedImage !== null && (
              <Image
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                fill
                className="rounded-lg object-contain"
              />
            )}
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
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev !== null
                      ? (prev - 1 + images.length) % images.length
                      : null,
                  )
                }
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 cursor-pointer"
                onClick={() =>
                  setSelectedImage((prev) =>
                    prev !== null ? (prev + 1) % images.length : null,
                  )
                }
              >
                <ChevronRightIcon className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
