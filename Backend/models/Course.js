const { Schema, model } = require("mongoose");
const Paginator = require("mongoose-paginate-v2");

const CourseSchema = new Schema(
  {
    usr_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    token: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
    instructors: {
      type: Array,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
      required: false,
    },
    search: {
      type: String,
      required: false,
    },
    courses: {
      type: Array,
      required: true,
    },
    pages: {
      type: Number,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

CourseSchema.plugin(Paginator);
const Course = model("courses", CourseSchema);

module.exports = Course;
