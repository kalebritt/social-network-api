const { Schema, model, Types } = require("mongoose");
// const moment = require("moment");

//thoughtText schema
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
//reactionSchema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    //reactionBody here
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    //username
    username: {
      type: String,
      required: true,
    },
    //createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        return new Date(timestamp).toLocaleString;
      },
    },

    reaction: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

//total count of friends
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//User model using userSchema
const Thought = model("Thought", thoughtSchema);
