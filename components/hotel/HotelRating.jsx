import { getRatingsForHotel } from "@/queries";

export default async function HotelRating({ id }) {
  const ratings = await getRatingsForHotel(id);

  let avgRating = 0;
  if (ratings.length === 1) {
    avgRating = ratings[0].rating;
  }
  if (ratings.length > 1) {
    avgRating =
      ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
  }
  const getRatingDescription = (avgRating) => {
    if (avgRating === 0) return "N/A";
    if (avgRating < 1) return "Poor";
    if (avgRating < 2) return "Fair";
    if (avgRating < 3) return "Good";
    if (avgRating < 4) return "Very Good";
    if (avgRating <= 5) return "Excellent";
  };
  return (
    <>
      <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
        {avgRating.toFixed(1)}
      </div>
      <span className="font-medium">{getRatingDescription(avgRating)}</span>
    </>
  );
}
