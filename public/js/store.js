// event listener for buy 

const items = require("../../models/items");


// app.get("/api/user_stats/", (req, res) => {
//     db.Stats.update({
//       attack: req.user.attack + 3 (or whatever item stat)
//       defense: req.user.defense + 3 
//     })

// make an ajax call to the item db and give it to character

$(document.ready(function()

{
    var stats;
    $.ajax("api/user_stats").then(function(stats){
        stats=stats
    })
    $(".buy").on("click", function(event){
        var picked=$(this).attr("data") 
        let user = stats;
        switch (picked){
            case "sword":
            user.Attack=user.Attack+3;
            user.Defense=user.Defense+5;
            user.Speed=user.Speed+5;
            user.Gil=user.Gil-5;
            break;

            case "axe":
            user.Attack=user.Attack+4;
            user.Defense=user.Defense+3;
            user.Speed=user.Speed+3;
            user.Gil=user.Gil-5;
            break;

            case "potion":
            user.gil=user.gil-10;
            // Item=
            // "HP+: 20",
            // "Gil: 10"
            break;

            case "light":
            user.Hp=user.Hp+15;
            user.Attack=user.Attack+8;
            user.Defense=user.Defense+20;
            user.Speed=user.Speed-3;
            user.Gil=user.Gil-25;
            break;

            case "heavy":
            user.Hp=user.Hp+15;
            user.Attack=user.Attack+8;
            user.Defense=user.Defense+50;
            user.Speed=user.Speed-10;
            user.Gil=user.Gil-25;
            break;    
        }
        

        
        var id=$(this).data("id");
        var newSword=$(this).data("newSword");

        var newSwordUser = {
            sword: newSword
        };
        $.ajax("/api/post_data/" + id, {
            type: "PUT",
            data: newSwordUser
        }).then(
            function () {
                console.log("User has received", newSword);
                location.reload();
            }
        );
    });
})