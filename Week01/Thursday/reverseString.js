String.prototype.reverseStr = function() {
  var reversed = this.split('').reverse().join('');

  return reversed;
}

console.log("pie".reverseStr());
