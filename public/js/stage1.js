var stats;
$.ajax("api/user_stats").then(function (stats) {
  stats = stats;

  $(document).on("click", ".action", function (event) {
    var action = $(this).attr("data")
    let user = stats;
    console.log("clicked")

    switch (action) {

      case "attack":
        monster.hp -= stats.attack - monster.defense;

        user.hp -= monster.attack - stats.defense;

        console.log("attack", user.hp, monster.attack, monster.hp)

        break;

      case "guard":
        user.hp -= monster.attack - user.defense * 2;
        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        monster.hp -= user.attack - monster.defense;
        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        console.log("guard", user, monster);
        break;

      case "potion":
        user.hp += 20;
        user.potion -= 1;
        // $("#combat-log").append("you heal for 20 hp")
        user.hp -= monster.attack - user.defense;
        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        console.log("potion", user, monster);

        break;

      case "run":
        alert("You are not fit to be an adventurer - RUN AWAY YOU COWARD!!11!!");
        window.open('', '_self').close();
        console.log("running away");

        break;

      default:
      // code block
    }
  });

});

