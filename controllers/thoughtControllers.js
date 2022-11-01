// // thought model
// const { Though, User } = require("../models");

// // thoughtController
// const thoughtController = {
//   // new thought
//   createThought({ body }, res) {
//     Thought.create(body)
//       .then((dbThoughtData) => res.json(dbThoughtData))
//       .catch((err) => res.status(400).json(err));
//   },

//   //   get thoughts here
//   getAllThoughts(req, res) {
//     Thought.find()
//       // sort users thoughts
//       .sort({ createdAt: -1 })
//       .then((dbThoughtData) => res.json(dbThoughtData))
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   //   get single user by id
//   getSingleThought(req, res) {
//     Thought.findOne({ _id: req.params.thoughtId })
//       .then((dbThoughtData) => {
//         if (!dbThoughtData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbThoughtData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   //   update current user by id
//   updateThought(req, res) {
//     Users.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       { $set: req.body },
//       {
//         new: true,
//         runValidators: true,
//       }
//     )
//       .then((dbThoughtData) => {
//         if (!dbThoughtData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbThoughtData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   //   delete thought
//   deleteThought(req, res) {
//     Thought.findOneAndDelete({ _id: req.params.ThoughtId })
//       .then((dbThoughtData) => {
//         if (!dbThoughtData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbThoughtData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   //   add reaction
//   addReaction(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       { $addToSet: { reactions: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((dbThoughtData) => {
//         if (!dbThoughtData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbThoughtData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
//   //   delete reaction
//   deleteReaction(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       { $addToSet: { reactions: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((dbThoughtData) => {
//         if (!dbThoughtData) {
//           return res
//             .status(404)
//             .json({ message: "No User with this particular ID!" });
//         }
//         res.json(dbThoughtData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
// };

// // module.exports
// module.exports = thoughtController;

const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  getThought(req, res) {
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // get single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought find with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //create a thought and push the created thought's _id to the associated user's thoughts array field
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No User find with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, New: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought find with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought find with this ID!" })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Thought deleted, but no user found" })
          : res.json({ message: "Thought successfully deleted" })
      )
      .catch((err) => res.status(500).json(err));
  },
  //create reaction
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought frind with ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought find with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
