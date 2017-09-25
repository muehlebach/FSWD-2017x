//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(isCaught('C.....m'));
console.log(isCaught('C..m'));
console.log(isCaught('..C..m'));



//*** *********************************************************************** ***
//*** isCaught() - You will be given a string featuring a cat 'C' and a mouse ***
//***              'm'. The rest of the string will be made up of '.'.        ***
//***              You need to find out if the cat can catch the mouse from   ***
//***              it's current position. The cat can jump three characters.  ***
//***                                                                         ***
//*** Call:      isCaught(<parC1>) -> <argL>                                  ***
//***                                                                         ***
//*** Parameter: <parC1> - Cat and mousestring                                ***
//***                                                                         ***
//*** Return:    <argL>  - True if the cat can reach the mouse, otherwise     ***
//***                      false                                              ***
//*** *********************************************************************** ***

function isCaught(cMouseAndCat) {

  var lReturnValue = false;
  var nCatPostition = 0;

  for (nStringPosition = 0; nStringPosition < cMouseAndCat.length; nStringPosition++) {

    if (cMouseAndCat.charAt(nStringPosition) === 'C' && nCatPostition === 0) {
      nCatPostition = nStringPosition;
    }

    if (cMouseAndCat.charAt(nStringPosition) === 'm') {

      if ((nStringPosition - nCatPostition) <= 3) {
        lReturnValue = true;
      }

      break;
    }
  }

  return lReturnValue;

}
