const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/").get(usersController.findAll).post(usersController.createUser);

// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
