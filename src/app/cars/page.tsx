import carsData from "@/data/cars";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Cars
      </h1>
      <br />
      <section>
        {carsData.map((c) => (
          <Link key={c.year} href={`/cars/${c.year}`}>
            <div>
              <Image
                src={c.image}
                alt={c.name}
                className="rounded-lg"
                width={400}
                height={200}
              />
              <h2>{c.name}</h2>
              <p>{c.year}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
