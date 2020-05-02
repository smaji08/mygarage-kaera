const router = require("express").Router();
const userRoutes = require("./user");
const scheduleRoutes = require("./schedule");

router.use("/user", userRoutes);
router.use("/schedule", scheduleRoutes);

module.exports = router;
