const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
    // validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  phone: { type: Number },
  email: {
    type: String,
    type: String,
    // unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  vehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
  schedules: [
    {
      type: Schema.Types.ObjectId,
      ref: "Schedule",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
