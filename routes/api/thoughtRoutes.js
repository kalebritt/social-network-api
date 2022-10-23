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
