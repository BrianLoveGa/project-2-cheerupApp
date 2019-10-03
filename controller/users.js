// express
const express = require("express");
const router = express.Router();


// model
const Users = require("../model/userApp");


/// list all users

router.get('/cheerups/users', (req, res) =>{
    Users.find().then(peeps => {
        res.json(peeps);
    })
    .catch(err => console.error(err));
});




/// ⇡ end of line ⇪ all people routes must be ⇑ above here ⇧

module.exports = router;