const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cheerups");

module.exports = mongoose;

