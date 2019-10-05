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


/// make a cheerup page
router.get("/new", (req, res) => {
    res.render("newCheer");
  });


// show one cheerup
  router.get("/:title", (req, res) => {
    CheerUps.findById(req.params.title).then(cheer => {
      res.render("showCheer", {cheer});
    });
  });

  /// when new cheer-up made put on home page then redirect to home page
  router.post("/", (req, res) => {
    CheerUps.create(req.body).then(cheers => {
      res.redirect("/");
    });
  });

  // edit a cheer Up page
  router.get("/edit/:title", (req, res) => {
    CheerUps.findById(req.params.title).then(cheer => {
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