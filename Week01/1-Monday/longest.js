//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(longest('abcccaa', 'acddddffzzz'));
console.log(longest('abcdefghijklmnopqrstuvwxyz'));



//*** *********************************************************************** ***
//*** longest() - Return a new sorted string, the longest possible,           ***
//***             containing distinct letters, - each taken only once -       ***
//***             coming from s1 or s2                                        ***
//***                                                                         ***
//*** Call:      longest(<parC1>[, <parC2>]) -> <argC>                        ***
//***                                                                         ***
//*** Parameter: <parC1> - First string to compute                            ***
//***            <parC2> - Second string to compute                           ***
//***                                                                         ***
//*** Return:    <argC>  - Longest string                                     ***
//*** *********************************************************************** ***

function longest(cString1, cString2) {

  var cString1 = cString1 + cString2;
  var cReturnValue = '';
  var nArrayLength;
  var nOldArrayPos = 0;

  cString1 = cString1.toString().split('').sort();

  nArrayLength = cString1.length;
  cReturnValue = cString1[0];

  for (var nArrayPositon = 1; nArrayPositon < nArrayLength-1; nArrayPositon++) {
    if (cString1[nArrayPositon] != cString1[nOldArrayPos]) {
      cReturnValue = cReturnValue + cString1[nArrayPositon];
      nOldArrayPos = nArrayPositon;
    }
   }

   return cReturnValue;

}
