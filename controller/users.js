// express
const express = require("express");
const router = express.Router();


// model
const Users = require("../model/userApp");


/// list all users - working

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

// make new account redirect to user list page after create account- need to fix

router.post("/newAccount", (req, res) => {
  Users.create(req.body).then(newuser => {
    console.log(req.body);
    console.log(newuser);
    res.redirect("/users")
  })
  .catch(err => console.error(err));
});

router.put("/newAccount", (req, res) => {
Users.create(req.body).then(newuser => {
  console.log(req.body);
  console.log(newuser);
  res.redirect("/users")
})
.catch(err => console.error(err));
});


///// edit pge blank - working

router.get("/edit", (req, res) => {
    res.render("editUser");
});  

// edit by id pass thru params - working from show user page

router.get("/edit/:id", (req, res) => {
    console.log(req.params);
      Users.findOne({_id: req.params.id}).then(user => {
        console.log(user);
        res.render("editUser", user);
      })
      .catch(err => console.error(err));
});





 /// make an edit work - need to fix
 
 router.put("/:id", (req, res) => {
    Users.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(person => {
      res.redirect('/users/users');
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