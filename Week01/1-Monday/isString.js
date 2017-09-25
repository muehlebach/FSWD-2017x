//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(isString('hello'));
console.log(isString(['hello']));
console.log(isString('this is a long sentence'));
console.log(isString({a: 2}));



//*** *********************************************************************** ***
//*** isString() - returns  true  when the parameter passed is a string and   ***
//***              false  otherwise                                           ***
//***                                                                         ***
//*** Call:      isString(<parC1>) -> <argL>                                  ***
//***                                                                         ***
//*** Parameter: <parC1> - String                                             ***
//***                                                                         ***
//*** Return:    <argL>  - True if is a string, otherwise false               ***
//*** *********************************************************************** ***

function isString(cString) {
   if (typeof cString === 'string') {
     return true;
   }
   else {
     return false;
   }
}
