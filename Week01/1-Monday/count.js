//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

console.log(countRepetitions(['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']));



//*** *********************************************************************** ***
//*** countRepetitions() - Return an object where the keys are the string and ***
//***                      the value for each key is how many repetitions     ***
//***                      they have in the provided array                    ***
//***                                                                         ***
//*** Call:      countRepetitions(<parA1>) -> <argO>                          ***
//***                                                                         ***
//*** Parameter: <parA1> - Array to process                                   ***
//***                                                                         ***
//*** Return:    <argO>  - Object with strings and counters                   ***
//*** *********************************************************************** ***

function countRepetitions(aStrings) {

  var aUniqueArray = Array.from(new Set(aStrings));    // Create a new array with all strings unique
  var oReturnValue = {};                               // Create a empty Object

  aUniqueArray.forEach(function(cString1) {            // forEach loop for all elements in der unique array
    nCounter = 0;

    aStrings.filter(function(cString2) {               // Make a filter for filtering only one word
      if (cString1 === cString2) {
        nCounter++;
      }
    });

    oReturnValue[cString1] = nCounter;                 // Save the counter into the object
  });

  return oReturnValue;

}
