var EventEmitter = require('events');
var util = require('util');

// function constructor
function Greetr() {
  // super constructor...
  EventEmitter.call(this);
  
  this.greeting = 'Hello world!';
}

// Greetr INHERITS all the EventEmitter methods/props, including 'emit' and 'on'
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  // EE
  this.emit('greet', data);
}

var greeter1 = new Greetr();
// has access to greeter and event EventEmitter

// EE
greeter1.on('greet', function(data) {
  console.log('Someone greeted! - ' + data);
});

greeter1.greet('Sean');