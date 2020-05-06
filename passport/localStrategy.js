const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;
const strategy = new LocalStrategy(
  {
    usernameField: "username",
  },
  function (username, password, done) {
    User.findOne({ username: username }, (err, user) => {
      console.log(user);
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Used username" });
      }
      if (!user.comparePassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }

      return done(null, user);
    });
  }
);
module.exports = strategy;
