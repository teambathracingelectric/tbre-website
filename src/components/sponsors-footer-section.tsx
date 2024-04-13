import sponsorsData from "@/data/sponsors";
import Image from "next/image";

export default function SponsorsFooterSection() {
  return (
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
  );
}
