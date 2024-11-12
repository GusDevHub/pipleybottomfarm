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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../_components/ui/table";

type StockStatus = number | undefined;

// type ProductType = {
//   name: string;
//   price: string;
// };

// type Product = {
//   name: string;
//   price: string;
//   stock: StockStatus;
//   link?: string;
//   image: string;
//   alt: string;
//   type?: ProductType[];
//   description?: string;
// };

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
  return (
    <div>
      <h1 className="font-bold text-green-700 border-b pb-3">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full">
        {products.map((product) => (
          <Dialog key={product.name}>
            <DialogTrigger>
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
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
              <div>
                {product.type && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250]">Product Name</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {product.type.map((type) => (
                        <TableRow key={type.name}>
                          <TableCell className="font-medium">
                            {type.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {type.price.startsWith("Contact") ? (
                              <Link href="/contact" className="text-blue-500 underline">Contact for price</Link>
                            ) : (<span className="text-green-600 font-medium">{type.price}</span>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
