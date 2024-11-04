import { MapPin, Phone } from "lucide-react";
import { Card, CardHeader } from "../ui/card";

const Footer = () => {
  return (
    <footer>
      <Card className="w-full bg-blue-950 rounded-none border-none">
        <CardHeader className="text-sm text-white">
          <div className="flex flex-col space-y-3 mx-auto max-w-screen-lg w-full">
            <div className="flex items-start justify-start gap-1">
              <MapPin size={16} className="inline-block text-yellow-400" />
              <p className="text-xs sm:text-sm">
                North Stoke Lane, Upton Cheyney, Bristol BS30 6NG, United
                Kingdom
              </p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Phone size={16} className="inline-block text-yellow-400" />
              <p>0117 9570 100</p>
            </div>
          </div>
          <p className="text-xs text-center pt-3">
            Pipley Bottom Farm &copy; 2024
          </p>
        </CardHeader>
      </Card>
    </footer>
  );
};

export default Footer;
