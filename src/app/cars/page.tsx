import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cars } from "@/data/cars";
// import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Cars",
  description: "A decade of engineering excellence and innovation",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/car.jpg"
          alt="Cars"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Our Cars
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              A decade of engineering excellence and innovation
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16 mx-auto">
        <div className="mb-12">
          <h2 className="text-center text-2xl font-bold text-zinc-900">
            Racing Through the Years
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Each year, we push the boundaries of what&apos;s possible, creating
            faster and more innovative electric racing cars.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars
            .filter((c) => c.year !== 2025)
            .map((car) => (
              <Card
                key={car.year}
                className="group overflow-hidden border-zinc-200 bg-white transition-all hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Badge className="z-10 rounded-full absolute right-2 top-2 bg-tbre-blue hover:bg-tbre-blue/90">
                      {car.year}
                    </Badge>
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-2xl font-bold text-white">
                        {car.name}
                      </h2>
                    </div>
                  </div>
                  {/* <div className="p-6"> */}
                  {/* {car.text && (
                      <p className="mb-4 text-zinc-600">
                        {car.text?.slice(0, 128)}...
                      </p>
                    )} */}
                  {/* <Link
                    href={`/cars/${car.year}`}
                    className="inline-flex items-center text-tbre-blue transition-colors hover:text-tbre-blue/80"
                  >
                    View Car <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link> */}
                  {/* </div> */}
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
