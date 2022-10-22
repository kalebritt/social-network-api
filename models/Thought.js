const { Schema, model, Types } = require("mongoose");
// const moment = require("moment");

const thoughtText = new Schema(
  {
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
      reactions: [reactionsSchema],
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const reactionsSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
});
