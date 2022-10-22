const { Schema, model, Types } = require("mongoose");
// const moment = require("moment");

const thoughtText = new Schema({
  thoughtText: {
    type: true,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      return new Date(timestamp).toLocaleString;
    },
  },
});
