var inputNumber = 6; //test value

var outputArray = [];
var increment = inputNumber/Math.abs(inputNumber);
for(var i=increment; i!=inputNumber+increment; i+=increment) {
  if(i%3===0) {
    outputArray.push("ping");
  } else {
    outputArray.push(i);
  }
}
