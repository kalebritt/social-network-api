//require express
const router = require("express").Router();

//crud user
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userControllers");

//get all and post
router.route("/").get(getAllUsers).post(createUser);

//get one, put and delete by user Id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

//delete friend by Id
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

//module.exports
module.exports = router;
