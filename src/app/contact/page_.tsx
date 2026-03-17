import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-8">
      <h1 className="text-center font-extrabold text-4xl">Contact</h1>
      <br />
      <p>Some content about the contact</p>
    </main>
  );
}
