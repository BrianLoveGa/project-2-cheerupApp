// express
const express = require("express");
const router = express.Router();


/// for passport
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');

// model

const User = require("../model/userApp");




/// list all users 

router.get('/users', (req, res) =>{
    User.find({})
    .then(peeps => {
        res.render("users", {peeps});
    })
    .catch(err => console.error(err));
});


/// login page 
router.get("/login" , (req, res) => {
    res.render("login", { message: req.flash('loginMessage')});
});

router.post('/login', (req, res) => {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/cheerUps',
    failureRedirect : '/login',
    failureFlash : true
  });

  return loginProperty(req, res);
});








/// make an account page 
router.get("/signup", (req, res) => {
    res.render("newAccount", { message: req.flash('signupMessage') } );
});


router.post('/', (req, res) => {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/cheerUps',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signupStrategy(req, res);
})







//// old routes from before passport - will likely need to tweek once its working...

// show user page blank 
router.get("/showUser", (req, res) => {
  res.render("showUser");
});  


// show one user by user id- 
router.get("/showUser/:id", (req, res) => {
  Users.findOne({_id: req.params.id}).then(user => {
    res.render("showUser", user);
  })
  .catch(err => console.error(err));
});



///// edit page blank 

router.get("/edit", (req, res) => {
    res.render("editUser");
});  



// edit by id pass thru params - working from show user page

router.get("/edit/:id", (req, res) => {
      User.findOne({_id: req.params.id}).then(user => {
        res.render("editUser", user);
      })
      .catch(err => console.error(err));
});



 /// make an edit work - working
 
 router.put("/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(person => {
      res.redirect('/users/users');
    });
  });



/// delete it go to user page - working

router.delete("/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/users/users");
    });
  });  


/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧
module.exports = router;