const { Schema, model } = require("mongoose");
const Paginator = require("mongoose-paginate-v2");

const CourseSchema = new Schema({
  courseImage: {
    type: String,
    required: false 
  },
  title: {
    type: String,
    required: true 
  },
  content: {
    type: String,
    required: true 
  },
  author: {
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

CourseSchema.plugin(Paginator);
const Course = model("courses", CourseSchema);

module.exports = Course;
