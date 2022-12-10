const { check } = require("express-validator");

const name = check("name", "Name is required.").not().isEmpty();
const fileName = check("fileName", "Filename is required.").not().isEmpty();

const courseValidations = [name, fileName];

module.exports = courseValidations;
