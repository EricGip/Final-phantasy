// event listener for buy 

const items = require("../../models/items");

// make an ajax call to the item db and give it to character

$(function(){
    $(".buy").on("click", function(event){
        var picked=$(this).attr("data") 
        switch (picked){
            case "sword":
            Item = 
            "Attack: 3",
            "Defense: 5",
            "Speed: 5",
            "Gil:5";
            break;

            case "axe":
            Item=
            "Attack: 4",
            "Defense: 3",
            "Speed: 3",
            "Gil: 5"
            break;

            case "potion":
            Item=
            "HP+: 20",
            "Gil: 10"
            break;

            case "light":
            Item=
            "HP: 15",
            "Attack: 8",
            "Defense: 20",
            "Speed: -3",
            "Gil: 25"
            break;

            case "heavy":
            Item=
            "HP: 30",
            "Attack: 0",
            "Defense: 50",
            "Speed: -10",
            "Gil: 25"
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
    }).then (
        function() {
            console.log ("User has received", newSword);
            location.reload();
        }
    );
    });
})