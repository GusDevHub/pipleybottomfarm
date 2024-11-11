import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import products from "./_data/products";
import { Card, CardContent, CardHeader } from "./_components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg">
        <div>
          <h2 className="font-semibold">Welcome back!</h2>
          <p className="text-sm text-green-900">
            {format(new Date(), "EEEE, d MMMM yyyy", { locale: enGB })}
          </p>
        </div>
        <div className="my-4">
          <h3 className="text-xs text-gray-400 font-bold uppercase mb-2">
            Our products
          </h3>
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {products.map((product) => (
              <Link href="/products" key={product.name}>
                <Card
                  className="relative min-w-[167px] rounded-2xl max-w-96 overflow-hidden"
                >
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
      </div>
    </>
  );
}
