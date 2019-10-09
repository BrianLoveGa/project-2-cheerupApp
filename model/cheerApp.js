const mongoose = require("../db/connection");

const CheerUpsSchema = new mongoose.Schema({

    title: String,
    cheerup: String,
    creator: String,
    backgroundColor: Number,
    upvotes: Number

});

const Cheers = mongoose.model("cheerups", CheerUpsSchema);
/// send it out
module.exports = Cheers;