const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/schedule"
router
  .route("/")
  .get(usersController.findSchedule)
  .post(usersController.createSchedule);

// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
