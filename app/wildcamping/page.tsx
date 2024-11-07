import Image from "next/image";

const WildCampingPage = () => {
  return (
    <div>
      <h1 className="font-bold text-green-700 border-b pb-3">Wild Camping</h1>
      <p className="py-3">
        Noting: For the less wild at heart, we have a toilet nearby, access to
        water and power if required (Power extra cost).
      </p>
      <p className="py-3">
        Camping: Come glamping Coleman 5 Birth tent set up with air beds - £40
        per pitch per night.
      </p>
      <Image
        className="rounded-lg w-full max-w-3xl mt-3"
        src="/wildcampingAtPipleyBottomFarm.jpg"
        alt="Wild camping"
        width={200}
        height={95}
      />
    </div>
  );
};

export default WildCampingPage;
