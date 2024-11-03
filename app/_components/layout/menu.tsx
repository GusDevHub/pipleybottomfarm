import Link from "next/link";

const MenuGeneral = () => {
  return (
    <>
      {/* Desktop Navigation (hidden on mobile) */}
      <li>
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link href="/services" className="hover:underline">
          Services
        </Link>
      </li>
      <li>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
      </li>
      <li>
        <Link href="/wildcamping" className="hover:underline">
          Wild Camping
        </Link>
      </li>
      <li>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </li>
    </>
  );
};

export default MenuGeneral;
