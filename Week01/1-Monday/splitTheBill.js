//*** *********************************************************************** ***
//*** Call Function for test                                                  ***
//*** *********************************************************************** ***

var group = {
    Amy: 20,
    Bill: 15,
    Chris: 10,
}

console.log(splitTheBill(group));



//*** *********************************************************************** ***
//*** splitTheBill() - The function should take one parameter: an object      ***
//***                  which represents the members of the group and the      ***
//***                  amount spent by each.                                  ***
//***                  The function should return an object with the same     ***
//***                  names, showing how much money the members should pay   ***
//***                  or receive.                                            ***
//***                  Negative number means they should receive money.       ***
//***                                                                         ***
//*** Call:      splitTheBill(<parO1>) -> <argO>                              ***
//***                                                                         ***
//*** Parameter: <parO1> - Object of members                                  ***
//***                                                                         ***
//*** Return:    <argO>  - Object of members with balanced saldos             ***
//*** *********************************************************************** ***

function splitTheBill(oMembers) {

  var oReturnValue = oMembers;
  var iKeys = Object.keys(oReturnValue);   // Create a Index with the keys to the object
  var nSum = 0;

  for (var nPosition = 0; nPosition < iKeys.length; nPosition++) {
    nSum += oReturnValue[iKeys[nPosition]];
  }

  nSum = (nSum / iKeys.length);

  for (var nPosition = 0; nPosition < iKeys.length; nPosition++) {
    oReturnValue[iKeys[nPosition]] = (nSum - oReturnValue[iKeys[nPosition]]);
  }

  return oReturnValue;

}
