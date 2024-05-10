"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="min-h-[80vh] p-8 md:p-64 background-image-car flex flex-col md:justify-center">
        {/* <div className="md:w-1/3">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white pb-4 border-b-8 border-tbre-yellow">
            Team Bath Racing Electric
          </h1>
        </div> */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white pb-4 border-b-8 border-tbre-yellow">
            Team Bath Racing Electric
          </h1>
        </motion.div>
      </section>
      <br />
      <section className="flex flex-col items-center p-16 space-y-16">
        <div className="flex justify-center gap-8 md:w-2/3 items-center flex-wrap-reverse md:flex-nowrap">
          <p>
            Team Bath Racing Electric is an electric Formula Student team based
            out of the University of Bath's Faculty of Engineering and Design.
            <br />
            <br />
            Formula Student is the world's largest student engineering
            competition, with over 600 universities taking part in its numerous
            competitions internationally.
            <br />
            <br />
            For more information on our main event, Formula Student UK, visit
            the{" "}
            <a
              href="https://imeche.org/events/formula-student"
              target="_blank"
              rel="noreferrer"
              className="hover:text-tbre-yellow underline decoration-tbre-yellow"
            >
              FSUK website
            </a>
          </p>
          <Image
            src="/landing_car_1.jpg"
            alt="Car"
            width={1920}
            height={1080}
            className="rounded-md md:w-1/2"
          />
        </div>
        <div className="flex justify-center gap-8 md:w-2/3 items-center flex-wrap md:flex-nowrap">
          <Image
            src="/landing_car_2.jpg"
            alt="Car"
            width={1920}
            height={1080}
            className="rounded-md md:w-1/2"
          />
          <p>
            We take pride in our consistent position as one of the foremost
            Electric Formula Student teams in the UK, a testament to our
            commitment and excellence since 2017.
            <br />
            <br />
            There is an emphasis within the team to produce bespoke, in-house
            designs to ensure that the car is optimised for racing conditions.
            This philosophy provides a platform for both learning and innovation
            and allows the team and its members to develop year on year.
          </p>
        </div>
      </section>
      <br />
      <section className=" bg-tbre-yellow p-16 text-white">
        <h2 className="text-4xl font-semibold text-center">About Us</h2>
        <br />
        <div className="md:flex gap-16">
          <p className="flex-1">
            Team Bath Racing Electric (TBRe) was founded in 2015. We are an
            exciting and innovative student motorsport team based at the
            University of Bath. Our team of undergraduates from across the
            university design, build and race a formula-style car for the
            Formula Student competition against teams from all around the world.
            <br />
            <br />
            We compete at Silverstone each year for the UK event and travel
            around the world to compete in international Formula student events.
            We were the first UK electric team to compete abroad, competing in
            Zhuhai, China in 2018.
          </p>
          <p className="flex-1">
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
      </section>
      <br />
      <section className="flex flex-col items-center p-16 space-y-16">
        <div className="flex justify-center gap-8 md:w-2/3 items-center flex-wrap md:flex-nowrap">
          <Image
            src="/our_achievements.jpg"
            alt="Our Achievements"
            width={1920}
            height={1080}
            className="rounded-md md:w-1/2"
          />
          <div>
            <h3 className="text-2xl font-semibold">Our Achievements</h3>
            <br />
            <p>
              Since our formation in 2015, TBRe has grown and developed at an
              astonishing rate. In 2018 a very reliable platform was designed,
              allowing for the 2019 team to design a hybrid carbon fiber and
              spaceframe chassis as well as a minimised battery pack, dropping
              the weight of the car to under 200kg.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-8 md:w-2/3 items-center flex-wrap-reverse md:flex-nowrap">
          <div>
            <h3 className="text-2xl font-semibold">Our Members</h3>
            <br />
            <p>
              We comprise over 50 professional, motivated and committed students
              from across our Electrical and Mechanical Engineering departments
              as well as Management and Computer Science, making our team truly
              cross-disciplinary and allowing students from any discipline to
              share and gain knowledge.
            </p>
          </div>
          <Image
            src="/our_members.jpeg"
            alt="Our Members"
            width={1920}
            height={1080}
            className="rounded-md md:w-1/2"
          />
        </div>
        <div className="flex justify-center gap-8 md:w-2/3 items-center flex-wrap md:flex-nowrap">
          <Image
            src="/our_sponsors.jpeg"
            alt="Our Sponsors"
            width={1920}
            height={1080}
            className="rounded-md md:w-1/2"
          />
          <div>
            <h3 className="text-2xl font-semibold">Our Sponsors</h3>
            <br />
            <p>
              Our project would not be possible without the generous support of
              our many sponsors. We work hard to provide a mutually beneficial
              relationship with each of our supporting organisations. This can
              range from a simple promotion in our team media to close technical
              collaboration on some of the exciting and innovative aspects of
              our car.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
