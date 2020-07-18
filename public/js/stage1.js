//PULL CHARACTER STATS
app.get("/api/user_stats", (req, res) => {
  db.Stats.find({
    UserID: req.user.id
  }).then(results => {
    console.log(results);
  });
});

//action functions
$(
  document.readyState(function() {
    var stats;

    monsters = [ orc, slime, chocobo]

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    console.log(getRandomInt(monsters.length));

    $.ajax("api/user_stats").then(function(stats) {
      stats = stats;
    });

    $(".action").on("click", function(event) {
      var action = $(this).attr("data");
      let user = stats;

      switch (action) {
        case "attack":
          user.Attack = user.Attack;

          break;

        case "guard":
          user.break;

        case "item":
          user.break;

        case "run":
          //code here

          break;

        default:
        // code block
      }
    });

    //attack!
    function attack() {
      // route to data base that retrieves the user's attack
      //
    }

    //defend...does this reduce damage the user takes?
    function guard() {}

    //use a health pot?
    function item() {}

    //run away and we going to pop up a alert sating...you sissy...you ran away...game over?
    function run() {}

    //win or lose
    function condition() {}
  })
);
