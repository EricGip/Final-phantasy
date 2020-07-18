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
            user.Attack=user.Attack+3;
            user.Defense=user.Defense+5;
            user.Speed=user.Speed+5;
            user.Gil=user.Gil-5;
            $("#sword").addClass("disabled");
            $("#sword").prop("disabled", true);
            break;

            case "axe":
            $("#sword, #hammer").addClass("disabled");
            user.Attack=user.Attack+4;
            user.Defense=user.Defense+3;
            user.Speed=user.Speed+3;
            user.Gil=user.Gil-5;
            $("#axe").addClass("disabled");
            $("axe").prop("disabled",true);
            break;

            case "hammer":
            $("#sword, #axe").addClass("disabled");
            user.Attack=user.Attack+5;
            user.Defense=user.Defense+2;
            user.Speed=user.Speed+2;
            user.Gil=user.Gil-5;
            $("#hammer").addClass("disabled");
            $("#hammer").prop("disabled", true);
            break;

            case "potion":
            user.Potion=user.Potion+1;
            user.Gil=user.Gil-10;
            if (user.Potion>=5)
            { console.log (user.Potion); 
            $("#potion").addClass("disabled");
            $("#potion").prop("disabled", true);
            }
            break;

            case "light":
            $("#heavy").addClass("disabled");
            user.Hp=user.Hp+15;
            user.Attack=user.Attack+8;
            user.Defense=user.Defense+20;
            user.Speed=user.Speed-3;
            user.Gil=user.Gil-25;
            $("#light").addClass("disabled");
            $("#light").addClass("disabled");
            break;

            case "heavy":
            $("#light").addClass("disabled");
            user.Hp=user.Hp+15;
            user.Attack=user.Attack+8;
            user.Defense=user.Defense+50;
            user.Speed=user.Speed-10;
            user.Gil=user.Gil-25;
            $("#heavy").addClass("disabled");
            $("#light").addClass("disabled");
            break;    
        }        
    })
})
}
)


