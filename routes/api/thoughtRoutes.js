// //require express
// const router = require("express").Router();

// //get, create, update, delete constant
// const {
//   getThought,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
//   createReaction,
//   deleteReaction,
// } = require("../../controllers/thoughtControllers");

// //get all and post thought
// router.route("/").get(getThought).post(createThought);

// //get one thought, put, delete by Id
// router
//   .route("/:thoughtId")
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

// ///post reaction
// router.route("/:thoughtId/reactions").post(createReaction);

// //delete reaction
// router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// //module.exports
// module.exports = router;

const router = require("express").Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

// /api/thoughts GET all and POST thought
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by iD
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions POST new reactions
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
