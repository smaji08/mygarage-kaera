const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      // .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findAllVehicle: function (req, res) {
    db.Vehicle.find({ username: req.query.username })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createVehicle: function (req, res) {
    db.Vehicle.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { vehicles: _id } },
          { new: true }
        )
      )
      .then(({ _id }) => res.json(_id))
      .catch((err) => res.status(422).json(err));
  },

  updateUser: function (req, res) {
    db.User.findOneAndUpdate({ username: req.params.user }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(423).json(err);
      });
  },

  findSchedule: function (req, res) {
    db.Schedule.find({ username: req.query.username })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createSchedule: function (req, res) {
    db.Schedule.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { username: req.params.user },
          { $push: { schedules: _id } },
          { new: true }
        )
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
