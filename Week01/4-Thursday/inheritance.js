var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.alive = true;
}

Person.prototype.greet = function() {
  console.log("Hello");
}

var Writer = new Person('Writer');
Writer.prototype = Object.create(Person.prototype);
var Writer = function(firstName, lastName, pseudonym) {
  Person.call(this, firstName);
  Person.call(this, lastName);
//  Person.call(this, alive);
  this.pseudonym = function() {
    var firstRev = firstName.split('').reverse().join();
    var lastRev = lastName.split('').reverse().join();
    return lastRev.concat(firstRev);
  }
}

Writer.prototype.signbook = function() {
  console.log("this is a message with a " + pseudonym);
}

var Developer = new Person('Developer');
Developer.prototype = Object.create(Person.prototype);
var Developer = function(firstName, lastName, codename) {
  Person.call(this, firstName);
  Person.call(this, lastName);
//  Person.call(this, alive);
  this.codename = codename;
}

var juerg = new Developer('Juerg', 'Muehlebach', 'Jüge')

Developer.prototype.impress = function() {
  console.log("1010101\n1010101\n1010101\n1000000\n" + this.codename);
}

var Singer = new Person('Singer');
Singer.prototype = Object.create(Person.prototype);
var Singer = function(firstName, lastName, melody) {
  Person.call(this, firstName);
  Person.call(this, lastName);
  Person.call(this, alive);
  this.artisticName = 'Fancy' + firstName + lastName;
  this.melody = melody;
}

Singer.prototype.sing = function() {
  for (i=0; i<5; i++) {
    console.log(this.melody);
  }
} // end of sing method

var JuniorDeveloper = new Person('JuniorDeveloper');
JuniorDeveloper.prototype = Object.create(Developer.prototype);
var JuniorDeveloper = function() {
  this.isStruggling = true;
  Developer.call(this, firstName);
  Developer.call(this, lastName);
  Developer.call(this, alive);
  Developer.codename = codename;
}
JuniorDeveloper.prototype.complain = function() {
  var capital = this.codename.toUpperCase();
  console.log(capital);
}
JuniorDeveloper.prototype.workHard = function() {
  for (i=0; i<10; i++) {
    console.log(this.codename + "is working hard");
  }
} // End of workHard method
