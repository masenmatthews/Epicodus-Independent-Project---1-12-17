$(document).ready(function() {
  $("#main form").submit(function(event) {
    var questionone = parseInt($("#questionone").val();
    var questiontwo = parseInt($("#questiontwo").val();
    var questionthree = $("#questionthree").val();
    var questionfour = $("#questionfour").val();
    var questionfive = $("#questionfive").val();

    if(questionthree === "blank") {
        alert("Please respond to all questions!");
    }


    event.preventDefault();
  });
});
