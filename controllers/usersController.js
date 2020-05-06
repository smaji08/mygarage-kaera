const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      // .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createUser: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      // .then((dbModel) => console.log(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  // findById: function (req, res) {
  //   db.User.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.User.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },

  findAllVehicle: function (req, res) {
    db.Vehicle.find(req.query)
      // .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createVehicle:function(req,res){
    console.log("hi");
    db.Vehicle.create(req.body)
    .then((dbModel) => console.log(dbModel))
      .catch((err) => res.status(422).json(err));
    },


  
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      // .then(dbModel => res.json(dbModel))
      .then((dbModel) => console.log(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createSchedule: function (req, res) {
    db.Schedule.create(req.body)
      .then((dbModel) => res.json(dbModel))
      // .then((dbModel) => console.log(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findSchedule: function (req, res) {
    db.Schedule.find(req.query)
      // .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
