const { Schema, model } = require("mongoose");
const { hash } = require("bcryptjs");
const { pick } = require("lodash");


const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "user",
      enum: ["user", "author", "admin"],
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: false,
    }

  },
  { timestamps: true }
);

//Define functions which are relative to the userSchema
UserSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  user.password = await hash(user.password, 10);
  next();
});

UserSchema.methods.getUserInfo = function() {
  return pick(this, [ "_id", "username", "email", "name", ])
}

const User = model("users", UserSchema);

module.exports = User;
