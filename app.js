'use strict';

var EventEmitter = require('events');


// (same as using util.inherit)
class Greetr extends EventEmitter {
  constructor() {
    // calls parent 
    super();
    this.greeting = 'Hello world!';
  }

  greet(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
  }
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted! - ', data);
});

greeter1.greet('Sean');