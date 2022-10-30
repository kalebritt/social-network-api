// thought model
const { Though, User } = require("../models");

// thoughtController
const thoughtController = {
  // new thought
  createThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(400).json(err));
  },

//   get thoughts here
};
