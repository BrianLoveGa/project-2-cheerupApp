const mongoose = require("../db/connection");

const bcrypt = require('bcrypt-nodejs')


const User = new mongoose.Schema({

    local: {
        email: String,
        password: String
      }
});




User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};



/// send it out
module.exports = mongoose.model('User', User);;