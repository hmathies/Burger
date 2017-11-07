// / Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eat").on("click", function(event) {
    console.log("change-eat click detected!");
    var id = $(this).data("id");
    var newEats = $(this).data("newEat");

    var newEatState = {
      devoured: newEats
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed eat to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".delete-eat").on("click", function(event) {
    var id = $(this).data("id");
    console.log("delete-eat click detected!");
    // Send the DELETE request.
    $.ajax("/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

  $("#create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("create-burger submit detected!");
    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: $("[burger_name=burger_name]").val().trim(),
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Yay! created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });