// call and apply
var obj = {
  name: 'John Doe',
  greet: function(param) {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();

// call -> pass in obj that 'this' will refer to
obj.greet.call({name: 'Jane Doe'});

obj.greet.apply({name: 'Jane Doe'}, [param1, param2]);