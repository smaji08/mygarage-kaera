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
      // if (!user.comparePassword(password, done)) {
      //   return done(null, false, { message: "Incorrect password" });
      // }
      user.comparePassword(password, function (result) {
        if (result === true) {
          console.log("correct");

          return done(null, true);
        } else return done(null, false, { message: "incorrect password" });
      });

      return done(null, user);
    });
  }
);
module.exports = strategy;
