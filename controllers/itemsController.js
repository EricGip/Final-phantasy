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

router.get('/store', function(req, res) {
    res.render("store")
})

router.get('/stage1', function(req, res) {
    res.render("stage1")
})

// Export routes for server.js to use.
module.exports = router;
