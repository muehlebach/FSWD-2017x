var merge = function(obj1, obj2) {

///////////////////// FIRST SOLUTION COMMENTED OUT
  // var newObj = {};
  //
  // for (i in obj1) {
  //   newObj[i] = obj1[i];
  // }
  //
  // for (i in obj2) {
  //   if (! newObj[i]) {
  //     newObj[i] = obj2[i];
  //   }
  // }
  //
  // return newObj;

///////////////// SECOND SOLUTION
  return Object.assing({a:0, b:0, c:0}, obj2, obj1);  // Noch eine anderer Lösung!
}

console.log(merge({ a: 3, b: 2}, {a: 2, c: 4}));
