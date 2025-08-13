import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelById } from "@/queries";

export default async function HotelDetailsPage({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const hotel = await getHotelById(id, checkin, checkout);

  return (
    <>
      <Summary hotel={hotel} />
      <Gallery gallery={hotel?.gallery} />
      <Overview overview={hotel?.overview} />
    </>
  );
}
