import teamData from "@/data/team";
import Image from "next/image";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Team
      </h1>
      <p>Some content about the team members</p>
      <br />
      {teamData.map((s) => (
        <section key={s.category}>
          <h2 className="text-center font-semibold text-2xl">{s.category}</h2>
          <br />
          <div className="flex justify-center gap-8">
            {s.members.map((m) => (
              <div key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
                <Image
                  src={m.image ?? "/team/placeholder.png"}
                  alt={`Photo of ${m.name}`}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
