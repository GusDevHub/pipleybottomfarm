"use client";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation"; // Import usePathname
import { Badge } from "../ui/badge";
import products from "@/app/_data/products";
import services from "@/app/_data/services";

const MenuMobile = () => {
  const pathname = usePathname(); // Get the current pathname

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    { path: "/", label: "Main Page" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/wildcamping", label: "Wild Camping" },
    // { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="w-full">
        <ul className="flex flex-col items-center text-blue-900 font-semibold mt-3">
          {menuItems.map(({ path, label }) => (
            <li
              key={path}
              className={`w-full border-b rounded-lg ${
                isActive(path)
                  ? "bg-blue-800 text-white"
                  : "hover:text-white hover:bg-blue-800"
              }`}
            >
              <SheetClose asChild>
                <Link
                  href={path}
                  className="w-full block p-3"
                  aria-current={isActive(path) ? "page" : undefined}
                >
                  {label}{" "}
                  {label === "Products" && (
                    <Badge className="bg-gray-200 hover:bg-gray-200 hover:text-black text-black text-[10px]">
                      {products.length}
                    </Badge>
                  )}
                  {label === "Services" && (
                    <Badge className="bg-gray-200 hover:bg-gray-200 hover:text-black text-black text-[10px]">
                      {services.length}
                    </Badge>
                  )}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
        <div className="my-6">
          <Button
            asChild
            className="bg-green-600 hover:bg-green-800 font-semibold w-full"
          >
            <Link href="#">Book an appointment now</Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default MenuMobile;
