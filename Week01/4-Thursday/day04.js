var numberOfTimesHeGoesOutLaur = 0;
var numberOfTimesHeGoesOutPat = 0;

function incrementTimesGoingOut(name, counter) {
  var counter = 0;
  return function() {
    counter++;
    console.log(name + ' ' + count);
  }
}

var laurent = incrementTimesGoingOut('Lauren');
var patrick = incrementTimesGoingOut('Patrick');

laurent();
