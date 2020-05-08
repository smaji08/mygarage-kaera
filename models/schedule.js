const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  schDateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  service: [
    {
      type: String,
    },
  ],

  misc: {
    type: String,
  },
  username: {
    type: String,
  },
  schCreated: {
    type: Date,
    default: Date.now,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
