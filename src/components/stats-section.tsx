import { statsData } from "@/data/stats";

export function StatsSection() {
  return (
    <section className="mx-auto w-1/2">
      <h2 className="text-center font-extrabold text-4xl">Stats</h2>
      <div className="grid grid-cols-2">
        <div>
          <p className="font-bold text-5xl underline decoration-tbre-yellow">
            {statsData.members}
          </p>
          <p>members</p>
        </div>
        <div>
          <p className="font-bold text-5xl underline decoration-tbre-yellow">
            {statsData.departments}
          </p>
          <p>departments</p>
        </div>
        <div>
          <p className="font-bold text-5xl underline decoration-tbre-yellow">
            {statsData.years}
          </p>
          <p>years</p>
        </div>
        <div>
          <p className="font-bold text-5xl underline decoration-tbre-yellow">
            {statsData.prototypes}
          </p>
          <p>prototypes</p>
        </div>
      </div>
    </section>
  );
}
