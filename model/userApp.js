const mongoose = require("../db/connection");

const bcrypt = require('bcrypt-nodejs')


const UserAccountSchema = new mongoose.Schema({

    local: {
        email: String,
        password: String
      }
    })

const USERS = mongoose.model("users", UserAccountSchema);
/// send it out
module.exports = USERS;