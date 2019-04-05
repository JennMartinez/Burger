$(function() {
    $(".inhale").on("click", function(event) {
      var id = $(this).data("id");
     console.log(id);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("changed devoured");
          console.log(id)
          location.reload();
        }
      );
    });
});






// Testing
// $(function() {
//     $("#order_burger").on("click", function(event) {
//       event.preventDefault();
//       var burger_name = $("#order").val();
//       console.log("id" , burger_name);
     
//       $.ajax ({
//         method: "POST", 
//         url: "/api/burgers/new_burger"

//       }).then(
//         function() {
//           console.log("created new burger");
//           location.reload();
//         }
//       );
//     });
//   });