const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use(apiRoutes);

// Connect to the Mongo DB
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
// Use apiRoutes
app.use(apiRoutes);
app.get("/", function (req, res) {
  console.log("Test");
  res.json("hi");
});
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
