import CarModel from "@/components/car-model";
import ResultsSection from "@/components/results-section";
import TeamSection from "@/components/team-section";
import carsData from "@/data/cars";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = {
  carId: string;
};

export function generateMetadata({ params }: { params: Params }): Metadata {
  return {
    title: `${params.carId} Car`,
  };
}

export default function Page({ params }: { params: Params }) {
  const data = carsData.find((c) => c.year === parseInt(params.carId));

  if (!data) {
    notFound();
  }

  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">
        TBRe{params.carId}
      </h1>
      <br />
      {/* <div className="flex gap-4 items-center w-full md:w-1/3 justify-center flex-wrap md:flex-nowrap">
        <Image
          src="/cars/2021/car-2021-1.jpg"
          alt="Car 2021"
          width={400}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/cars/2021/car-2021-1.jpg"
          alt="Car 2021"
          width={400}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/cars/2021/car-2021-1.jpg"
          alt="Car 2021"
          width={400}
          height={200}
          className="rounded-lg"
        />
      </div> */}
      <Image
        src="/cars/2023/car-2023.jpg"
        alt="Car 2021"
        width={800}
        height={400}
        className="rounded-lg"
      />
      <br />
      <p className="w-full md:w-1/2 mx-auto">
        Due to the effects of the COVID 19 pandemic, the 2021 car was an
        iteration of the 2019 chassis. The car had a completely overhauled
        electrical system, improved firewall and adjusted rear packaging,
        utilising the same powertrain components found in the 2019 car. The team
        also made its first-ever aerodynamics package that was mounted to the
        car at the competition but wasn't utilised in the dynamic events. The
        process of manufacturing these aerofoils allowed the team to expand
        their knowledge on composites manufacture and transfer that knowledge to
        future years.
        <br />
        <br />
        With only two and a half months of lab access, the team was very happy
        to walk away from the competition with two trophies, one for efficiency
        and another for the cost and manufacture event. The car was by far the
        fastest electric vehicle on the track, but due to a lack of testing
        time, the reliability was not good enough to allow the full completion
        of the endurance event. With a little more tuning and fixing some bugs,
        this vehicle can form the starting point of a fantastic car capable of
        competing at the highest levels of the formula student competition.
        <br />
        <br />
        The AI team also did very well at the 2021 formula student, coming away
        with the overall win after winning all of the static events they
        entered.
        <br />
        <br />
        The results of the 2021 competition are a testament to what the team can
        achieve regardless of how tough the circumstances are and looking
        forward the team is set to continue challenging the best formula student
        teams in the UK and abroad.
      </p>
      <CarModel />
      {data.results && <ResultsSection results={data.results} />}
      {data.team && (
        <>
          <h2 className="text-3xl font-extrabold">Meet the Team</h2>
          <TeamSection team={data.team} />
        </>
      )}
    </main>
  );
}
