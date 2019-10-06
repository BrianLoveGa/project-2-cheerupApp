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


router.get('/newCheer', (req, res) => {
  res.render("newCheer");
});



/// to make a new one exist  ---  !!  not working

// router.put("/", (req, res) => {
//   CheerUps.create(req.body).then(cheers => {
//     res.redirect("/cheerUps");
//   });
// });

// router.put("/newCheer", (req,res)=>{
//   CheerUps.create(req.body)
//   console.log(req.body)
//   .then(cheer =>{
//     console.log(cheer)
//     res.redirect("/cheerUps");
//   })
//   .catch(err => console.error(err)
// );
// });

router.post("/", (req, res) => {
  CheerUps.create(req.body).then(cheers => {
    res.redirect("/cheerUps");
  });
});

router.post("/newCheer", (req,res)=>{
  CheerUps.create(req.body)
  console.log(req.body)
  .then(cheer =>{
    console.log(cheer)
    res.redirect("/cheerUps");
  })
  .catch(err => console.error(err)
);
});

///   end of prob area






/// chain with app . route from https://expressjs.com/en/guide/routing.html

/// make a new cheerup page and post it
// router.route("/newCheer")
//   .get(function (req, res) {
//     res.render("newCheer")
//   })
//          // need to fix
// .post(function (req, res){
//     CheerUps.create(req.body)
//     .then(newCheer => {
//       res.redirect("/cheerUps", newCheer)
//   })
//   .catch(err => console.error(err))
// });

///// end of new cheer route


// show cheer blank page - working
router.get("/showCheer", (req, res) => {
  res.render("showCheer");
});


// show one cheerup when click on its title on edit page button at bottom  edit a cheer Up page - working

router.get("/showCheer/:id", (req, res) => {
  console.log(req.params);
    CheerUps.findOne({_id: req.params.id}).then(cheer => {
      console.log(cheer);
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
  console.log(req.params);
    CheerUps.findOne({_id: req.params.id}).then(cheer => {
      console.log(cheer);
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