// express
const express = require("express");
const router = express.Router();


// model
const Users = require("../model/userApp");


/// list all users - need it I think but don't want to show it - will cross that bridge later

router.get('/users', (req, res) =>{
    Users.find({}).then(peeps => 
        res.render("users", {peeps}));
});


/// login page route
router.get("/users/login" , (req, res) => {
    res.render("login");
});


/// make an account page
router.get("/users/newAccount", (req, res) => {
    res.render("newAccount");
  });


// show one user
router.get("/users/:id", (req, res) => {
    Users.findById(req.params.id).then(user => {
      res.render("showUser", user);
    });
  });

// make new account redirect to login page after

  router.post("/users", (req, res) => {
    Users.create(req.body).then(newuser => {
      res.redirect("/login");
    });
  });


  // edit account page
  router.get("/users/edit/:id", (req, res) => {
    Users.findById(req.params.id).then(user => {
      res.render("newAccount", user);
    });
  });

 /// make an edit work
 router.put("/users/:id", (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(person => {
      res.redirect(`/users/${person.id}`);
    });
  });


/// delete it go to home page
router.delete("/users/:id", (req, res) => {
    Users.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/");
    });
  });  



/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧

module.exports = router;