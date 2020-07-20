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

        // const monsterImages = [ orc, slime, chocobo]
        // $("#monster").attr("src", monsterImages[random]);
        // console.log(monsterImages)


        $(document).on("click", ".action", function (event) {
            // var action = $(this).attr("data")
            // let user = stats;

            // // switch (action) {

            $.ajax("api/user_stats").then(function (stats) {
                stats = stats;
            });

            $(".action").on("click", function (event) {
                var action = $(this).attr("data");
                let user = stats;

                switch (action) {
                    case "attack":
                        monster.hp -= user.attack - monster.defense;
                        user.hp -= monster.attack - user.defense;
                        $("#combat-log").append('you hit for' + { dmg } + "damage")

                        break;

                    case "guard":
                        user.break;
                    case "guard":
                        user.hp -= monster.attack - user.defense * 2;
                        monster.hp -= user.attack - monster.defense;


                        getRandomInt()

                        break;

                    case "potion":

                        user.hp += 10;
                        user.potion -= 1;

                        break;

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
