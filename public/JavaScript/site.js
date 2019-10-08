console.log("TESTING CHECK CHECK");

// express
const express = require("express");
const router = express.Router();


// model
const CheerUps = require("../model/cheerApp");

const cheerController = require('./controller/cheer');

const app = express();

// use controller
app.use("/cheerups", cheerController);

// cheer up vote count simple style


function upVoteCheer () {

    let value = parseInt(document.querySelectorAll(this.title).value, 10);
    value = isNaN(value) ? 0 : value; 
    value ++;
    document.getElementsByClassName(this.title).value = value;
};



