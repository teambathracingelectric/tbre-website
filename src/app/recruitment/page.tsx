import type { Metadata } from "next";
import Image from "next/image";
import { RecruitmentSection } from "../../components/recruitment-section";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "Join our team! Explore open roles and help us push the boundaries of engineering excellence.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src="/car.jpg"
          alt="Recruitment"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Explore open roles and help us push the boundaries of engineering
              excellence.
            </p>
          </div>
        </div>
      </section>

      <RecruitmentSection />
    </div>
  );
}
