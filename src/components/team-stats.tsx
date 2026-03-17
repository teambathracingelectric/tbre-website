export function TeamStats() {
  return (
    <section className="border-y bg-zinc-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Team Members", value: "50+" },
            { label: "Years Racing", value: "15" },
            { label: "Competitions Won", value: "12" },
            { label: "Countries Raced", value: "8" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white p-6 text-center shadow-sm"
            >
              <div className="font-bold text-3xl text-tbre-blue">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
