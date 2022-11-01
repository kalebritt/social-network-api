// //regex matching validation
// // match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]

// const { Schema, model, Types } = require("mongoose");

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       unique: true,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//       match: [
//         /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
//         "Wrong email, wise guy",
//       ],
//     },
//     thoughts: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Thought",
//       },
//     ],
//     friends: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true,
//     },
//     id: false,
//   }
// );

// userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });

// const User = model("User", userSchema);

// module.exports = User;

const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// create the User model using the UserSchema
const User = model("User", userSchema);
// export the User model
module.exports = User;
