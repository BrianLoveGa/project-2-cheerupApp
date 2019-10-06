// express
const express = require("express");
const router = express.Router();


// model
const Users = require("../model/userApp");


/// list all users - need it for now and testing  but don't want to show it - will cross that bridge later

router.get('/users', (req, res) =>{
    Users.find({})
    .then(peeps => {
        res.render("users", {peeps});
    })
    .catch(err => console.error(err));
});


/// login page route
router.get("/login" , (req, res) => {
    res.render("login");
});



/// make an account page
router.get("/newAccount", (req, res) => {
    res.render("newAccount");
  });


router.get("/edit", (req, res) => {
    res.render("editUser");
  });  

  router.get("/edit/:id", (req, res) => {
    console.log(req.params);
      Users.findOne({_id: req.params.id}).then(user => {
        console.log(user);
        res.render("editUser", user);
      })
      .catch(err => console.error(err));
  });





router.get("/showUser", (req, res) => {
    res.render("showUser");
});  



// show one user
router.get("/showUser/:id", (req, res) => {
    Users.findOne({_id: req.params.id}).then(user => {
      res.render("showUser", user);
    })
    .catch(err => console.error(err));
  });




// make new account redirect to login page after - need to fix

router.post("/newAccount", (req, res) => {
    Users.create(req.body).then(newuser => {
      res.redirect("/login");
    });
});


  // edit account page
router.get("/:id", (req, res) => {
    Users.findById({ _id: req.params.id }).then(user => {
      res.render("newAccount", user);
    });
});

 /// make an edit work - need to fix
 
 router.put("/:id", (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(person => {
      res.redirect(`/users/${person.id}`);
    });
  });


/// delete it go to home page - working

router.delete("/:id", (req, res) => {
    Users.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/cheerUps");
    });
  });  



/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧

module.exports = router;