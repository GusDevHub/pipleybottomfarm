import { format } from "date-fns";
import { enGB } from "date-fns/locale";

export default function Home({ currentDate }) {
  return (
    <>
      <div className="mx-auto max-w-screen-lg">
        <h2 className="font-semibold">Welcome back!</h2>
        <p className="text-sm text-green-900">{currentDate}</p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const currentDate = format(new Date(), "EEEE, d MMMM yyyy", { locale: enGB });
  return { props: { currentDate } };
}