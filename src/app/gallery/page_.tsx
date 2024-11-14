import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Page() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">Gallery</h1>
      <br />
      <p className="md:w-2/3 p-4">Some content about the gallery</p>
    </main>
  );
}
