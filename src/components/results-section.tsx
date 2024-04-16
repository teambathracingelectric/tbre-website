import type { Results } from "@/data/cars";
import Image from "next/image";

export default function ResultsSection({ results }: { results: Results }) {
  return (
    <section className="py-8 space-y-8 w-full md:w-1/2">
      <h2 className="font-semibold text-2xl">Results</h2>
      {results.map((r) => (
        <div className="flex space-x-8 flex-wrap md:flex-nowrap">
          <Image
            src={r.image}
            alt="result photo"
            width={400}
            height={200}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-xl mb-2">{r.title}</h3>
            <p className="">{r.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
