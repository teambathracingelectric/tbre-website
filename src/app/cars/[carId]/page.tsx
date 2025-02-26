import { CarGallery } from "@/components/car-gallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cars } from "@/data/cars";
import { domain } from "@/data/domain";
import { getAdjacentYears } from "@/utils";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return cars.map((car) => ({
    carId: car.year.toString(),
  }));
}

type Params = {
  carId: string;
};

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const params = await props.params;

  const carYear = Number(params.carId);
  const car = cars.find((c) => c.year === carYear);

  if (!car) {
    return {
      title: "Car",
    };
  }

  return {
    title: `${params.carId} Car`,
    description: `Our ${params.carId} car is a masterpiece of engineering and innovation.`,
    openGraph: {
      images: [
        {
          url: `${domain}/cars/${params.carId}/car.jpg`,
        },
      ],
    },
  };
}

const carGalleryImages: {
  url: string;
  alt: string;
}[] = [
  {
    url: "/cars/2021/car-1.jpg",
    alt: "Car 1",
  },
  {
    url: "/cars/2021/car-2.jpg",
    alt: "Car 2",
  },
  {
    url: "/cars/2021/car-3.jpg",
    alt: "Car 3",
  },
] as const;

const raceResults: {
  competition: string;
  position: string;
  category: string;
  points: number;
  highlights: string[];
}[] = [
  {
    competition: "Formula Student Germany 2023",
    position: "1st",
    category: "Electric Vehicle Class",
    points: 920,
    highlights: ["1st in Engineering Design", "2nd in Acceleration"],
  },
  {
    competition: "Formula Student Netherlands 2023",
    position: "2nd",
    category: "Electric Vehicle Class",
    points: 885,
    highlights: ["1st in Endurance", "1st in Cost Analysis"],
  },
  {
    competition: "Formula Student UK 2023",
    position: "3rd",
    category: "Electric Vehicle Class",
    points: 856,
    highlights: ["1st in Business Plan", "2nd in Skidpad"],
  },
] as const;

export default async function Page(props: { params: Promise<Params> }) {
  const params = await props.params;

  const carYear = Number(params.carId);
  const car = cars.find((c) => c.year === carYear);

  if (!car) {
    notFound();
  }

  const adjacentYears = getAdjacentYears(carYear);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Section */}
      <section className="border-b bg-white">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/cars">
              <ChevronLeftIcon className="h-4 w-4" />
              Back to Cars
            </Link>
          </Button>

          <div className="flex gap-2">
            {adjacentYears.previousYear && (
              <Button asChild variant="ghost" className="gap-2">
                <Link href={`/cars/${adjacentYears.previousYear}`}>
                  <ArrowLeftIcon className="h-4 w-4" />
                  {adjacentYears.previousYear}
                </Link>
              </Button>
            )}
            {adjacentYears.nextYear && (
              <Button asChild variant="ghost" className="gap-2">
                <Link href={`/cars/${adjacentYears.nextYear}`}>
                  {adjacentYears.nextYear}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={car.image}
          alt={car.name}
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-end justify-start p-8">
          <div className="container px-4 mx-auto">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-2 text-5xl font-bold tracking-tighter text-white sm:text-6xl">
                {carData.name}
              </h1>
              <p className="text-xl text-tbre-blue">{carData.year}</p>
            </motion.div> */}
            <div>
              <h1 className="mb-2 text-5xl font-bold tracking-tighter text-white sm:text-6xl underline decoration-tbre-yellow">
                {car.name}
              </h1>
              <p className="text-xl text-tbre-blue">{car.year}</p>
            </div>
          </div>
        </div>
      </section>

      <main className="container space-y-20 px-4 py-16 mx-auto">
        {/* Overview Section */}
        <section className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900">About the Car</h2>
            {/* <p className="text-lg text-zinc-600">{carData.text}</p> */}
            <p
              className="text-lg text-zinc-600"
              dangerouslySetInnerHTML={{
                __html: car.text ?? "",
              }}
            />
            {/* <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 p-4">
                <div className="text-2xl font-bold text-tbre-blue">80 kW</div>
                <div className="text-sm text-zinc-600">Power Output</div>
              </div>
              <div className="rounded-lg bg-zinc-50 p-4">
                <div className="text-2xl font-bold text-tbre-blue">4.2s</div>
                <div className="text-sm text-zinc-600">0-100 km/h</div>
              </div>
            </div> */}
          </div>
          <Image
            src={car.image}
            alt="Car detail"
            width={600}
            height={400}
            className="rounded-lg object-cover mt-16"
            unoptimized
          />
        </section>

        {/* Specifications Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">Specifications</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Weight", value: "230 kg" },
              { label: "Top Speed", value: "120 km/h" },
              { label: "Wheelbase", value: "1525 mm" },
              { label: "Track Width", value: "1200 mm" },
              { label: "Suspension", value: "Double Wishbone" },
              { label: "Aerodynamics", value: "Full Package" },
              { label: "Battery", value: "400V System" },
              { label: "Motors", value: "4 x 20kW" },
            ].map((spec) => (
              <Card key={spec.label} className="bg-zinc-50">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-2xl font-bold text-tbre-blue text-center">
                    {spec.value}
                  </div>
                  <div className="text-sm text-zinc-600">{spec.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">Gallery</h2>
          <CarGallery images={carGalleryImages} />
        </section>

        {/* 3D Model Section */}
        {/* <section className="space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">3D Model</h2>
          <div className="aspect-[16/9] w-full rounded-lg bg-zinc-50">
            <div className="flex h-full items-center justify-center">
              <p className="text-zinc-600">3D Model Viewer Placeholder</p>
            </div>
          </div>
        </section> */}
      </main>

      {/* Race Results Section */}
      <section className="border-y bg-zinc-50 py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
            Race Results
          </h2>
          <div className="space-y-6">
            {raceResults.map((result) => (
              <div
                key={result.competition}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {result.competition}
                    </h3>
                    <p className="text-sm text-zinc-600">{result.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-tbre-blue">
                      {result.position}
                    </div>
                    <div className="text-sm text-zinc-600">
                      {result.points} points
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {result.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-tbre-blue/10 px-3 py-1 text-sm font-medium text-tbre-blue"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
