var inputNumber = 16; //test value

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
