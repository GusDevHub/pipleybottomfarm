import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Card className="w-full bg-blue-950 rounded-none border-none">
        <CardHeader className="text-sm text-muted/70 p-5 pt-4">
          <div className="flex flex-col space-y-3 mx-auto max-w-screen-lg w-full">
            <div className="flex items-baseline justify-start gap-1">
              <Link href="/">
                <Image
                  className="rounded-sm w-24"
                  src="/logo.jpg"
                  alt="Pipley Bottom Farm"
                  width={201}
                  height={95}
                />
              </Link>
            </div>
            <div className="flex items-baseline justify-start gap-1">
              <p className="font-bold text-base text-white">Contact</p>
            </div>
            <div className="flex items-baseline justify-start gap-1">
              <Phone size={12} className="inline-block text-yellow-400" />
              <p>
                <Link href="tel:01179570100">0117 9570 100</Link>
              </p>
            </div>
            <div className="flex items-baseline justify-start gap-1">
              <Mail size={12} className="inline-block text-yellow-400" />
              <p>
                <Link href="mailto:pipley.farm@gmail.com">
                  pipley.farm@gmail.com
                </Link>
              </p>
            </div>
            <div className="flex items-baseline justify-start gap-1">
              <MapPin size={12} className="inline-block text-yellow-400" />
              <p className="text-[10px] sm:text-sm">
                <Link
                  href="https://maps.app.goo.gl/mVsvqBjqeCq8pVy3A"
                  target="_blank"
                >
                  North Stoke Lane, Upton Cheyney, Bristol BS30 6NG, United
                  Kingdom
                </Link>
              </p>
            </div>
          </div>
          <div className="text-xs text-center pt-8 pb-3">
            &copy; 2010 &mdash;&nbsp;{new Date().getFullYear()} Copyright
            <p className="font-bold text-center">
              Pipley Bottom Farm
            </p>
          </div>
        </CardHeader>
      </Card>
    </footer>
  );
};

export default Footer;
