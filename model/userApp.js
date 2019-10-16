const mongoose = require("../db/connection");
// Would call the file user.js instead of userApp.js
const UserAccountSchema = new mongoose.Schema({

    name: String,
    username: String,
    email: String,
    password: String

});

// Would just call this User, singular and only upper case U!
const USERS = mongoose.model("users", UserAccountSchema);
/// send it out
module.exports = USERS;