import DateDisplay from "./_components/date-display";
import products from "./_data/products";
import { Card, CardContent } from "./_components/ui/card";
import Image from "next/image";
import Link from "next/link";
import services from "./_data/services";
import { Badge } from "./_components/ui/badge";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg">
        <div>
          <h2 className="text-sm text-green-800 font-semibold">
            Welcome back!
          </h2>
          <DateDisplay />
        </div>

        <div className="w-full h-40 md:min-h-60 rounded-lg gradient border my-6"></div>

        <div className="my-4">
          <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
            Our products
          </h3>
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <Link href="/products" key={product.name}>
                <Card className="min-w-[167px] md:min-w-64 max-w-28 md:max-w-80 rounded-2xl bg-gray-100">
                  <CardContent className="px-1 py-0 pt-1">
                    <div className="w-full h-[159px] relative">
                      <Image
                        alt={product.name}
                        src={product.imageUrl}
                        style={{
                          objectFit: "cover",
                        }}
                        fill
                        className="rounded-t-xl rounded-b-sm"
                      />
                      <div className="absolute bottom-3 right-2 z-10">
                        {(product.type?.length ?? 0) > 1 ? (
                          <Badge
                            variant="secondary"
                            className="bg-blue-800/85 hover:bg-blue-800/85 text-[10px] text-white"
                          >
                            {product.type?.length} products
                          </Badge>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="px-2 pb-3">
                      <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap text-sm text-left text-green-800 font-semibold">
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
                <Card className="min-w-[167px] md:min-w-64 max-w-28 md:max-w-80 rounded-2xl bg-gray-100">
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
                      <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap text-sm text-center md:text-left text-blue-800 font-semibold">
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
