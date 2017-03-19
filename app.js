'use strict';

// class -> essentially functional prototypal inheritance
class Person {
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};

var john = new Person('John', 'Doe');
john.greet();

// works all the same...

// functional prototype (prototypal inheritance)
/*
function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}
*/