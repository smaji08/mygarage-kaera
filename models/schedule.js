const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  schDateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },

  service: [
    {
      type: String,
      // required: true,
      // unique: true,
      // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
  ],

  misc: {
    type: String,
    // required: true,
    // validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  userCreated: {
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
