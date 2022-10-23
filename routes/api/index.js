//express routes
const router = require("express").Router();
//userRoute
const userRoutes = require("./userRoutes");
//thoughtRoute
const thoughtRoutes = require("./thoughtRoutes");
//user route
router.use("/users", userRoutes);
//thought route
router.use("/thoughts", thoughtRoutes);
//module.exports
module.exports = router;
