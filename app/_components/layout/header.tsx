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
import { Button } from "../ui/button";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardHeader className="p-2 max-w-5xl mx-auto">
        <div className="flex items-center justify-between ml-3">
          {/* Logo */}
          <Link href="/">
            <Image
              className="rounded-lg w-32 md:w-48"
              src="/logo.png"
              alt="Pipley Bottom Farm"
              width={201}
              height={95}
            />
          </Link>

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 text-green-900 font-semibold">
              <MenuGeneral />
            </ul>
          </nav>

          {/* Mobile Menu Button (hidden on larger screens) */}
          <Sheet>
            <SheetTrigger className="md:hidden text-blue-800 mr-3" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[70%] sm:invisible overflow-y-auto [&::-webkit-scrollbar]:hidden">
              <SheetHeader>
                <SheetTitle>
                  <SheetClose className="w-fit" asChild>
                    <Link href="/" className="block w-fit">
                      <Image
                        className="w-24 md:w-48"
                        src="/logo.png"
                        alt="Pipley Bottom Farm"
                        width={201}
                        height={95}
                      />
                    </Link>
                  </SheetClose>
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
