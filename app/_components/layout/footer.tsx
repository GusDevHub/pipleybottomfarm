import { MapPin, Phone } from "lucide-react";
import { Card, CardHeader } from "../ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="w-full bg-blue-950 rounded-none">
        <CardHeader className="text-sm text-center text-white">
          Pipley Bottom Farm &copy; 2024
          <div className="flex flex-col items-center space-y-3 mt-3">
            <p className="flex items-center gap-1">
              <MapPin size={16} className="inline-block text-yellow-400" />
              North Stoke Lane, Upton Cheyney, Bristol BS30 6NG, United Kingdom
            </p>
            <p className="flex items-center gap-1">
              <Phone size={16} className="inline-block text-yellow-400" />
              0117 9570 100
            </p>
          </div>
        </CardHeader>
      </Card>
    </footer>
  );
};

export default Footer;
