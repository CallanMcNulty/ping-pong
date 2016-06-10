var pingPong = function(inputNumber) {
  var outputArray = [];
  var increment = inputNumber/Math.abs(inputNumber);
  for(var i=increment; i!=inputNumber+increment; i+=increment) {
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
  }
  return outputArray;
}


$(document).ready(function() {
  $("form#main").submit(function(event) {
    event.preventDefault();
    $("#out").empty();
    var input = parseInt($("#in").val());
    $("#in").val("");
    var output = pingPong(input);
    output.forEach(function(outValue) {
      $("#out").append("<li>"+outValue+"</li>");
    });
  });
});
