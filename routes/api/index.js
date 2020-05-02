const router = require("express").Router();
const userRoutes = require("./users");

// Book routes
router.use("/user", userRoutes);



module.exports = router;
