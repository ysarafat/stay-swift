import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/queries";

export default async function HotelDetailsPage({ params: { id } }) {
  const hotel = await getHotelById(id);

  return (
    <>
      <Summary hotel={hotel} />
      <Gallery gallery={hotel?.gallery} />
      <Overview overview={hotel?.overview} />
    </>
  );
}
