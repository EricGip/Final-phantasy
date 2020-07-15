var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var items = require("../models/items.js");

router.get("/", function(req, res) {
    res.render("signup");
})

router.get("/login", function(req, res) {
    res.render("login")
})

router.get("/members", function(req, res) {
    res.render("members")
})

// Export routes for server.js to use.
module.exports = router;
