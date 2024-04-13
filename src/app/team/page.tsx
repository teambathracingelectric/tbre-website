import TeamSection from "@/components/team-section";
import teamData from "@/data/team";

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Team
      </h1>
      <TeamSection team={teamData} />
    </main>
  );
}
