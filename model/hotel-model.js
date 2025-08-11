const { Schema, model, models } = require("mongoose");

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  airportCode: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  countryCode: {
    type: String,
    required: false,
  },
  highRate: {
    type: Number,
    required: false,
  },
  location: {
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
  },
  locationDescription: {
    type: String,
    required: false,
  },
  lowRate: {
    type: Number,
    required: false,
  },
  postalCode: {
    type: Number,
    required: false,
  },
  propertyCategory: {
    type: Number,
    required: false,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  stateProvinceCode: {
    type: String,
    required: false,
  },
  thumbNailUrl: {
    type: String,
    required: false,
  },
  gallery: {
    type: [String],
    default: [],
  },
  overview: {
    type: String,
    required: false,
  },
  amenities: [
    {
      type: Array,
      required: false,
    },
  ],
});

export const hotelModel = models.hotels ?? model("hotels", hotelSchema);
