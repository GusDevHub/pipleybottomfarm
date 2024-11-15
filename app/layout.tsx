import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pipley Bottom Farm",
  description:
    "A small farm of 42 acres offering agricultural services, livestock husbandry/herd management, Stud services and Mare in foal, supply of hay, straw, haylage, firewood plus forestry services including coppicing for 'Bio mass' and hedgerow laying.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-blue-950">
      <body
        className={`bg-white h-full relative ${inter.className} antialiased`}
      >
        <Header />
        <section className="flex-1 max-w-screen-lg mx-auto p-5">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
