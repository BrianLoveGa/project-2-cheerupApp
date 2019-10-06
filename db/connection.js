const mongoose = require("mongoose");


/// from mongoose .js "To fix all deprecation warnings, follow the below steps:"

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


/// make it connected

mongoose.connect("mongodb://localhost/cheerups",

() => {
  console.log("Now connected!!! 🚀 Warp Speed Engage !!!");
}
);

module.exports = mongoose;

