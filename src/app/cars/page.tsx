import carsData from "@/data/cars";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Cars
      </h1>
      <p>Some content about the cars</p>
      <br />
      <section>
        {carsData.map((c) => (
          <Link key={c.year} href={`/cars/${c.year}`}>
            <div>
              <h2>{c.name}</h2>
              <p>{c.year}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
