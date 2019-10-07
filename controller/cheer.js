// express
const express = require("express");
const router = express.Router();


// model
const CheerUps = require("../model/cheerApp");
const Users = require("../model/userApp");


/// list all cheer ups - home page - working

router.get('/', (req, res) =>{
    CheerUps.find({})
    .then(cheers => {
      res.render("index", {cheers});
  })  
    Users.find({})
    .then(users => {
        res.render("index", {users});
    })    
    .catch(err => console.error(err));
});


// show cheer blank page - working
router.get('/newCheer', (req, res) => {
  res.render("newCheer");
});

/// to make a new one exist  
//   WORKING THANKS PROF ALI 

router.post("/", (req, res) => {
  
  CheerUps.create(req.body).then(cheers => {
    res.redirect("/cheerUps");
    
  })
  .catch(err => console.error(err)
)
});


// show one cheerup when click on its title on edit page button at bottom  edit a cheer Up page - working

router.get("/showCheer/:id", (req, res) => {
    CheerUps.findOne({_id: req.params.id}).then(cheer => {
      res.render("showCheer", cheer);
    })
    .catch(err => console.error(err));
});



/// edit page blank exists - working

router.get("/edit", (req, res) => {
  res.render("editCheer");
});



// see a cheerup on edit page by id - working
router.get("/edit/:id", (req, res) => {
    CheerUps.findOne({_id: req.params.id}).then(cheer => {
      res.render("editCheer", cheer);
    })
    .catch(err => console.error(err));
});


/// make an edit work - working - minus background color choice

  router.put("/:id", (req, res) => {
    CheerUps.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(cheerup => {
      res.redirect("/cheerUps");
    });
});


/// delete it go home page - working

router.delete("/:id", (req, res) => {
    CheerUps.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/cheerUps");
    });
});  



/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧
module.exports = router;