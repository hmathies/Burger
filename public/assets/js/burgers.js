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
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});
