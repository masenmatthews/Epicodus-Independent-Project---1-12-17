$(document).ready(function() {
  $("#main").submit(function(event) {
    var questionone = parseInt($("#questionone").val());
    var questiontwo = parseInt($("#questiontwo").val());
    var questionthree = $("#questionthree").val();
    var questionfour = $("#questionfour").val();
    var questionfive = $("#questionfive").val();

    if(questionone <3 && questiontwo <27 && questionthree === "no") {
      $("#ruby").show();
    } else if (questionone >5 && questiontwo >30 && questionthree === "yes") {
      $("#java").show();
    } else if (questionone === 4 && questiontwo === 25 && questionthree === "no") {
      $("#csharp").show();
    } else if (questionthree === "blank" || questionfour === "blank" || questionfive ==="blank") {
        alert("Please respond to all questions!");
    }
    event.preventDefault();
  });
});
