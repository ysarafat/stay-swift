import { getAllHotel } from "@/queries";
import HotelCard from "./HotelCard";

export default async function HotelList() {
  const hotels = await getAllHotel();
  // console.log(hotels);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        <HotelCard />
      </div>
    </div>
  );
}
