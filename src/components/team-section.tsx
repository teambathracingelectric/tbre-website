import type { Team } from "@/data/cars";
import Image from "next/image";

export default function TeamSection({ team }: { team: Team }) {
  return (
    <section className="py-8 space-y-8">
      {team.map((s, i) => (
        <div key={`${i}-${s.category}`}>
          <h2 className="text-center font-semibold text-2xl">{s.category}</h2>
          <br />
          <div className={`grid gap-y-8 grid-cols-1 gap-x-8 ${s.members.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3 '}`}>
            {s.members.map((m) => (
              <div key={m.name} className="flex flex-col items-center">
                <Image
                  src={m.image ?? "/team/placeholder.png"}
                  alt={`Photo of ${m.name}`}
                  width={200}
                  height={200}
                  className="rounded-full object-cover size-[200px] mb-2"
                />
                {m.link ? (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-tbre-yellow transition-all underline decoration-tbre-yellow"
                  >
                    <h3 className="font-bold text-lg">{m.name}</h3>
                  </a>
                ) : (
                  <h3 className="font-bold text-lg">{m.name}</h3>
                )}
                {m.role && <p className="text-center">{m.role}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
