var myMath = Object.create(Math);

var randomInt = function(max, min) {
  return myMath.floor(myMath.random() * (max-min+1) + min);
}

console.log(randomInt(3,0));
console.log(randomInt(5,1));
