// event listener for buy 

// const items = require("../../models/items");


// app.get("/api/user_stats/", (req, res) => {
//     db.Stats.update({
//       attack: req.user.attack + 3 (or whatever item stat)
//       defense: req.user.defense + 3 
//     })

// make an ajax call to the item db and give it to character



$(document).ready(function()
{
  console.log ("hello");
    var Stats;
    $.ajax("api/user_stats").then(function(Stats){
        Stats=Stats
        console.log ("ajax");
        console.log (Stats);

    
    $(document).on("click", ".buy", function(event){
        var picked=$(this).attr("data");
        console.log ("clicked");
        let user = Stats;
        console.log (Stats);
        switch (picked){
            case "sword":
            $("#axe, #hammer").addClass("disabled");
            // $("#hammer").addClass("disabled");
            user.Attack=user.Attack+3;
            user.Defense=user.Defense+5;
            user.Speed=user.Speed+5;
            user.Gil=user.Gil-5;
            break;

            case "axe":
            $("#sword, #hammer").addClass("disabled");
            user.Attack=user.Attack+4;
            user.Defense=user.Defense+3;
            user.Speed=user.Speed+3;
            user.Gil=user.Gil-5;
            break;

            case "hammer":
            $("#sword, #axe").addClass("disabled");
            user.Attack=user.Attack+5;
            user.Defense=user.Defense+2;
            user.Speed=user.Speed+2
            user.Gil=user.Gil-5
            break;

            case "potion":
            user.gil=user.gil-10;
            user.potion += 1; 
            // Item=
            // "HP+: 20",
            // "Gil: 10"
            break;

            case "light":
            $("#heavy").addClass("disabled");
            user.Hp=user.Hp+15;
            user.Attack=user.Attack+8;
            user.Defense=user.Defense+20;
            user.Speed=user.Speed-3;
            user.Gil=user.Gil-25;
            break;

            case "heavy":
            $("#light").addClass("disabled");
            user.Hp=user.Hp+15;
            user.Attack=user.Attack+8;
            user.Defense=user.Defense+50;
            user.Speed=user.Speed-10;
            user.Gil=user.Gil-25;
            break;    
        }        
    })
})
}
)


