const { check } = require("express-validator");

const title = check("title", "Title is required.").not().isEmpty();
const content = check("content", "Content is required.").not().isEmpty(); 

const courseValidations = [ title, content ];

module.exports = courseValidations;