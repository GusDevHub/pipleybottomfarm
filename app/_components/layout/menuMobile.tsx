import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";

const MenuMobile = () => {
  return (
    <>
      {/* Mobile Navigation (hidden on desktop) */}
      <nav className="w-full">
        <ul className="flex flex-col items-center space-y-3 text-blue-900 font-semibold">
          <li className="w-full pt-6 border-b pb-3">
            <SheetClose asChild>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b pb-3">
            <SheetClose asChild>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b pb-3">
            <SheetClose asChild>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b pb-3">
            <SheetClose asChild>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b pb-3">
            <SheetClose asChild>
              <Link href="/wildcamping" className="hover:underline">
                Wild Camping
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b pb-3">
            <SheetClose asChild>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b pb-3">
            <SheetClose asChild>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </SheetClose>
          </li>
        </ul>
        <div className="my-6">
          <Button asChild className="bg-green-600 hover:bg-blue-800 font-semibold">
            <Link href="#">Book an appointment now</Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default MenuMobile;
