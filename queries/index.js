import { bookingsModel } from "@/model/bookings-model";
import { hotelModel } from "@/model/hotel-model";
import { ratingModel } from "@/model/rating-model";
import { reviewModel } from "@/model/review-model";
import { userModel } from "@/model/user-model";
import {
  isDateInBetween,
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

export async function getAllHotel(destination, checkin, checkout) {
  const regex = new RegExp(destination, "i");
  const hotelsByDestination = await hotelModel
    .find({ city: regex })
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();

  let hotels = hotelsByDestination;

  if (checkin && checkout) {
    hotels = await Promise.all(
      hotels.map(async (hotel) => {
        const found = await getBookings(hotel._id, checkin, checkout);
        hotel.isBooked = !!found; // shorthand true/false
        return hotel;
      })
    );
  }

  return replaceMongoIdInArray(hotels);
}

export async function getHotelById(id, checkin, checkout) {
  const hotel = await hotelModel.findById(id).lean();
  if (checkin && checkout) {
    const found = await getBookings(hotel._id, checkin, checkout);
    if (found) {
      hotel["isBooked"] = true;
    } else {
      hotel["isBooked"] = false;
    }
  }
  return replaceMongoIdInObject(hotel);
}

export async function getRatingsForHotel(hotelId) {
  const ratings = await ratingModel.find({ hotelId }).lean();
  return replaceMongoIdInArray(ratings);
}

export async function getReviewsForHotel(hotelId) {
  const ratings = await reviewModel.find({ hotelId }).lean();
  return replaceMongoIdInArray(ratings);
}

export async function getBookings(hotelId, checkin, checkout) {
  const bookings = await bookingsModel
    .find({ hotelId: hotelId.toString() })
    .lean();
  const found = bookings.find((booking) => {
    return (
      isDateInBetween(checkin, booking.checkin, booking.checkout) ||
      isDateInBetween(checkout, booking.checkin, booking.checkout)
    );
  });
  return found;
}

export async function getUserByEmail(email) {
  const user = await userModel.findOne({ email }).lean();
  return user;
}
