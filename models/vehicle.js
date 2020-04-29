const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  vinNumber: {
    type: String,
    required: true,
  },

  make: {
    type: String,
    required: true,
  },

  model: {
    type: String,
    required: true,
  },

  year: {
    type: Number,
    required: true,
  },

  trimLevel: {
    type: String,
  },

  engineSize: {
    type: String,
  },

  transmission: {
    type: String,
  },

  drivetrain: {
    type: String,
  },

  presentVal: {
    type: Number,
    // required: true,
  },

  mileage: {
    type: Number,
    // required: true,
  },
  vehicleAdded: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
