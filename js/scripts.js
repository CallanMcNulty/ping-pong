var pingPong = function(inputNumber, customDivisors, customValues) {
  var outputArray = [];
  var increment; //positive input: 1, negative input: -1, zero input: 0
  if(inputNumber===0) {
    increment = 0;
  } else {
    increment = inputNumber/Math.abs(inputNumber);
  }
  for(var i=increment; Math.abs(i)<=Math.abs(inputNumber); i+=increment) {
    var item = "";
    for(var c=0; c<=customValues.length; c++) {
      if(i%customDivisors[c]===0 && customDivisors[c]!=0) {
        item += customValues[c];
      }
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
  var customDivisors = [3, 5];
  var customValues = ["ping", "pong"];
  $("form#main").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#in").val());
    $("#in").val("");
    var output = pingPong(input, customDivisors, customValues);
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
    customDivisors = [];
    customValues = [];
    $(".customDiv").each(function() {
      customDivisors.push($(this).val());
    });
    $(".customVal").each(function() {
      customValues.push($(this).val());
    });
  });
  $("#add").click(function() {
    $("#pairs").append('<label class="text-muted">Replace numbers divisible by</label>  <input class="customDiv form-control" type="number" value=""> <label class="text-muted">with</label> <input class="customVal form-control" type="text" value="">');
  });
  $("#remove").click(function() {
    $("#pairs label:last").remove();
    $("#pairs input:last").remove();
    $("#pairs label:last").remove();
    $("#pairs input:last").remove();
    customDivisors.pop();
    customValues.pop();
  });
  $("#restore").click(function() {
    $("#pairs").empty();
    $("#pairs").append('<label class="text-muted">Replace numbers divisible by</label>  <input class="customDiv form-control" type="number" value="3"> <label class="text-muted">with</label> <input class="customVal form-control" type="text" value="ping">');
    $("#pairs").append('<label class="text-muted">Replace numbers divisible by</label>  <input class="customDiv form-control" type="number" value="5"> <label class="text-muted">with</label> <input class="customVal form-control" type="text" value="pong">');
  });
});
