//require models
const { User, Thought } = require("../models");

module.exports = {
    // get all users
  getUser(req, res) {
    User.find({}).then((user) => res.json(err));
  },
//get single user

};
