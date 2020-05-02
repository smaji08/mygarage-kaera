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

  makeandmodel: {
    type: String,
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
});

vehicleSchema.methods.setCarName = function () {
  this.makeandmodel = `${this.make} ${this.model}`;

  return this.makeandmodel;
};

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
