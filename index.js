const express = require("express");
const hbs = require('handlebars')
const cors = require('cors');
const parser = require("body-parser");
const lolo = require('lodash');
const methMan = require('method-override');




const userController = require("./controller/users");

const cheerController = require('./controller/cheer');


// instantiate express
const app = express();

// to stop error message
app.use(parser.urlencoded({ extended: true }));

// convert json string to object
app.use(parser.json());

// use hbs for views
app.set('view engine', 'hbs'); 

app.use(cors());

app.use("/cheerups", cheerController);

app.use("/cheerups/users", userController);


app.get("/", (req, res) => {
    res.redirect("/cheerUps");
  });


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} warp speed ahead ⚡ on port 3000 📡`);
});


/// ⇡ end of line ⇪ all must be ⇑ above here ⇧