var myMath = Object.create(Math);

myMath.randomInt = function(max, min) {
  return this.floor(this.random() * (max-min+1) + min);
}

console.log(myMath.randomInt(3,0));
console.log(myMath.round(0.5));
console.log(myMath.randomInt(5,1));
