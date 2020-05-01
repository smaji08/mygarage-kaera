const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // validate: [({ length }) => length >= 6, "Password should be longer."],
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
