const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cheerups",
{ useUnifiedTopology: true },

() => {
  console.log("Now connected!!! 🚀 Warp Speed Engage !!!");
}
);

module.exports = mongoose;

