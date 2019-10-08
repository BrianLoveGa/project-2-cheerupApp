const express = require("express");
const hbs = require('handlebars')
const cors = require('cors');
const parser = require("body-parser");
const _= require('method-override');

/// to add in passport
const passport = require('passport');
const passportConfig = require('./config/passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/users');
const db = mongoose.connection;

// instantiate express
const app = express();


// // find controllers
const userController = require("./controller/users");

const cheerController = require('./controller/cheer');



// passport things to work

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())
app.use(flash());
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}))



// to stop error message
app.use(parser.urlencoded({ extended: true }));

// convert json string to object
app.use(parser.json());

// to use method override
app.use(_("_method"));


// use hbs for views
app.set('view engine', 'hbs'); 

// styles & other files
app.use(express.static("public"));

// use cors
app.use(cors());

// use controllers
app.use("/cheerups", cheerController);

app.use("/users", userController);


// redirect any requests to the main cheerUps homepage 
app.get("/", (req, res) => {
  res.redirect("/cheerUps");
});



app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next();
});










/// connection mon
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} warp speed ahead ⚡ on port 3000 📡`);
});


/// ⇡ end of line ⇪ all must be ⇑ above here ⇧