// app.get("/api/user_stats", (req, res) => {
//     db.Stats.find({
//         UserID: req.user.id
//     }).then(results => {
//         console.log(results)
//     })
// });
$(document).ready(function()
{
    var Stats;
    $.ajax("api/user_stats").then(function(Stats){
        Stats=Stats
    });
$(document).on("click", ".action", function(event){
    var action=$(this).attr("data")
    let user = Stats;
    // switch (action){
        
    //     function getRandomInt(max){
    //         return Math.floor(Math.random()* Math.floor(max));
    //     }
        $.ajax("api/user_stats").then(function(Stats){
            Stats=Stats;
        });
        $(document).on("click", ".action", function(event){
            var action=$(this).attr("data");
            console.log("clicked");
            let user=Stats;
            console.log(Stats);
    
        switch (action){
            case "atk":
            user.Attack=user.Attack;
            break;
    
            case "guard":
            user.Defense=user.Defense;
            function getRandomInt(min, max){
            min = Math.cell(min);
            max = Math.floor(max);
            return Math.floor(Math.random()* (max-min)) + min;
            }
            getRandomInt()
            break;

            case "item":
            user.Hp=user.Hp+10;
            user.Potion=user.Potion-1;
            break;
        }
        });
    function attack(){}
    function guard(){}
    function item(){}
    function condition(){}
    });
}
)


    
