//express routes
const router = require("express").Router();
//userRoute
const userRoutes = require("./userRoutes");
//thoughtRoute
const thoughtRoutes = require("./thoughtRoutes");
//user route
router.use("./userRoutes.js");
//thought route
router.use("./thoughtRoutes.js");
//module.exports
module.exports = router;
