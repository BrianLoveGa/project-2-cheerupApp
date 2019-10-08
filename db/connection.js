const mongoose = require("mongoose");
mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/cheerups";
}

/// from mongoose .js "To fix all deprecation warnings, follow the below steps:"

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);



mongoose
  .connect(mongoURI)
  .then(instance =>
    console.log(`Connected ➢ to ⛄ cool ❄ db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));


/// make it connected - original - was working

// mongoose.connect("mongodb://localhost/cheerups",
// () => {
//   console.log("Now connected!!! 🚀 Warp Speed Engage !!!");
// }
// );



/// let that birdy fly
module.exports = mongoose;