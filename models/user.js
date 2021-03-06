const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: [({ length }) => length >= 6, "Password should be longer."],
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

    unique: false,

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

userSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.password, callback);
};

userSchema.pre("save", function saveHook(next) {
  const user = this;
  // proceed further only if the password is modified or the user is new
  if (!user.isModified("password")) return next();
  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {
      return next(saltError);
    }
    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {
        return next(hashError);
      }
      // replace a password string with hash value
      user.password = hash;
      return next();
    });
  });
});

const User = mongoose.model("user", userSchema);

module.exports = User;
