var objectified = {
  'keyCode': 'JS',
  2: 'Program Paradigm',
  Target: 'Browser',
};

function objectKeys(obj) {
  var retArray = [];
  for (var key in obj) {
    retArray.push(key)
  } // ending for in loop
  return retArray;
}

console.log(objectKeys(objectified));
