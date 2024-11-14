import DateDisplay from "./_components/date-display";
import products from "./_data/products";
import { Card, CardContent, CardHeader } from "./_components/ui/card";
import Image from "next/image";
import Link from "next/link";
import services from "./_data/services";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg">
        <div>
          <h2 className="text-green-800 font-semibold">Welcome</h2>
          <DateDisplay />
        </div>
        <div className="my-4">
          <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
            Our products
          </h3>
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <Link href="/products" key={product.name}>
                <Card className="relative min-w-[167px] rounded-lg max-w-96 overflow-hidden">
                  <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
                    <Image
                      src={product.image}
                      fill
                      className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
                      alt={product.alt}
                    />
                  </CardHeader>
                  <CardContent className="bg-green-800/85 truncate text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
                    {product.name}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
            Our services
          </h3>
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <Link href="/services" key={service.name}>
                <Card className="relative min-w-[348px] rounded-lg max-w-96 overflow-hidden">
                  <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-sm z-0">
                    <Image
                      src={service.image}
                      fill
                      className="object-cover rounded-sm hover:scale-110 hover:duration-300 duration-500"
                      alt={service.alt}
                    />
                  </CardHeader>
                  <CardContent className="bg-blue-800/85 truncate text-white text-sm text-center font-semibold py-2 mt-44 mb-3 relative z-10">
                    {service.name}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
          Wild Camping
        </h3>
        <div className="relative w-full min-h-60">
          <Link href="wildcamping">
            <Image
              src="/services/wildcampingAtPipleyBottomFarm.jpg"
              alt="Wild Camping"
              fill
              objectFit="cover"
              objectPosition="center"
              className="absolute w-full rounded-lg"
            />
          </Link>
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
          About us
        </h3>
        <div className="relative w-full min-h-60">
          <Link href="about">
            <Image
              src="/farmview.jpg"
              alt="Pipley Bottom Farm"
              fill
              objectFit="cover"
              objectPosition="center"
              className="absolute w-full rounded-lg"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
