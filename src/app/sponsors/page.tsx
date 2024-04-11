import sponsorsData from "@/data/sponsors";
import Image from "next/image";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Sponsors
      </h1>
      <br />
      <p>
        Meet our stunning sponsors. We work closely with each of our sponsors to
        ensure a mutually beneficial relationship, with many of our team alumni
        choosing our sponsors as graduate employers. Get in touch to find out
        more about supporting our team. More information about the team is
        provided in our new prospectus: Sponsorship Prospectus 2023/24
      </p>
      <br />
      <section className="bg-black text-white p-16">
        {sponsorsData
          .filter((sponsorLevel) => sponsorLevel.sponsors.length > 0)
          .map((sponsorLevel) => (
            <div key={sponsorLevel.level} className="flex mb-4">
              <h3 className="max-w-sm w-full font-bold text-2xl">
                {sponsorLevel.level}
              </h3>
              <div className="flex flex-wrap space-x-8">
                {sponsorLevel.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      width={sponsor.imageWidth}
                      height={sponsor.imageHeight}
                      className="filter grayscale hover:filter-none transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
