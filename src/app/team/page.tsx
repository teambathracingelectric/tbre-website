import TeamSection from "@/components/team-section";
import { teamData } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">Team</h1>
      <TeamSection team={teamData} />
    </main>
  );
}
