function greet(callback) {
  console.log('hello');
  var data = {
    name: 'Sean Rose'
  }
  callback(data);
}

greet(function(data){
  console.log('2nd message callback invoked!');
  console.log(data);
});

greet(function(data) {
  console.log('3rd 3rd - ', data.name);
});

// the function that i invoke will invoke later the function that i give it