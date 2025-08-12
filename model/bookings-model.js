const { Schema, models, model } = require("mongoose");
import { ObjectId } from "mongodb";

const bookingsSchema = new Schema({
  hotelId: {
    type: ObjectId,
    required: true,
  },
  userId: {
    type: ObjectId,
    required: true,
  },
  checkin: {
    type: String,
    required: true,
  },
  checkout: {
    type: String,
    required: true,
  },
});

export const bookingsModel =
  models.bookings ?? model("bookings", bookingsSchema);
