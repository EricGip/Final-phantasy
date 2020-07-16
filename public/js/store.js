// event listener for buy 

// make an ajax call to the item db and give it to character

$(function(){
    $(".buy-sword").on("click", function(event){
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