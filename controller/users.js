// express
const express = require("express");
const router = express.Router();


/// for passport
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')

// model

const Users = require("../model/userApp");

////   just in case

const CheerUps = require("../model/cheerApp");



/// list all users - working ...

router.get('/users', (req, res) =>{
    Users.find({})
    .then(peeps => {
        res.render("users", {peeps});
    })
    .catch(err => console.error(err));
});


/// login page route - working
router.get("/login" , (req, res) => {
    res.render("login");
});



// show user page blank - working
router.get("/showUser", (req, res) => {
  res.render("showUser");
});  


// show one user by user id- working
router.get("/showUser/:id", (req, res) => {
  Users.findOne({_id: req.params.id}).then(user => {
    res.render("showUser", user);
  })
  .catch(err => console.error(err));
});



/// make an account page blank - working
router.get("/newAccount", (req, res) => {
    res.render("newAccount");
});



// make new account 
// redirect to user list page after create account
//   WORKING THANKS PROF ALI 

router.post("/", (req, res) => {
  Users.create(req.body).then(newuser => {
    res.redirect("/users/users")
  })
  .catch(err => console.error(err));
});



///// edit page blank - working

router.get("/edit", (req, res) => {
    res.render("editUser");
});  



// edit by id pass thru params - working from show user page

router.get("/edit/:id", (req, res) => {
      Users.findOne({_id: req.params.id}).then(user => {
        res.render("editUser", user);
      })
      .catch(err => console.error(err));
});



 /// make an edit work - working
 
 router.put("/:id", (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(person => {
      res.redirect('/users/users');
    });
  });



/// delete it go to user page - working

router.delete("/:id", (req, res) => {
    Users.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/users/users");
    });
  });  


/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧
module.exports = router;