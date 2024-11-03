import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";

const MenuMobile = () => {
  return (
    <>
      {/* Mobile Navigation (hidden on desktop) */}
      <nav className="w-full">
        <ul className="flex flex-col items-center text-blue-900 font-semibold">
          <li className="w-full border-b mt-3 hover:text-white hover:bg-blue-800">
            <SheetClose asChild>
              <Link href="/" className="w-full block p-3">
                Home
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b bg-blue-800 text-white">
            <SheetClose asChild>
              <Link href="/about" className="w-full block p-3">
                About
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b hover:text-white hover:bg-blue-800">
            <SheetClose asChild>
              <Link href="/services" className="w-full block p-3">
                Services
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b hover:text-white hover:bg-blue-800">
            <SheetClose asChild>
              <Link href="/products" className="w-full block p-3">
                Products
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b hover:text-white hover:bg-blue-800">
            <SheetClose asChild>
              <Link href="/wildcamping" className="w-full block p-3">
                Wild Camping
              </Link>
            </SheetClose>
          </li>
          <li className="w-full border-b hover:text-white hover:bg-blue-800">
            <SheetClose asChild>
              <Link href="/blog" className="w-full block p-3">
                Blog
              </Link>
            </SheetClose>
          </li>
          <li className="w-full mb-3 hover:text-white hover:bg-blue-800">
            <SheetClose asChild>
              <Link href="/contact" className="w-full block p-3">
                Contact
              </Link>
            </SheetClose>
          </li>
        </ul>
        <div className="my-6">
          <Button asChild className="bg-green-600 hover:bg-green-800 font-semibold w-full">
            <Link href="#">Book an appointment now</Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default MenuMobile;
