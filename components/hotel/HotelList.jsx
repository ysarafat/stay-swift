import { getAllHotel } from "@/queries";
import HotelCard from "./HotelCard";

export default async function HotelList() {
  const hotels = await getAllHotel();

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
