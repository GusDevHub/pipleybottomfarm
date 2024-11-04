"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuGeneral = () => {
  const pathname = usePathname(); // Get the current pathname

  const isActive = (path: string) => pathname === path; // Function to check if the link is active

  const menuItems = [
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/wildcamping", label: "Wild Camping" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation (hidden on mobile) */}
      {menuItems.map(({ path, label }) => (
        <li key={path}>
          <Link 
            href={path} 
            className={`border border-transparent p-1 rounded-xl hover:border-green-900 hover:border ${isActive(path) ? "text-white bg-green-900 py-1 px-2 rounded-xl" : ""}`}
          >
            <span className="text-nowrap">{label}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default MenuGeneral;