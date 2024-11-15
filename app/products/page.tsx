"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import products from "../_data/products";
import { Badge } from "../_components/ui/badge";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../_components/ui/dialog";
import {
  CircleArrowLeft,
  CircleArrowRight,
  LucideArrowBigDown,
} from "lucide-react";
import { ScrollArea } from "../_components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../_components/ui/table";

type StockStatus = number | undefined;

const getStockStatus = (stock: StockStatus) => {
  switch (stock) {
    case 1:
      return { text: "Available", style: "bg-green-500" };
    case 2:
      return { text: "Running low", style: "bg-yellow-500 text-yellow-800" };
    case 3:
      return { text: "Unavailable", style: "bg-red-500" };
    default:
      return { text: "Not provided", style: null };
  }
};

const ProductsPage = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState<number | null>(
    null
  );

  // Go to the previous product
  const goToPreviousProduct = () => {
    if (currentProductIndex === null) return; // Guard clause for null
    setCurrentProductIndex((prevIndex) => {
      if (prevIndex === null) return null; // Explicitly check for null
      return prevIndex > 0 ? prevIndex - 1 : products.length - 1;
    });
  };

  // Go to the next product
  const goToNextProduct = () => {
    if (currentProductIndex === null) return; // Guard clause for null
    setCurrentProductIndex((prevIndex) => {
      if (prevIndex === null) return null; // Explicitly check for null
      return prevIndex < products.length - 1 ? prevIndex + 1 : 0;
    });
  };

  return (
    <div>
      <h1 className="font-bold text-green-700 border-b pb-3">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        {products.map((product, index) => (
          <Dialog
            key={product.name}
            open={currentProductIndex === index}
            onOpenChange={(isOpen) => {
              if (!isOpen) {
                setCurrentProductIndex(null);
              }
            }}
          >
            <DialogTrigger onClick={() => setCurrentProductIndex(index)}>
              <Card className="relative w-full max-w-96 overflow-hidden">
                <CardHeader className="absolute top-0 left-0 w-full h-full bg-slate-500 rounded-lg z-0">
                  <Image
                    src={product.image}
                    fill
                    className="object-cover rounded-lg hover:scale-110 hover:duration-300 duration-500"
                    alt={product.alt}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <CardTitle className="absolute left-2 bottom-2 w-full pr-4">
                    <div className="flex items-center justify-center gap-1">
                      {product.stock && (
                        <Badge
                          className={`text-white w-fit ${
                            getStockStatus(product.stock).style
                          } hover:${getStockStatus(product.stock).style}`}
                        >
                          {getStockStatus(product.stock).text}
                        </Badge>
                      )}
                      {product.price && (
                        <Badge
                          className={`w-fit ${
                            product.price.startsWith("£")
                              ? "bg-blue-500 hover:bg-blue-500 text-white"
                              : "bg-yellow-400 hover:bg-green-500 text-yellow-800"
                          } hover:text-white`}
                        >
                          {product.link ? (
                            <Link
                              href={product.link}
                              className="hover:text-white"
                            >
                              {product.price}
                            </Link>
                          ) : (
                            product.price
                          )}
                        </Badge>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-green-800/85 text-white text-sm text-center font-semibold py-2 mt-32 mb-10 relative z-10">
                  {product.name}
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="max-h-[600px] gap-0">
              <DialogHeader>
                <DialogTitle>
                  <div className="relative w-full mt-4 mb-8 h-28">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="absolute w-full rounded-sm"
                    />
                    <div className="flex items-center justify-between absolute -bottom-5 right-2 px-3 py-1 gap-4 bg-blue-700/75 rounded-full">
                      <CircleArrowLeft
                        size={35}
                        className="text-white hover:text-yellow-300 cursor-pointer stroke-1"
                        onClick={goToPreviousProduct}
                      />
                      <CircleArrowRight
                        size={35}
                        className="text-white hover:text-yellow-300 cursor-pointer stroke-1"
                        onClick={goToNextProduct}
                      />
                    </div>
                  </div>
                  {product.name}
                  {product.stock && (
                    <Badge
                      className={`text-white w-fit ml-3 ${
                        getStockStatus(product.stock).style
                      } hover:${getStockStatus(product.stock).style}`}
                    >
                      {getStockStatus(product.stock).text}
                    </Badge>
                  )}
                </DialogTitle>
                {product.description && (
                  <DialogDescription>{product.description}</DialogDescription>
                )}
              </DialogHeader>
              {product.type && (
                <Table className="py-0 my-0">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250] font-bold">
                        Product Name
                      </TableHead>
                      <TableHead className="text-right font-bold">
                        Price
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                </Table>
              )}
              <ScrollArea className="max-h-[185px] relative">
                <div>
                  {product.type && (
                    <>
                      <Table className="py-0 my-0">
                        <TableBody>
                          {product.type.map((type) => (
                            <TableRow key={type.name}>
                              <TableCell className="font-medium">
                                {type.name}
                              </TableCell>
                              <TableCell className="text-right">
                                {type.price.startsWith("Contact") ? (
                                  <Link
                                    href="/contact"
                                    className="text-blue-500 underline text-nowrap"
                                  >
                                    Contact for price
                                  </Link>
                                ) : (
                                  <span className="text-green-600 font-medium">
                                    {type.price}
                                  </span>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      {product.type && product.type.length > 3 && (
                        <div className="mb-8"></div>
                      )}
                    </>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-transparent to-transparent rounded-b-lg">
                  {product.type && product.type.length > 3 && (
                    <div className="flex justify-center items-baseline h-full pt-4 text-gray-500/25">
                      <LucideArrowBigDown
                        fill="white"
                        className="animate-bounce"
                      />
                    </div>
                  )}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
