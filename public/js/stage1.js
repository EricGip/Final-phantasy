var stats;
$.ajax("api/user_stats").then(function (stats) {
  stats = stats;

  if (monster.name === "orc") {
    monsterStats = {
      name: "orc",
      hp: 100,
      attack: 25,
      defense: 30,
    };
  } 
  else if (monster.name === "slime") {
    monsterStats = {
      name: "slime",
      hp: 75,
      attack: 25,
      defense: 30,
    };
  } 
  else {
    monsterStats = {
      name: "chocobo",
      hp: 150,
      attack: 25,
      defense: 30,
    };
  }

  $(document).on("click", ".action", function (event) {
    var action = $(this).attr("data")
    let user = stats;
    console.log("clicked")


    switch (action) {

      case "attack":

        user.hp -= monsterStats.attack - user.defense;

        console.log("attack", user.hp, monster.attack, monster.hp)
        console.log(user)
        console.log( monster )
        console.log(monsterStats)
        break;

      case "guard":
        user.hp -= monsterStats.attack - user.defense * 2;
        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        monsterStats.hp -= user.attack - monsterStats.defense;
        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        console.log("guard", user, monsterStats);
        break;

      case "potion":
        user.hp += 20;
        user.potion -= 1;
        // $("#combat-log").append("you heal for 20 hp")
        user.hp -= monsterStats.attack - user.defense;
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

