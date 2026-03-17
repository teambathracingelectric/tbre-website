import type { Metadata } from "next";
import Image from "next/image";
import { TeamSection } from "@/components/team-section";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the dedicated individuals behind our Formula Student success, pushing the boundaries of engineering excellence.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/car.jpg"
          alt="Team"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="mb-4 font-bold text-4xl text-white tracking-tighter sm:text-5xl md:text-6xl">
              Meet Our Team
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              The dedicated individuals behind our Formula Student success,
              pushing the boundaries of engineering excellence.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
}
