//require express
const router = require("express").Router();

//crud user
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userControllers");

//get all and post
