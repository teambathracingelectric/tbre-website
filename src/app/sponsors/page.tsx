import sponsorsData from "@/data/sponsors";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsors",
};

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">Sponsors</h1>
      <br />
      <p className="md:w-1/2 p-4">
        Meet our stunning sponsors. We work closely with each of our sponsors to
        ensure a mutually beneficial relationship, with many of our team alumni
        choosing our sponsors as graduate employers. Get in touch to find out
        more about supporting our team. More information about the team is
        provided in our new prospectus: Sponsorship Prospectus 2023/24
      </p>
      <br />
      <section>
        <div className="flex gap-8 p-16 group flex-wrap md:flex-nowrap">
          <div className="md:w-3/5 rounded-3xl group-hover:border-4 border-tbre-yellow transition-all overflow-hidden">
            <Image
              src={sponsorsData[0].sponsors[0].imageOther!}
              alt="TBRe"
              width={sponsorsData[0].sponsors[0].imageWidth}
              height={sponsorsData[0].sponsors[0].imageHeight}
              className="w-full transition-all group-hover:scale-105"
            />
          </div>
          <div className="md:w-2/5">
            <h2 className="text-4xl font-extrabold">Title Sponsor</h2>
            <br />
            <h3 className="text-2xl font-semibold">
              {sponsorsData[0].sponsors[0].name}
            </h3>
            <br />
            <p>{sponsorsData[0].sponsors[0].description}</p>
            <br />
            <a
              href={sponsorsData[0].sponsors[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tbre-yellow underline font-bold text-lg decoration-tbre-yellow"
            >
              Visit {sponsorsData[0].sponsors[0].name}
            </a>
          </div>
        </div>
        <br />
        <h2 className="px-16 text-4xl font-extrabold">Sponsors</h2>
        <div className="p-16 grid md:grid-cols-4 gap-4">
          {sponsorsData.slice(1).map((sponsorLevel, i) =>
            sponsorLevel.sponsors.map((sponsor, j) => (
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`${i}-${j}`}
                className="group overflow-hidden hover:translate-x-2 hover:-translate-y-2 transition-all"
              >
                <div>
                  <Image
                    src={sponsor.imageOther!}
                    alt={sponsor.name}
                    width={400}
                    height={200}
                    className="rounded-xl border-transparent group-hover:border-tbre-yellow border-4 transition-all"
                  />
                  <p className="ml-2 font-bold text-lg group-hover:underline decoration-tbre-yellow">
                    {sponsor.name}
                  </p>
                </div>
              </a>
            )),
          )}
        </div>
      </section>
      <br />
      <section className="p-16">
        <h2 className="text-4xl font-extrabold">Apply to sponsor us</h2>
        <br />
        <p>
          Interested in sponsoring us? Get in touch to find out more about
          supporting our team. More information about the team is provided in
          our new prospectus: Sponsorship Prospectus 2023/24
        </p>
        <br />
        {/* TODO: get download link working */}
        <Link
          href="/Sponsorship+Prospectus+2023-2024.pdf"
          locale={false}
          download
        >
          <button className="bg-tbre-yellow text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transition-all">
            Download our sponsorship prospectus
          </button>
        </Link>
      </section>
    </main>
  );
}
