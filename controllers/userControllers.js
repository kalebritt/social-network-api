//require models
const { User, Thought } = require("../models");

// module.exports = {
//     // get all users
//   getUser(req, res) {
//     User.find({}).then((user) => res.json(err));
//   },
// //get single user
// getSingleUser(req, res) {
//     User.findOne({ _id: req.params.userId }).populate("thoughts").populate("friends").select("-__v") => !user
// }
// };

const userController = {
  // create new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //   get all users
  getAllUsers(req, res) {
    User.find()
      .select("__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //   get user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      // what if no user is found?
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No user with that ID, buddy." });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update current user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No User with this particular ID!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
