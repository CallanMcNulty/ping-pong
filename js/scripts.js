var inputNumber = -2; //test value

var outputArray = [];
var increment = inputNumber/Math.abs(inputNumber);
for(var i=increment; i!=inputNumber+increment; i+=increment) {
  outputArray.push(i);
}
