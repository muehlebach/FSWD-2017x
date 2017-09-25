//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(isArray('hello'));
console.log(isArray(['hello']));
console.log(isArray([2, {}, 10]));
console.log(isArray({a: 2}));



//*** *********************************************************************** ***
//*** isArray() - returns  true  when the parameter passed is a array and     ***
//***             false  otherwise                                            ***
//***                                                                         ***
//*** Call:      isArray(<parA1>) -> <argL>                                   ***
//***                                                                         ***
//*** Parameter: <parC1> - Array                                              ***
//***                                                                         ***
//*** Return:    <argL>  - True if is a array, otherwise false                ***
//*** *********************************************************************** ***

function isArray(aArray) {
   if (aArray instanceof Array) {
     return true;
   }
   else {
     return false;
   }
}
