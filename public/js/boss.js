import chocobo from "../assets/chocobo.png";
import orc from "../assets/orc.png";
import slime from "../assets/slime.png"

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
  document.readyState(function () {
    var stats;
    $.ajax("api/user_stats").then(function (stats) {
      stats = stats
    });


    $(document).on("click", ".action", function (event) {
      var action = $(this).attr("data")
      let user = stats;

      // switch (action) {

      $.ajax("api/user_stats").then(function (stats) {
        stats = stats;
      });

      $(".action").on("click", function (event) {
        var action = $(this).attr("data");
        let user = stats;

        switch (action) {
          case "attack":
            monster.Hp -= user.Attack;
            user.Attack = user.Attack;
            $("#combat-log").append('you hit for' + { dmg } + "damage")

            break;

          case "guard":
            user.break;
          case "guard":

            user.Defense = user.Defense;
            function getRandomInt(min, max) {
              min = Math.cell(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            }

            getRandomInt()

            break;

          case "potion":

            user.Hp += 10;
            user.potion -= 1;

            break;

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
      function guard() { }

      //use a health pot?
      function item() { }

      //run away and we going to pop up a alert sating...you sissy...you ran away...game over?
      function run() { }

      //win or lose
      function condition() {

      };

    });

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
