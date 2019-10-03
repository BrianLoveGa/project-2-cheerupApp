// express
const express = require("express");
const router = express.Router();


// model
const CheerUps = require("../model/cheerApp");


/// list all cheer ups 

router.get('/', (req, res) =>{
    CheerUps.find().then(cheers => {
        res.json(cheers);
    })
    .catch(err => console.error(err));
});



/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧

module.exports = router;