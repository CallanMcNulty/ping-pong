var pingPong = function(inputNumber, customDivisor, customValue) {
  var outputArray = [];
  var increment; //positive input: 1, negative input: -1, zero input: 0
  if(inputNumber===0) {
    increment = 0;
  } else {
    increment = inputNumber/Math.abs(inputNumber);
  }
  for(var i=increment; Math.abs(i)<=Math.abs(inputNumber); i+=increment) {
    var item = "";
    if(i%3===0) {
      item += "ping";
    }
    if(i%5===0) {
      item += "pong";
    }
    if(i%customDivisor===0 && customDivisor!=0) {
      item += customValue;
    }
    if(item==="") {
      item = i;
    }
    outputArray.push(item);
    if(increment===0) {
      break;
    }
  }
  return outputArray;
}


$(document).ready(function() {
  var customDivisor = 0;
  var customValue = "";
  $("form#main").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#in").val());
    $("#in").val("");
    var output = pingPong(input, customDivisor, customValue);
    if(output.length > 0) {
      $("#out").empty();
      $("#results").show();
      $("#close").show();
      output.forEach(function(outValue) {
        $("#out").append("<li>"+outValue+"</li>");
      });
    }
  });
  $("#close").click(function() {
    $("#out").empty();
    $("#results").hide();
    $("#close").hide();
  });
  $("#save").click(function() {
    customDivisor = parseInt($(".customDiv").val());
    customValue = $(".customVal").val();
  });
});
