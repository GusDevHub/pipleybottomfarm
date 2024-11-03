import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import MenuGeneral from "./menu";
import MenuMobile from "./menuMobile";

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
              <MenuGeneral />
            </ul>
          </nav>

          {/* Mobile Menu Button (hidden on larger screens) */}
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <MenuIcon size={24} />
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle className="text-sm text-left opacity-25 pl-3">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <SheetClose asChild>
                <MenuMobile />
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Header;
