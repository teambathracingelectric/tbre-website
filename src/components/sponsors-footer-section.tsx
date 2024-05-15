import sponsorsData from "@/data/sponsors";
import Image from "next/image";

export default function SponsorsFooterSection() {
  return (
    // <section className="bg-black text-white p-16">
    <section className="bg-tbre-blue-cool text-white p-16 space-y-8">
      {sponsorsData
        .filter((sponsorLevel) => sponsorLevel.sponsors.length > 0)
        .map((sponsorLevel) => (
          <div key={sponsorLevel.level} className="flex flex-col md:flex-row">
            <h3 className="max-w-sm w-full font-bold text-2xl">
              {sponsorLevel.level}
            </h3>
            <div className="flex flex-wrap gap-x-8 justify-center md:justify-start items-center">
              {sponsorLevel.sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.logoWidth}
                    height={sponsor.logoHeight}
                    className="filter grayscale hover:filter-none transition-all"
                    // className="filter grayscale invert hover:filter-none transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
}
