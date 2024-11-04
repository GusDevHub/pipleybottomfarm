import Link from "next/link";
import { Button } from "../_components/ui/button";

const AboutPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700">About Us</h1>
      <p className="py-3">
        Local products for Local people A small farm of 42 acres offering
        agricultural services, livestock husbandry/ herd management, Stud
        services and Mare in foal, supply of hay, straw, haylage, firewood plus
        forestry services including coppicing for &apos;Bio mass&apos; and hedgerow
        laying.
      </p>
      <p className="py-3">
        We also offer wild camping and almost wild camping.
      </p>
      <Button asChild className="bg-green-800 mx-auto block w-fit">
        <Link href="#">Book an appointment now</Link>
      </Button>
    </div>
  );
};

export default AboutPage;
