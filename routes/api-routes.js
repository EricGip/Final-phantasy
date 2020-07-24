// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    db.Stats.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(stats => {
      console.log(stats)
      console.log( "\n" + "\n" + "\n" + "\n" +req.user.id + "\n" + "\n" + "\n" + "\n");

      // on log in, if no user, 
      if (!stats.id) {
        db.Stats.create({
          gil: 500,
          hp: 5,
          attack: 5,
          defense: 5,
          speed: 5,
          potion: 1,
          UserId: req.user.id
        }).then(results => {
          res.json({
            email: req.user.email,
            id: req.user.id,
            stats: results
          });
        });
      }
      else {
        res.json({
          email: req.user.email,
          id: req.user.id,
          stats: stats
        })
      }


    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.post("/api/post_static_data", (req, res) => {
    db.Stats.Create({
      gil: 500,
      hp: 5,
      attack: 0,
      defense: 5,
      speed: -1,
      userId: req.user.id
    }).then(results => {
      res.json(results);
    });
  });

  // getting stats

  app.get("/api/user_stats", (req, res) => {
    db.Stats.find({
      where: {
        UserId: req.user.id
      }
    }).then(results => {
      console.log(results);
      res.json(results);
    })
  })

  // userId = req.email for email or req.id

  // Route for getting all items in shop
  app.get("/api/get_items", (req, res) => {
    db.Items.findAll({}).then(function (dbItems) {
      res.json(dbItems);
    });
  });

  //updating user stats

  app.put("/api/updateStats", (req, res) => {
    db.Stats.update({
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      speed: req.body.speed,
    },{
      where: {
      UserId: req.user.id
      }
    }).then(results => {
      console.log(results);
      res.json(results);
    })
  })

  app.put("/api/updatePotion", (req, res) => {
    db.Stats.update({
      potion: req.body.potion
    },{
      where: {
      UserId: req.user.id
      }
    }).then(results => {
      console.log(results);
      res.json(results);
    })
  })
  
  app.put("/api/updateGil", (req, res) => {
    db.Stats.update({
      gil: req.body.gil
    },{
      where: {
      UserId: req.user.id
      }
    }).then(results => {
      console.log(results);
      res.json(results);
    })
  })
  
};
