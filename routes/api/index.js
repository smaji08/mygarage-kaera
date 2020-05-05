const router = require("express").Router();
const userRoutes = require("./user");
const scheduleRoutes = require("./schedule");
const vehicleRoutes = require("./vehicle");

router.use("/user", userRoutes);
router.use("/schedule", scheduleRoutes);
router.use("/vehicle", vehicleRoutes);

module.exports = router;
