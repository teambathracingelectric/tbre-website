import Model from "@/components/model";

export default function Page({ params }: { params: { carId: string } }) {

  return (
    <main className="pt-8 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold tracking-tighter">
        Car {params.carId}
      </h1>
      <p>Some content about the car</p>
      <br />
      <div>
        <p>more here</p>
      </div>
      <br />
      <Model />
    </main>
  );
}
