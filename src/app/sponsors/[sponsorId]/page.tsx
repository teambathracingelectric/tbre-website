import { sponsorsData } from "@/data/sponsors";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return sponsorsData.flatMap((sponsorLevel) =>
    sponsorLevel.sponsors.map((sponsor) => ({ sponsorId: sponsor.id }))
  );
};

type Params = {
  sponsorId: string;
};

export function generateMetadata({ params }: { params: Params }): Metadata {
  const data = sponsorsData
    .find((c) => c.level === "Title Sponsor")
    ?.sponsors.find((s) => s.id === params.sponsorId);

  return {
    title: data?.name ?? params.sponsorId,
  };
}

export default function Page({ params }: { params: Params }) {
  const data = sponsorsData
    .find((c) => c.level === "Title Sponsor")
    ?.sponsors.find((s) => s.id === params.sponsorId);

  if (!data) {
    notFound();
  }

  return (
    <main className="p-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">{data.name}</h1>
      <br />
      <Image
        src={data.logo}
        alt={data.name}
        width={800}
        height={400}
        className="rounded-lg"
      />
      <p className="md:w-1/2 p-4">{data.description}</p>
    </main>
  );
}
