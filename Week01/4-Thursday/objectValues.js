var objectified = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

function objectValues(obj) {

  var retArray = [];

  for (var key in obj) {
    retArray.push(obj[key])
  } // ending for in loop
  return retArray;
}

console.log(objectValues(objectified));
