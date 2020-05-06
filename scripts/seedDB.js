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
    makeandmodel: "Acura ILX",
    year: 2013,
    date: new Date(Date.now()),
  },
  {
    vinNumber: "2FMHK6DT7EBD0095",
    make: "Ford",
    model: "Flex",
    makeandmodel: "Ford Flex",
    year: 2014,
    date: new Date(Date.now()),
  },
  {
    vinNumber: "19VDG2E51DE001358",
    make: "Subaru",
    model: "Forester",
    makeandmodel: "Subaru Forester",
    year: 2015,
    date: new Date(Date.now()),
  },
];

db.Vehicle.remove({})
  .then(() => db.Vehicle.collection.insertMany(vehicleSeed))
  .then((data) => {
    console.log(data.result.n + " vehicle records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// const userSeed = [
//   {
//     username: "stella",
//     password: "password",
//     firstName: "aug",
//     lastName: "sm",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     phone: "5556661234",
//     type: "",
//     email: "",
//   },
//   {
//     username: "raj",
//     password: "password",
//     firstName: "raj",
//     lastName: "kuz",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     phone: "5556661334",
//     type: "",
//     email: "",
//   },
// ];

// db.User.remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
