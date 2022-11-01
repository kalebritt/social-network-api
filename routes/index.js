// //express route here
// const router = require("express").Router();
// //api routes
// const apiRoutes = require("./api/");
// //use routes
// router.use("/", apiRoutes);
// //think twice, friendo
// router.use((req, res) => res.send("Think twice, friendo."));
// //module.exports
// module.exports = router;

const router = require("express").Router();
// Import all of the API routes from /api/index.js
const apiRoutes = require("./api");
// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use("/api", apiRoutes);

router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
