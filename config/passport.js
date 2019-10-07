/// declaring the strategy for the signup
var passport=require('passport');

var LocalStrategy=require('passport-local').Strategy;

var User=require('../model/userApp');
var bcrypt   = require('bcrypt-nodejs');
module.exports = function(passport) {

  // To use the session with passport, we need to create two new methods in config/passport.js

// To keep a user logged in, we will need to serialize their user.id to save it to their session
passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

// second method will then be called every time there is a value for passport in the session cookie
passport.deserializeUser(function(id, callback) {
  User.findById(id, function(err, user) {
      callback(err, user)
  });
});

   passport.use('local-signup', new LocalStrategy({
     usernameField : 'email',
     passwordField : 'password',
     passReqToCallback : true
   }, function(req, email, password, callback) {
    // Find a user with this e-mail
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) return callback(err);

      // If there already is a user with this email
      if (user) {
	return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
      } else {
      // There is no email registered with this emai
	// Create a new user
	var newUser            = new User();
	newUser.local.email    = email;
	newUser.local.password = newUser.encrypt(password);

	newUser.save(function(err) {
	  if (err) throw err;
	  return callback(null, newUser);
	  });
   }
  });
  }));
};


passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, callback) {
  User.findOne({'local.email': email}, function(err, user) {
    if (err) return callback(err)

    if (!user) {
      return callback(null, false, req.flash('loginMessage', 'No user found'))
    }
    if (!user.validPassword(password)) {
      return callback(null, false, req.flash('loginMessage', 'Ooops, wrong password'))
    }
    return callback(null, user)
  })
}));



