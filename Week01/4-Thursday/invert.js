var inverts = function(obj) {

  var new_obj = {};

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      new_obj[obj[property]] = property;
    }
  }

  return new_obj;
}



console.log(inverts({ a: 3, b: 2 }));
