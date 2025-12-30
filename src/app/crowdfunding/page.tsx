import { CrowdfundingVideo } from "@/app/crowdfunding/crowdfunding-video";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Crowdfunding",
  description:
    "Support TBRe25 to maintain our position as the #1 Electric Formula Student team in the UK.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/car.jpg"
          alt="Crowdfunding campaign"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Support TBRe26
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                Help us maintain our position as the #1 Electric Formula Student
                team in the UK
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16 mx-auto">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
            <CrowdfundingVideo />
          </div>
          <div className="prose prose-zinc max-w-none space-y-2">
            <p className="text-lg">
              The TBRe26 Crowdfunder has officially begun and is now live! As
              the current #1 Electric Formula Student team in the UK, we believe
              this is the year we can win, and this is your opportunity to help
              us achieve that.
            </p>
            <p className="text-lg">
              Please watch our video and visit our Crowdfunder page to discover
              more about Formula Student TBRe and how you can contribute. We are
              immensely grateful for any and all donations we receive and
              sincerely appreciate all the support.
            </p>
            <p className="text-lg font-medium">
              Include your name with your donation, and it will be featured on
              the car!
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full bg-[#105bab] text-white hover:bg-[#105bab]/90"
          >
            <a
              href="https://www.crowdfunder.co.uk/p/team-bath-racing-electric-2026-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Our Campaign <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
