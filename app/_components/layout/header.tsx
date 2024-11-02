import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardHeader className="p-2 max-w-5xl mx-auto">
        <div className="flex items-center justify-evenly space-x-6">
          <Image
            className="rounded-lg"
            src="/logo.jpg"
            alt="Pipley Bottom Farm"
            width={201}
            height={95}
          />
          <nav>
            <ul className="flex items-center justify-between space-x-6 text-green-900 font-semibold">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;