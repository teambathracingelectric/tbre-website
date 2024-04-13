import statsData from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="w-1/2 mx-auto">
      <h2 className="text-4xl text-center font-extrabold tracking-tighter">
        Stats
      </h2>
      <div className="grid grid-cols-2">
        <div>
          <p className="text-5xl font-bold underline decoration-tbre-yellow">
            {statsData.members}
          </p>
          <p>members</p>
        </div>
        <div>
          <p className="text-5xl font-bold underline decoration-tbre-yellow">
            {statsData.departments}
          </p>
          <p>departments</p>
        </div>
        <div>
          <p className="text-5xl font-bold underline decoration-tbre-yellow">
            {statsData.years}
          </p>
          <p>years</p>
        </div>
        <div>
          <p className="text-5xl font-bold underline decoration-tbre-yellow">
            {statsData.prototypes}
          </p>
          <p>prototypes</p>
        </div>
      </div>
    </section>
  );
}
