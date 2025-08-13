import { getAllHotel } from "@/queries";
import HotelCard from "./HotelCard";

export default async function HotelList({ destination, checkin, checkout }) {
  const hotels = await getAllHotel(destination, checkin, checkout);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {hotels?.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            checkin={checkin}
            checkout={checkout}
          />
        ))}
      </div>
    </div>
  );
}
