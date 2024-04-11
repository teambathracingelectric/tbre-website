import sponsorsData from "@/data/sponsors";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Sponsors
      </h1>
      <p>Some content about the sponsors</p>
      <br />
      <section>
        {sponsorsData.map((s) => (
          <div>
            <h2>{s.name}</h2>
            <p>{s.year}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
