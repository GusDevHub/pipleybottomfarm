import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
        className="dark:invert"
        src="https://pipley-farm.com/resources/Pipley%20Bottom%20Farm%20Copyrighted%20Logo%20May%2018.JPG.opt402x189o0%2C0s402x189.JPG"
        alt="Pipley Bottom Farm"
        width={402}
        height={189}
      />
      <p className="mt-4 text-xl font-semibold">Under Construction</p>
    </div>
  );
}