export function CarStats() {
  return (
    <section className="border-y bg-zinc-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Top Speed", value: "120 km/h" },
            { label: "0-100 km/h", value: "4.2s" },
            { label: "Power Output", value: "80 kW" },
            { label: "Weight", value: "230 kg" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white p-6 text-center shadow-sm"
            >
              <div className="font-bold text-2xl text-tbre-blue">
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
