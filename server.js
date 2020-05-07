const passport = require("./passport");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes");
const session = require("express-session");

// Define middleware here
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./models/user")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(apiRoutes);

app.use(express.json());
app.use(
  session({
    secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
    resave: false, //required
    saveUninitialized: false, //required
  })
);
app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});

// Connect to the Mongo DB
mongoose.promise = Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/mygarage",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", "mongodb://localhost:27017/mygarage");
});

db.on("error", (err) => {
  console.error("connection error:", err);
});

// app.get("/", function (req, res) {
//   console.log("Test");
//   res.json("hi");
// });
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
