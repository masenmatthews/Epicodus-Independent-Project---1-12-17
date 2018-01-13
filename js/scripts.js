$(document).ready(function() {
  $("#main").submit(function(event) {
    var questionone = parseInt($("#questionone").val());
    var questiontwo = parseInt($("#questiontwo").val());
    var questionthree = $("#questionthree").val();
    var questionfour = $("#questionfour").val();
    var questionfive = $("#questionfive").val();

    if(questionone <=2 && questiontwo <30 && questionthree === "no" || questionfour === "startup" && questionfive === "veganmayo") {
      $("#ruby").fadeIn();
    }
    else if (questionone >=7 || questiontwo >40 || questionthree === "yes" || questionfour === "enterprise" && questionfive === "mobile") {
      $("#java").fadeIn();
    }
    else if (questionone >2 || questiontwo <39 && questionthree === "no" || questionfour === "large" && questionfive === "microsoft") {
      $("#csharp").fadeIn();
    }
    else if (questionthree === "blank" || questionfour === "blank" || questionfive ==="blank") {
      alert("Please respond to all questions!");
    }
    event.preventDefault();
  });
});
