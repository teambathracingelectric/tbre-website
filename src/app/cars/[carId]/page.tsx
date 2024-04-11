import { useParams } from "next/navigation";

export default function Page() {
  const { carId } = useParams();

  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Car {carId}
      </h1>
      <p>Some content about the car</p>
      <br />
      <div>
        <p>more here</p>
      </div>
    </main>
  );
}
