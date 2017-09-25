//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(areSameType(['hello', 'world', 'long sentence']));
console.log(areSameType([1, 2, 9, 10]));
console.log(areSameType([['hello'], 'hello', ['bye']]));
console.log(areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]));



//*** *********************************************************************** ***
//*** areSameType() - checks whether all the element of an array are the same ***
//***                 datatype                                                ***
//***                                                                         ***
//*** Call:      areSameType(<parA1>) -> <argL>                               ***
//***                                                                         ***
//*** Parameter: <parA1> - Array                                              ***
//***                                                                         ***
//*** Return:    <argL>  - True if all elements are from the same type,       ***
//***                      otherwise false                                    ***
//*** *********************************************************************** ***

function areSameType(aArray) {

  var lReturnValue = true;
  var nArrayLength = aArray.length;
  var cType = typeof aArray[0];

  for (var nIndex = 1; nIndex < nArrayLength; nIndex++) {
    if (typeof aArray[nIndex] != cType) {
      lReturnValue = false;
      break;
    }
   }

   return lReturnValue;

}
