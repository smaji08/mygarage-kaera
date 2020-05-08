const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/schedule"
router.route("/").get(usersController.findSchedule);

router.route("/:user").put(usersController.createSchedule);

module.exports = router;
