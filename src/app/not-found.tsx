import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-8 min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center font-extrabold">
        404 - Page Not Found
      </h1>
      <br />
      <p className="text-zinc-900">
        The page you are looking for does not exist.
      </p>
      <br />
      <Image src="/placeholder.png" alt="404 Image" width={200} height={200} />
      <br />
      <Button
        asChild
        size="lg"
        className="bg-tbre-yellow hover:bg-tbre-yellow/90 text-white"
      >
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  );
}
