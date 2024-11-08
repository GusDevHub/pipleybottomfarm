import Image from "next/image";
import { Card, CardContent, CardHeader } from "../_components/ui/card";

const ProductsPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700 border-b pb-3">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/hay.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Hay"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Hay
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/straw.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Straw"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Straw
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/haylage.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Haylage"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Haylage
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/kindling.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Kindling"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Kindling
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/small-log.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Small log"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Small log
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/eggs.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Eggs"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Eggs
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/fertilised-egg.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Fertilised eggs"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Fertilised eggs
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/duckling-chick.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Day old ducklings/chicks"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Day old ducklings/chicks
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/young-waterfowl.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Young Waterfowl"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Young Waterfowl
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/apples.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Apples"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Apples
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/pears.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Pears"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Pears
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/plums.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Gages, plums, damsons"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Gages, plums, damsons
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/cherries.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Cherries"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Cherries
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/nuts.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Nuts"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Nuts
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/hedgerow-fruits.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Hedgerow fruit"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Hedgerow fruit
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/products/goat-cheese.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="British saanen goats cheese"
            />
          </CardHeader>
          <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            British saanen goats cheese
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductsPage;
