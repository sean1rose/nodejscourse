function Emitter() {
  this.events = {};
}

console.log('Emitter - ', Emitter.prototype);

// on: to add an event listener -> code that responds to an event
Emitter.prototype.on = function(type, listener) {
  // create a new property (of type array) on the object
  this.events[type] = this.events[type] || [];
  // add function to that array
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  // if i have that property on the obj
  if (this.events[type]) {
    // then i'll loop thru the prop-array, and execute each listener-function
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

// make the function constructor available so can create as many emitters as i want
module.exports = Emitter;

/*
{
  onFileSave: [verifyFileFunc, saveFileFunc]
}
*/