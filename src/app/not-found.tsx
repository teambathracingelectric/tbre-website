import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold">
        404 - Page Not Found
      </h1>
      <br />
      <p>The page you are looking for does not exist.</p>
      <br />
      <Image src="/placeholder.png" alt="404 Image" width={200} height={200} />
      <br />
      <Link href="/">
        <button className="bg-tbre-yellow text-white font-bold py-2 px-4 rounded-lg hover:scale-105 transition-all">
          Go Home
        </button>
      </Link>
    </main>
  );
}
