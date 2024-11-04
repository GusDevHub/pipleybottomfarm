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
        <p className="py-3">
          We were also &apos;Tenant Farmers&apos; at Bury Hill Farm, Wick ,
          Bristol; until 2015, there we ran a successful agricultural / rural
          business which included woodland management, tree surgery, land
          management, hay, straw and haylage manufacture and supply, firewood
          creation and supply and coppicing services, our livery business
          serviced 18 horses and we had a working riding school at that time.
        </p>
      </div>
      <div className="pb-3">
        <h2 className="font-bold text-green-700">
          What makes us a Small Cropping and Mixed Livestock Farm?
        </h2>
        <p className="py-3">
          Farm Classification in England
          <br />
          Our agricultural holding expanded with a further purchase of 29 acres
          of arable land and buildings spanning the valley between Upton Cheyney
          and North Stoke, Bath during 2013-14, this brought our farm (CPH)
          holding to 42 acres, due to what we do and the physical size of our
          holding in acres/ hectares, we remain classified in England as a
          &apos;Small Mixed Farm&apos; (Type 19 Cropping and Mixed Livestock).
        </p>
      </div>
      <div className="pb-3">
        <h2 className="font-bold text-green-700">
          Our current labour requirement is 1.5 -2 FTE (based on the UK
          determined figures representing 1-FTE= *Working year = 1900 hrs)
        </h2>
        <p className="py-3">
          To continue running the farm as a &apos;County Parish Holding&apos;,
          we currently already employ a local part time farm hand for our
          business and have done so since 2021, to assist us in our labours,
          especially animal husbandry and care for the livestock including the
          horses.
        </p>
        <p className="py-3">
          A small farm classification is also due to the amount of land we own
          (if we were to consider including rental land to complete our holding
          (35 further acres for hay) we would be classed as a &apos;Small to
          medium cropping and mixed livestock farm&apos;).
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
