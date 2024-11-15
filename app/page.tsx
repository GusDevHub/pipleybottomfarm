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
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <Link href="/products" key={product.name}>
                <Card className="min-w-[167px] max-w-28 rounded-2xl bg-gray-100">
                  <CardContent className="px-1 py-0 pt-1">
                    <div className="w-full h-[159px] relative">
                      <Image
                        alt={product.name}
                        src={product.image}
                        style={{
                          objectFit: "cover",
                        }}
                        fill
                        className="rounded-t-xl rounded-b-sm"
                      />
                    </div>
                    <div className="px-2 pb-3">
                      <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap text-sm text-center text-green-800 font-bold">
                        {product.name}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 mb-4">
          <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
            Our services
          </h3>
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {services.map((service) => (
              <Link href="/services" key={service.name}>
                <Card className="min-w-[167px] max-w-28 rounded-2xl bg-gray-100">
                  <CardContent className="px-1 py-0 pt-1">
                    <div className="w-full h-[159px] relative">
                      <Image
                        alt={service.name}
                        src={service.image}
                        style={{
                          objectFit: "cover",
                        }}
                        fill
                        className="rounded-t-xl rounded-b-sm"
                      />
                    </div>
                    <div className="px-2 pb-3">
                      <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap text-sm text-center text-blue-800 font-bold">
                        {service.name}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 mb-4">
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
