// express
const express = require("express");
const router = express.Router();


// model
const CheerUps = require("../model/cheerApp");



/// list all cheer ups - home page

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
  .post(function (req, res){
    CheerUps.create(req.body).then(() => {
      res.redirect("/");
  })
})
.delete(function (req, res){
  CheerUps.findByIdAndRemove(req.params.id).then(() => {
    res.redirect("/");
  })

});

/// edit page blank exists

router.get("/edit", (req, res) => {
  res.render("editCheer");
});


// show one cheerup when click on its title on edit page button at bottom  edit a cheer Up page  and delete from here

router.get("/edit/:title", (req, res) => {
    CheerUps.findOne(req.params.title).then(cheer => {
      res.render("editCheer", {cheer});
    });
});


/// make an edit work

  router.put("/:id", (req, res) => {
    CheerUps.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(cheerup => {
      res.redirect(`/${cheerup.id}`);
    });
});


/// delete it go home page

router.delete("/:id", (req, res) => {
    CheerUps.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/");
    });
});  



/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧

module.exports = router;