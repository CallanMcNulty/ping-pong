var pingPong = function(inputNumber) {
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
  $("#results").hide();
  $("form#main").submit(function(event) {
    event.preventDefault();
    $("#out").empty();
    $("#results").show();
    var input = parseInt($("#in").val());
    $("#in").val("");
    var output = pingPong(input);
    output.forEach(function(outValue) {
      $("#out").append("<li>"+outValue+"</li>");
    });
  });
});
