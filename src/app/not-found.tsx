import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center py-8">
      <h1 className="text-center font-extrabold text-4xl">
        404 - Page Not Found
      </h1>
      <br />
      <p className="text-zinc-900">
        The page you are looking for does not exist.
      </p>
      <br />
      <Image
        src="/placeholder.png"
        alt="404 Image"
        width={200}
        height={200}
        unoptimized
      />
      <br />
      <Button
        asChild
        size="lg"
        className="bg-tbre-yellow text-white hover:bg-tbre-yellow/90"
      >
        <Link href="/">Go Home</Link>
      </Button>
    </main>
  );
}
