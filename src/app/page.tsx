import StatsSection from "@/components/stats-section";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="min-h-[80vh] p-8 md:p-64 background-image-car flex flex-col md:justify-center">
        <div className="md:w-1/3">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white pb-4 border-b-8 border-tbre-yellow">
            Team Bath Racing Electric
          </h1>
        </div>
      </section>
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
      <StatsSection />
    </main>
  );
}
