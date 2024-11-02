import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
        className="rounded-lg"
        src="/logo.jpg"
        alt="Pipley Bottom Farm"
        width={402}
        height={189}
      />
      <p className="mt-4 text-sm font-semibold">Under Development...</p>
    </div>
  );
}