// express
const express = require("express");
const router = express.Router();


// model
const CheerUps = require("../model/cheerApp");



/// list all cheer ups - home page - working

router.get('/', (req, res) =>{
    CheerUps.find({})
    .then(cheers => {
        res.render("index", {cheers});
    })    
    .catch(err => console.error(err));
});


// /// make a cheerup page
// router.get("/new", (req, res) => {
//     res.render("newCheer");
//   });

// /// when new cheer-up made put on home page then redirect to home page
// router.post("/", (req, res) => {
//   CheerUps.create(req.body).then(cheers => {
//     res.redirect("/");
//   });
// });



/// chain with app . route from https://expressjs.com/en/guide/routing.html

/// make a new cheerup page and post it
router.route("/new")
  .get(function (req, res) {
    res.render("newCheer");
  })
 // need to fix
  .post(function (req, res){
    CheerUps.create(req.body).then(() => {
      res.redirect("/");
  })
})

/// working
.delete(function (req, res){
  CheerUps.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/");
  })

});




/// edit page blank exists - working

router.get("/edit", (req, res) => {
  res.render("editCheer");
});


// see a cheerup on edit page by id - working
// show one cheerup when click on its title on edit page button at bottom  edit a cheer Up page  

router.get("/edit/:id", (req, res) => {
  console.log(req.params);
    CheerUps.findOne({_id: req.params.id}).then(cheer => {
      console.log(cheer);
      res.render("editCheer", cheer);
    })
    .catch(err => console.error(err));
});


/// make an edit work need to fix

  router.put("/edit/:id", (req, res) => {
    CheerUps.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(cheerup => {
      res.redirect(`/${cheerup.id}`);
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