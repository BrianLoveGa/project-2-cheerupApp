const mongoose = require("../db/connection");

const UserAccountSchema = new mongoose.Schema({

    name: String,
    username: String,
    email: String,
    password: String

});

const USERS = mongoose.model("users", UserAccountSchema);

module.exports = USERS;