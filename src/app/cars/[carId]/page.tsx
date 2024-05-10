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
    <main className="p-8 min-h-screen flex flex-col items-center">
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
        src={data.image}
        alt={`${data.year} Car`}
        width={800}
        height={400}
        className="rounded-lg"
      />
      <br />
      {data.text && <p className="w-full md:w-1/2 mx-auto">{data.text}</p>}
      <br />
      {data.model && <CarModel src={data.model} />}
      <br />
      {data.results && <ResultsSection results={data.results} />}
      <br />
      {data.team && (
        <>
          <h2 className="text-3xl font-extrabold">Meet the Team</h2>
          <TeamSection team={data.team} />
        </>
      )}
    </main>
  );
}
