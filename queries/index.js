import { hotelModel } from "@/model/hotel-model";
import { ratingModel } from "@/model/rating-model";
import { reviewModel } from "@/model/review-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

export async function getAllHotel() {
  const hotels = await hotelModel
    .find()
    .select([
      "thumbNailUrl",
      "name",
      "highRate",
      "lowRate",
      "city",
      "propertyCategory",
    ])
    .lean();
  return replaceMongoIdInArray(hotels);
}

export async function getHotelById(id) {
  const hotel = await hotelModel.findById(id).lean();
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
