$(document).ready(function() {
  $("#main").submit(function(event) {
    var questionone = parseInt($("#questionone").val());
    var questiontwo = parseInt($("#questiontwo").val());
    var questionthree = $("#questionthree").val();
    var questionfour = $("#questionfour").val();
    var questionfive = $("#questionfive").val();

    if(questionone <5 || questiontwo <26 && questionthree === "no" || questionfour === "startup" && questionfive === "veganmayo") {
      $("#ruby").show();
    } else if (questionone >0 && questiontwo >25 || questionthree === "yes" || questionfour === "enterprise" && questionfive === "mobile") {
      $("#java").show();
    } else if (questionone >0 && questiontwo >25 && questionthree === "no" || questionfour === "large" && questionfive === "microsoft") {
      $("#csharp").show();
    } else if (questionthree === "blank" || questionfour === "blank" || questionfive ==="blank") {
        alert("Please respond to all questions!");
    }
    event.preventDefault();
  });
});
