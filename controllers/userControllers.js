// //require models
// const { User, Thought } = require("../models");

// // module.exports = {
// //     // get all users
// //   getUser(req, res) {
// //     User.find({}).then((user) => res.json(err));
// //   },
// // //get single user
// // getSingleUser(req, res) {
// //     User.findOne({ _id: req.params.userId }).populate("thoughts").populate("friends").select("-__v") => !user
// // }
// // };

// const userController = {
//   // create new user
//   createUser(req, res) {
//     User.create(req.body)
//       .then((dbUserData) => res.json(dbUserData))
//       .catch((err) => res.status(500).json(err));
//   },
//   //   get all users
//   getAllUsers(req, res) {
//     User.find()
//       .select("__v")
//       .then((dbUserData) => res.json(dbUserData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   //   get user by id
//   getSingleUser(req, res) {
//     User.findOne({ _id: req.params.userId })
//       .populate("thoughts")
//       .populate("friends")
//       .select("-__v")
//       // what if no user is found?
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           return res
//             .status(404)
//             .json({ message: "No user with that ID, buddy." });
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },

//   // update current user by ID
//   updateUser(req, res) {
//     User.findOneAndUpdate(
//       { _id: params.userId },
//       { $set: req.body },
//       {
//         new: true,
//         runValidators: true,
//       }
//     )
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   // delete user
//   deleteUser(req, res) {
//     User.findOneAndDelete({ _id: req.params.userId })
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   // add friend
//   addFriend(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $addToSet: { friends: params.friendId } },
//       { new: true }
//     )
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   // delete friend
//   deleteFriend(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $pull: { friends: req.params.friendId } },
//       { new: true }
//     )
//       .then((dbUserData) => {
//         if (!dbUserData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
// };

// // module.exports
// module.exports = userController;

const { User, Thought } = require("../models");

module.exports = {
  //Get all users
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  //Get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User find with that ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User find with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete a user
  //BONUS: Remove a user's associated thoughts when deleted.
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User find with this ID!" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: "User and Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  //add a friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User find with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete a friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User find with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
