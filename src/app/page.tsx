import StatsSection from "@/components/stats-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="min-h-[80vh] p-8 md:p-64 background-image-car flex flex-col md:justify-center">
        <div className="md:w-1/3">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white pb-4 border-b-8 border-tbre-yellow">
            Team Bath Racing Electric
          </h1>
        </div>
      </section>
      <StatsSection />
    </main>
  );
}
