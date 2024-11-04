import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`bg-white h-full relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
