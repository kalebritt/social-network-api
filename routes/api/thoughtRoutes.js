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