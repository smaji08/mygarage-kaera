const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },

  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  // },

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
