import Image from "next/image";
import type { Results } from "@/data/cars";

export function ResultsSection({ results }: { results: Results }) {
  return (
    <section className="w-full space-y-8 py-8 md:w-1/2">
      <h2 className="font-semibold text-2xl">Results</h2>
      {results.map((r) => (
        <div
          key={r.title}
          className="flex flex-wrap space-x-8 rounded-lg border-2 border-transparent p-4 transition-all hover:border-tbre-yellow md:flex-nowrap"
        >
          <Image
            src={r.image}
            alt="result photo"
            width={400}
            height={200}
            className="rounded-lg"
            unoptimized
          />
          <div>
            <h3 className="mb-2 font-semibold text-xl">{r.title}</h3>
            <p className="">{r.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
