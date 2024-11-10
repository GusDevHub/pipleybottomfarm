import Image from "next/image";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import services from "../_data/services";

const ServicesPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700 border-b pb-3">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        {services.map((service) => (
          <Card key={service.name} className="relative border-transparent w-full max-w-96 overflow-hidden">
            <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
              <Image
                src={service.image}
                fill
                className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
                alt={service.alt}
              />
            </CardHeader>
            <CardContent className="bg-blue-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-3 relative z-10">
              {service.name}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;