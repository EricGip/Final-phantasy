var stats;
$.ajax("api/user_stats").then(function(stats) {
  stats = stats;

  $(document).on("click", ".action", function(event) {
    var action = $(this).attr("data");
    let user = stats;
    console.log("clicked");

    switch (action) {
      case "attack":
        console.log(monster);

        break;

      case "guard":
        user.break;
      case "guard":
        user.Defense = user.Defense;

        break;

      case "potion":
        user.Hp += 10;
        user.potion -= 1;

        break;

      case "item":
        user.break;

      case "run":
        //code here

        break;

      default:
      // code block
    }
  });
});
