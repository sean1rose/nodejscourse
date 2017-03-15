// event emmitter
var Emitter = require('./emitter');

var emtr = new Emitter();
console.log('emtr - ', emtr);

// Will run whenever 'greet' event is emitted:

// THese listeners are just functions sitting in an array

// 'greet' is the prop name on the obj, that will hold all of the events
emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');

// manually emit the event (loop thru teh array and invoke all of the functions)
emtr.emit('greet');