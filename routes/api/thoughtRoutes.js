//require express
const router = require("express").Router();

//get, create, update, delete constant
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");

//get all and post thought
router.route("/").get(getThought).post(createThought);

//get one thought, put, delete by Id
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

///post reaction
router.route("/:thoughtId/reactions").post(createReaction);

//delete reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

//module.exports
module.exports = router;
