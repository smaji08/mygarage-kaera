const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/mygarage"
);

const vehicleSeed = [
  {
    vinNumber: "19VDE2E51DE001358",
    make: "Acura",
    model: "ILX",
    year: 2013,
    date: new Date(Date.now()),
  },
  {
    vinNumber: "2FMHK6DT7EBD0095",
    make: "Ford",
    model: "Flex",
    year: 2014,
    date: new Date(Date.now()),
  },
  {
    vinNumber: "19VDG2E51DE001358",
    make: "Subaru",
    model: "Forester",
    year: 2015,
    date: new Date(Date.now()),
  },
];

db.Vehicle.remove({})
  .then(() => db.Vehicle.collection.insertMany(vehicleSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
