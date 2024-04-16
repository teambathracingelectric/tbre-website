import carsData from "@/data/cars";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">Cars</h1>
      <br />
      <section className="grid grid-cols-2 gap-8">
        {carsData.map((c) => (
          <Link
            key={c.year}
            href={`/cars/${c.year}`}
            className="flex flex-col hover:translate-x-2 hover:-translate-y-2 transition-all"
          >
            <Image
              src={c.image}
              alt={c.name}
              width={400}
              height={200}
              className="rounded-lg"
            />
            <div className="mt-2 flex justify-between items-center">
              <h2 className="font-semibold text-2xl">{c.name}</h2>
              <p>{c.year}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
