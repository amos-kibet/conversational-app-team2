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
  slug: {
    type: String,
    required: true, 
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      text: {
        type: String,
        required: true 
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },

    }
  ],
  category: {
    type: String,
    required: false
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
},
{ timestamps: true }
);

CourseSchema.plugin(Paginator);
const Course = model("courses", CourseSchema);

module.exports = Course;
