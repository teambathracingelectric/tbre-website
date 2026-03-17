import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { CrowdfundingVideo } from "@/app/crowdfunding/crowdfunding-video";
import { Button } from "@/components/ui/button";

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
              <h1 className="mb-4 font-bold text-4xl text-white tracking-tighter sm:text-5xl md:text-6xl">
                Support TBRe26
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                {/* Help us maintain our position as the #1 Electric Formula Student team in the UK */}
                Join us on our journey to craft the UK's fastest, most reliable
                electric Formula Student car, showcasing months of hard work on
                the competition stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-100">
            <CrowdfundingVideo />
          </div>
          <div className="prose prose-zinc max-w-none space-y-2">
            <p className="text-lg">
              The launch of our Crowdfunder is now live!
            </p>
            <p className="text-lg">
              This year we are seeking success and can't wait to showcase our
              hard work at competitions around the globe, but we couldn't do
              this without your help.
            </p>
            <p className="text-lg">
              Your donation goes towards a student led team full of passionate
              students of all different degrees, ages and backgrounds. With over
              200 members, we need you to join us on this journey to help meet
              our goals for the 2026 season, including our target of £4,000 for
              this Crowdfunder, the progression of TBReAI and the leap towards a
              four-wheel drive car.
            </p>
            <p className="text-lg">
              Led by students, designed by students, raced by students. Help us
              make 2026 the best season yet!
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
