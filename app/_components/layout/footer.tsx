import { LockKeyhole, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Card className="w-full bg-blue-950 rounded-none border-none">
        <CardHeader className="text-sm text-muted/70 p-5 pt-4">
          <div className="flex flex-col md:flex-row mx-auto max-w-screen-lg w-full md:space-x-12 lg:space-x-20">
            {/* Contact */}
            <div className="flex flex-col space-y-3 w-full md:w-fit">
              <div className="flex items-baseline justify-start gap-1">
                <Link href="/">
                  <Image
                    className="rounded-sm w-24"
                    src="/logo.png"
                    alt="Pipley Bottom Farm"
                    width={201}
                    height={95}
                  />
                </Link>
              </div>
              <div className="flex gap-1">
                <p className="font-bold text-base text-white">Contact</p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <Phone size={12} className="inline-block text-yellow-400" />
                <p>
                  <Link href="tel:01179570100">0117 9570 100</Link>
                </p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <Mail size={12} className="inline-block text-yellow-400" />
                <p>
                  <Link href="mailto:pipley.farm@gmail.com">
                    pipley.farm@gmail.com
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-start gap-1">
                <MapPin className="w-3 h-3 inline-block text-yellow-400" />
                <p className="text-[11px] sm:text-xs">
                  <Link
                    href="https://maps.app.goo.gl/mVsvqBjqeCq8pVy3A"
                    target="_blank"
                  >
                    North Stoke Lane, Upton Cheyney, Bristol <span className="text-nowrap">BS30 6NG</span>, United
                    Kingdom
                  </Link>
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="pt-8 md:pt-14 md:w-fit space-y-3">
              <div className="flex items-baseline justify-start gap-1">
                <p className="font-bold text-base text-white">Links</p>
              </div>
              <div className="flex flex-col items-baseline justify-start space-y-2 text-xs">
                <Link href="/about" className="hover:underline">
                  Pipley Bottom Farm
                </Link>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
                <Link href="/wildcamping" className="hover:underline">
                  Wild Camping
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Explore */}
            <div className="pt-8 md:pt-14 md:min-w-fit space-y-3">
              <div className="flex items-baseline justify-start gap-1">
                <p className="font-bold text-base text-white">Explore</p>
              </div>
              <div className="flex flex-col items-baseline justify-start space-y-2 text-xs">
                <Link href="/faq" className="hover:underline">
                  FAQs
                </Link>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="flex items-center gap-1">
                  <span>Restrict Area</span>
                  <LockKeyhole className="w-5 h-5 border border-muted/70 rounded-2xl p-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-center pt-10 pb-3">
            &copy; 2010 -&nbsp;{new Date().getFullYear()} Copyright
            <p className="font-bold text-center">Pipley Bottom Farm</p>
          </div>
        </CardHeader>
      </Card>
    </footer>
  );
};

export default Footer;
