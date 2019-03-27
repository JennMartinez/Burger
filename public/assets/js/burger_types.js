// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".inhale").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("changed devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    //   $(this).remove();
    });
  
    $(".order_btn").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var id = $(this).data("id");
  
      // Send the POST request.
      $.ajax("/api/burgers/" + id, {
        type: "POST",
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  