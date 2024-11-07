import Image from "next/image";
import { Card, CardContent, CardHeader } from "../_components/ui/card";

const ServicesPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700 border-b pb-3">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        
        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/knife-sharpening.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Blade, drill bits, Knife sharpening"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Blade, drill bits, Knife sharpening
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/horse-breeding.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Horse Breeding"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Horse Breeding
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/horse-riding.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Horse training and Horse driver development"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm md:text-xs text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Horse training and Horse driver development
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/bagot-goat.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Bagot Goat Conservation Breeding"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Bagot Goat Conservation Breeding
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/agriculture.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Agricultural Contracting"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Agricultural Contracting
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/shepherding.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Shepherding"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Shepherding
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/live-stock.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Animal and Livestock Husbandry"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
            Animal and Livestock Husbandry
          </CardContent>
        </Card>

        <Card className="relative border-transparent w-full max-w-96 overflow-hidden">
          <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
            <Image
              src="/wildcampingAtPipleyBottomFarm.jpg"
              fill
              className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
              alt="Agricultural Contracting"
            />
          </CardHeader>
          <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
           Wild camping and almost wild camping
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ServicesPage;