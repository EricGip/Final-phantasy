var express = require("express");
const db = require("../models");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var items = require("../models/items.js");

router.get("/", function(req, res) {
  res.render("signup");
});

router.get("/login", function(req, res) {
  res.render("login");
});

router.get("/members", function(req, res) {
  res.render("members");
});

router.get("/store", function(req, res) {
  db.Stats.findOne({ UserId: req.user.id }).then(stats => {
    res.render("store", { stats: stats.dataValues });
    console.log(stats.dataValues);
  });

  // res.render("store")
});

router.get("/stage1", function(req, res) {
  db.Stats.findOne({ UserId: req.user.id }).then(stats => {
    orc = {
      name: "orc",
      hp: 10,
      attack: 20,
      defense: 10
    };

    slime = {
      name: "slime",
      hp: 10,
      attack: 20,
      defense: 10
    };

    chocobo = {
      name: "chocobo",
      hp: 10,
      attack: 20,
      defense: 10
    };

    monsters = [orc, slime, chocobo];

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    console.log(getRandomInt(monsters.length));

    let randomInt = getRandomInt(monsters.length);

    console.log(randomInt);

    console.log(monsters[randomInt]);

    res.render("stage1", {
      stats: stats.DataValues,
      monster: monsters[randomInt]
    });
  });
});

router.get("/boss", function(req, res) {
  db.Stats.findOne({ UserId: req.user.id }).then(stats => {
    boss={
      name: "Sephiroth",
      Hp: 30,
      Attack: 60,
      Defense: 30
    }
    // Boss=[Sephiroth];

    res.render("boss", { stats: stats });
    console.log(stats);
  });
});

// Export routes for server.js to use.
module.exports = router;
