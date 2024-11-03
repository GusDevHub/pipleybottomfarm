import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardHeader className="p-2 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6">
<Link href="/" className="">
          <Image
            className="rounded-lg w-32 sm:w-48"
            src="/logo.jpg"
            alt="Pipley Bottom Farm"
            width={201}
            height={95}
          />
</Link>
          <nav>
            <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-green-900 font-semibold">
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
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/wildcamping" className="hover:underline">
                  Wild Camping
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
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