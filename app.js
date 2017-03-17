// event emmitter
var Emitter = require('events');

// try to avoid using magic strings by assigning the string to a variable
var eventConfig = require('./config').events;

var emtr = new Emitter();

// Will run whenever 'greet' event is emitted:

// These listeners are just functions sitting in an array

// 'greet' is the prop name on the obj, that will hold all of the events
emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');

// manually emit the event (loop thru teh array and invoke all of the functions)
emtr.emit(eventConfig.GREET);