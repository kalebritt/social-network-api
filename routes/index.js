//express route here
const router = require("express").Router();

//api routes
const apiRoutes = require("./api/");

//use routes
router.use("/", apiRoutes);

//think twice, friendo
router.use((req, res) => res.send("Think twice, friendo."));

//module.exports
module.exports = router;
