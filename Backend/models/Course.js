const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
});

const Course = model("courses", courseSchema);

module.exports = Course;
