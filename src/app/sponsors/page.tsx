import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { sponsors } from "@/data/sponsors";
import { cn } from "@/utils";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Partner with us to support our team and benefit from a mutually beneficial relationship.",
};

const titleSponsor = sponsors[0].sponsors[0];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[50vh] w-full items-center justify-center bg-tbre-blue py-8">
        <div className="container px-4 text-center">
          <h1 className="mb-4 font-bold text-4xl text-white tracking-tighter sm:text-5xl md:text-6xl">
            Partner with Excellence
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            We work closely with each of our sponsors to ensure a mutually
            beneficial relationship, with many of our team alumni choosing our
            sponsors as graduate employers.
            <br />
            <br />
            Get in touch to find out more about supporting our team. More
            information about the team is provided in our new prospectus.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-tbre-yellow text-white hover:bg-tbre-yellow/90"
          >
            <a
              href="https://drive.google.com/file/d/1oTeHoMViRoouj5Zl5DmZSOH-BuBCpAAd/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download our Sponsorship Prospectus
            </a>
          </Button>
        </div>
      </section>

      {/* Title Sponsor Section */}
      <section className="overflow-hidden border-y bg-zinc-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-4xl text-zinc-900 tracking-tight">
            Title Sponsor
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
              <Image
                src={titleSponsor.logo}
                alt={titleSponsor.name}
                fill
                // className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-6 font-bold text-3xl text-zinc-900">
                {titleSponsor.name}
              </h3>
              <p
                className="mb-8 text-lg text-zinc-600 leading-relaxed"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: our data
                dangerouslySetInnerHTML={{
                  __html:
                    titleSponsor.description ??
                    "Come back soon to find out more!",
                }}
              />
              <a
                href={titleSponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-lg text-tbre-blue hover:text-tbre-blue/90"
              >
                Visit {titleSponsor.name}{" "}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sponsors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {sponsors
            .slice(1)
            .filter((level) => level.sponsors.length)
            .map((level) => (
              <div key={level.level} className="mb-16 last:mb-0">
                <h2 className="mb-8 font-bold text-2xl text-zinc-900">
                  {level.level}
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {level.sponsors
                    // sort sponsors with descriptions first
                    .sort((a, b) => {
                      const aHasDesc = !!a.description;

                      const bHasDesc = !!b.description;
                      if (aHasDesc && !bHasDesc) return -1;
                      if (!aHasDesc && bHasDesc) return 1;
                      return 0;
                    })
                    .map((sponsor) => (
                      <Card key={sponsor.id} className="bg-white">
                        <CardHeader className="space-y-6">
                          <Link
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className={cn("h-12 w-auto", {
                                invert: sponsor.logoInverted,
                              })}
                              width={150}
                              height={50}
                              unoptimized
                            />
                          </Link>
                          <h3 className="font-bold text-xl text-zinc-900">
                            {sponsor.name}
                          </h3>
                        </CardHeader>
                        <CardContent>
                          <p
                            className="text-zinc-600"
                            // biome-ignore lint/security/noDangerouslySetInnerHtml: our data
                            dangerouslySetInnerHTML={{
                              __html:
                                sponsor.description ??
                                "Come back soon to find out more!",
                            }}
                          />
                        </CardContent>
                        <CardFooter>
                          <a
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold text-tbre-blue hover:text-tbre-blue/80"
                          >
                            Visit {sponsor.name}{" "}
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                          </a>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
