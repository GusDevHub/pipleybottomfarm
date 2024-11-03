import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardHeader className="p-2 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              className="rounded-lg w-32 sm:w-48"
              src="/logo.jpg"
              alt="Pipley Bottom Farm"
              width={201}
              height={95}
            />
          </Link>

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden sm:block">
            <ul className="flex items-center space-x-6 text-green-900 font-semibold">
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

          {/* Mobile Menu Button (hidden on larger screens) */}
          <Button variant="outline" className="sm:hidden">
            <MenuIcon size={24} />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;