const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vehicleSchema = new Schema({
  vinNumber: {
    type: String,
    required: true,
  },
  vehicleData: {
    type: Object,
    required: true,
  },
  makemodel: {
    type: Object,
    required: true,
  },
  vehicleAdded: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    // required: true,
  },
});
const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
