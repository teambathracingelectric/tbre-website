"use client";

import { Button } from "@/components/ui/button";
import {
  // ArrowRightIcon,
  AwardIcon,
  ClockIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full">
        <Image
          src="/car.jpg"
          alt="Latest racing car"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              {/* <span className="text-tbre-blue">Team Bath Racing</span>{" "} */}
              <span className="text-white">Team Bath Racing</span>{" "}
              <span className="text-tbre-yellow">Electric</span>
            </h1>
            {/* <Image
              src="/tbre_logo_colour.png"
              alt="Team Bath Racing Electric (TBRe) logo"
              width={200}
              height={200}
              className="mx-auto w-1/2"
            /> */}
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white text-pretty">
              Formula Student electric racing team based at the University of
              Bath
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-tbre-blue text-white hover:bg-tbre-blue/90"
              >
                <Link href="/cars">Our Cars</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-tbre-yellow hover:bg-tbre-yellow/90 text-white"
              >
                <Link href="/sponsors">Become a Sponsor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* A Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 lg:order-2">
              {/* <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-4xl">
                A
              </h2> */}
              <p className="text-lg text-zinc-600">
                Team Bath Racing Electric is an electric Formula Student team
                based out of the University of Bath&apos;s Faculty of
                Engineering and Design.
                <br />
                <br />
                Formula Student is the world&apos;s largest student engineering
                competition, with over 600 universities taking part in its
                numerous competitions internationally.
              </p>
              <Button
                asChild
                className="bg-tbre-blue text-white hover:bg-tbre-blue/90"
              >
                <a
                  href="https://imeche.org/events/formula-student"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the Formula Student Website
                </a>
              </Button>
            </div>
            <Image
              src="/landing_car_1.jpg"
              alt="Car 1"
              width={800}
              height={600}
              className="rounded-lg object-cover lg:order-1"
            />
          </div>
        </div>
      </section>

      {/* B Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              {/* <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-4xl">
                B
              </h2> */}
              <p className="text-lg text-zinc-600">
                We take pride in our consistent position as one of the foremost
                Electric Formula Student teams in the UK, a testament to our
                commitment and excellence since 2017.
                <br />
                <br />
                There is an emphasis within the team to produce bespoke,
                in-house designs to ensure that the car is optimised for racing
                conditions. This philosophy provides a platform for both
                learning and innovation and allows the team and its members to
                develop year on year.
              </p>
            </div>
            <Image
              src="/landing_car_2.jpg"
              alt="Car 2"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-tbre-yellow py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            About Us
          </h2>
          <div className="grid gap-8 text-white lg:grid-cols-2">
            <p className="flex-1 text-lg leading-relaxed">
              Team Bath Racing Electric (TBRe) was founded in 2015. We are an
              exciting and innovative student motorsport team based at the
              University of Bath. Our team of undergraduates from across the
              university design, build and race a formula-style car for the
              Formula Student competition against teams from all around the
              world.
              <br />
              <br />
              We compete at Silverstone each year for the UK event and travel
              around the world to compete in international Formula student
              events. We were the first UK electric team to compete abroad,
              competing in Zhuhai, China in 2018.
            </p>
            <p className="flex-1 text-lg leading-relaxed">
              In 2022 we competed in Italy and Spain which helped maintain our
              spot as #1 UK Electric Formula Student Team.
              <br />
              <br />
              Unlike many competitors, TBRe utilises a fully electric powertrain
              with an Emrax 228 motor rear-wheel drive and a custom in-house
              designed and built battery pack.
              <br />
              <br />
              TBRe is widely recognized as a leading Formula Student team in the
              United Kingdom, particularly distinguished for its mastery of
              electric powertrains, a distinction consistently upheld since the
              2017 competition.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Panel */}
      <section className="bg-tbre-blue py-20 text-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClockIcon, value: "10+", label: "Years of Racing" },
              { icon: UsersIcon, value: "50+", label: "Team Members" },
              { icon: AwardIcon, value: "15+", label: "Awards Won" },
              { icon: ZapIcon, value: "100%", label: "Electric Power" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-4 h-8 w-8 text-tbre-yellow" />
                <div className="text-4xl font-bold text-tbre-yellow">
                  {stat.value}
                </div>
                <div className="mt-2 text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-4xl">
                Our Achievements
              </h2>
              <p className="text-lg text-zinc-600">
                Since our formation in 2015, TBRe has grown and developed at an
                astonishing rate. In 2018 a very reliable platform was designed,
                allowing for the 2019 team to design a hybrid carbon fiber and
                spaceframe chassis as well as a minimised battery pack, dropping
                the weight of the car to under 200kg.
              </p>
              {/* <Button
                asChild
                className="bg-tbre-blue text-white hover:bg-tbre-blue/90"
              >
                <Link href="/achievements">View Our Achievements</Link>
              </Button> */}
            </div>
            <Image
              src="/our_achievements.jpg"
              alt="Our achievements"
              width={800}
              height={600}
              className="rounded-lg object-cover lg:order-1"
            />
          </div>
        </div>
      </section>

      {/* Our Members */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-4xl">
                Our Members
              </h2>
              <p className="text-lg text-zinc-600">
                We comprise over 50 professional, motivated, and committed
                students from across our Electrical and Mechanical Engineering
                departments as well as Management and Computer Science, making
                our team truly cross-disciplinary and allowing students from any
                discipline to share and gain knowledge.
              </p>
              <Button
                asChild
                className="bg-tbre-blue text-white hover:bg-tbre-blue/90"
              >
                <Link href="/team">Meet our Team</Link>
              </Button>
            </div>
            <Image
              src="/our_members.jpeg"
              alt="Our members"
              width={800}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 sm:text-4xl">
                Our Sponsors
              </h2>
              <p className="text-lg text-zinc-600">
                Our project would not be possible without the generous support
                of our many sponsors. We work hard to provide a mutually
                beneficial relationship with each of our supporting
                organisations. This can range from a simple promotion in our
                team media to close technical collaboration on some of the
                exciting and innovative aspects of our car.
              </p>
              <Button
                asChild
                className="bg-tbre-blue text-white hover:bg-tbre-blue/90"
              >
                <Link href="/sponsors">Meet our Sponsors</Link>
              </Button>
            </div>
            <Image
              src="/our_sponsors.jpeg"
              alt="Our sponsors"
              width={800}
              height={600}
              className="rounded-lg object-cover lg:order-1"
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      {/* <section className="bg-zinc-50 py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900">
            Latest News
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-lg bg-white shadow-md"
              >
                <Image
                  src="/car.jpg"
                  alt="News thumbnail"
                  width={600}
                  height={400}
                  className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-zinc-900">
                    Latest Achievement
                  </h3>
                  <p className="mb-4 text-zinc-600">
                    Our team&apos;s recent success at the Formula Student
                    competition...
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-tbre-blue hover:text-tbre-blue/80"
                  >
                    Read more <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
