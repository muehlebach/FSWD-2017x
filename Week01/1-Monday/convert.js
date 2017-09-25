//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(convert(429563));
console.log(convert(324));


//*** *********************************************************************** ***
//*** convert() - Return the digits of this number within an array in reverse ***
//***             order                                                       ***
//***                                                                         ***
//*** Call:      convert(<parN1>) -> <argA>                                   ***
//***                                                                         ***
//*** Parameter: <parN1> - Number to compute                                  ***
//***                                                                         ***
//*** Return:    <argA>  - Array with the numbers in reverse order            ***
//*** *********************************************************************** ***

function convert(nNumber) {

  var cReturnValue = nNumber.toString().split('').sort(function(a, b){return b-a});

  return cReturnValue;

}
