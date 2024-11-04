import Link from "next/link";
import { Button } from "../_components/ui/button";

const AboutPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700">About Us</h1>
      <p className="py-3">Local products for Local people</p>
      <p className="py-3">
        A small farm of 42 acres offering agricultural services, livestock
        husbandry/herd management, Stud services and Mare in foal, supply of
        hay, straw, haylage, firewood plus forestry services including coppicing
        for &apos;Bio mass&apos; and hedgerow laying.
      </p>
      <p className="py-3">
        We also offer wild camping and almost wild camping.
      </p>
      <Button
        asChild
        className="bg-green-800 hover:bg-green-900 mx-auto block w-fit"
      >
        <Link href="#">Book an appointment now</Link>
      </Button>
      <div className="py-3">
        <h2 className="py-3 pb-0 font-bold text-green-700">
          History of the family
        </h2>
        <p className="py-3">
          Our County Parish Holding (CPH) was established in 2010, our husband
          and wife partnership (trading as &apos;RIG - Farming&apos;) have grown
          year on year since our first 12 acres of arable land was purchased in
          Bitton, Bristol during 2010.
        </p>
        <p className="py-3"></p>
      </div>
    </div>
  );
};

export default AboutPage;
