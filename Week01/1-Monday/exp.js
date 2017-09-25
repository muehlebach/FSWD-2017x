//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(exp(5, 3));



//*** *********************************************************************** ***
//*** exp() - The function should return the value of  b  raised to the       ***
//***         power n                                                         ***
//***                                                                         ***
//*** Call:      exp(<parN1>, <parN2>) -> <argN>                              ***
//***                                                                         ***
//*** Parameter: <parN1> - Number to calculate                                ***
//***            <parN2> - Exponent                                           ***
//***                                                                         ***
//*** Return:    <argN>  - Calculated power                                   ***
//*** *********************************************************************** ***

function exp(nNumber, nExponent) {
    console.log(nNumber+" - "+nExponent);
    if (nExponent === 0) {
      return 1;
    }
    return nNumber * exp(nNumber, nExponent-1);
}
