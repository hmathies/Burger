//shorten document on ready code function
$(function(){
    $(".burgers2eat").click(function(){
      $.ajax({
          url: "/burgers/" + $(this).data("id"),
          method: "PUT"
        }).success(function(response){
          console.log("devoured!");
          //this reloads the page
          location.reload();
        });
    });
});
