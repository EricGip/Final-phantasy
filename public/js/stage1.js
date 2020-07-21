// import chocobo from "../assets/chocobo.png";
// import orc from "../assets/orc.png";
// import slime from "../assets/slime.png"

//PULL CHARACTER STATS
app.get("/api/user_stats", (req, res) => {
  db.Stats.find({
    UserID: req.user.id
  }).then(results => {
    console.log(results);
  });
});

//action functions
// $(document.readyState(function () {
var Stats;
$.ajax("api/user_stats").then(function (stats) {
  Stats = Stats;

  // const monsterImages = [ orc, slime, chocobo]
  // $("#monster").attr("src", monsterImages[random]);
  // console.log(monsterImages)


  $(document).on("click", ".action", function (event) {
    var action = $(this).attr("data")
    let user = Stats;

    switch (action) {

      case "attack":
        monster.hp -= user.attack - monster.defense;
        $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        user.hp -= monster.attack - user.defense;
        $("#combat-log").append({ monster } + "hit you for" + { dmg } + "damage")

        break;

      case "guard":
        user.hp -= monster.attack - user.defense * 2;
        $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        monster.hp -= user.attack - monster.defense;
        $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")

        break;

      case "potion":
        user.hp += 20;
        user.potion -= 1;
        $("#combat-log").append("you heal for 20 hp")
        user.hp -= monster.attack - user.defense;
        $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")


        break;

      case "run":
        alert("You are not fit to be an adventurer - RUN AWAY YOU COWARD!!11!!");
        window.location();


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
// }));

