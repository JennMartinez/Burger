$(function() {
    $(".inhale").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("changed devoured");
          location.reload();
        }
      );
    });

$(function() {
    $(".order_btn").on("submit", function(event) {
      event.preventDefault();
      var id = $(this).data("name");
  
      $.ajax("/api/burgers/" + id, {
        type: "POST",
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
});