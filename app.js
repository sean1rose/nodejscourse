// object properties and methods
var obj = {
  greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
// have a variable set to a string and then use that variable in brackets to get a particular value 
var prop = 'greet';
console.log(obj[prop]);

var arr = [];

arr.push(function() {
  console.log('Hello world 1');
});

arr.push(function() {
  console.log('Hello world 2');
});

arr.push(function() {
  console.log('Hello world 3');
});

arr.forEach(function(item) {
  item();
});