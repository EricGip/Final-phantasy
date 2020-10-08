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
  db.Stats.findOne({
    where: {
      UserId: req.user.id
    }
  }).then(stats => {
    console.log(
      "\n" + "\n" + "\n" + "\n" + req.user.id + "\n" + "\n" + "\n" + "\n"
    );
    res.render("store", { stats: stats.dataValues });
    //console.log( "\n" + "\n" + "\n" + "\n" + UserId + "\n" + "\n");
    //console.log(stats.dataValues);
  });

  // res.render("store")
});

router.get("/stage1", function(req, res) {
  db.Stats.findOne({ where: { UserId: req.user.id } }).then(stats => {
    orc = {
      name: "orc",
      hp: 100,
      attack: 50,
      defense: 20,
      gil: 45,
      src: "../assets/orc.gif",
      quote: "yeet orc",
    };

    slime = {
      name: "slime",
      hp: 75,
      attack: 55,
      defense: 15,
      gil: 45,
      src: "../assets/slime.gif",
      quote: "yeet slime"
    };

    chocobo = {
      name: "chocobo",
      hp: 150,
      attack: 35,
      defense: 10,
      gil: 45,
      src: "../assets/chocobo.gif",
      quote: "yeet chocobo"
    };

    console.log(stats);

    monsters = [orc, slime, chocobo];

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    console.log(getRandomInt(monsters.length));

    let randomInt = getRandomInt(monsters.length);

    console.log(randomInt);

    console.log(monsters[randomInt]);

    chosenMonster = monsters[randomInt];

    res.render("stage1", {
      stats: stats.dataValues,
      monster: chosenMonster,
      random: randomInt
    });
  });
});

router.get("/boss", function(req, res) {
  db.Stats.findOne({ where: { UserId: req.user.id } }).then(stats => {
    Seph = {
      name: "Sephiroth",
      hp: 210,
      attack: 120,
      defense: 80,
      src: "../assets/Sephiroth.gif",
      quote: "Run or Fight, the outcome is the same, your defeat!"
    };

    res.render("boss", {
      stats: stats.dataValues,
      boss: Seph
    });
  });
});

// Export routes for server.js to use.
module.exports = router;
