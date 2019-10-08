const mongoose = require("../db/connection");

const bcrypt = require('bcrypt-nodejs')


const User = new mongoose.Schema({

    local: {
      usernameField: String,
      passwordField: String
      }
});


User.methods.encrypt = function(passwordField) {
  return bcrypt.hashSync(passwordField, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function(passwordField) {
  return bcrypt.compareSync(passwordField, this.local.passwordField);
};



/// send it out
module.exports = mongoose.model('User', User);;