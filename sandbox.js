// function expression, that's immediately invoked
(function(lastname) {
  var firstname = "John";
  console.log(firstname);
  console.log(lastname)
}('Doe'));

var firstname = 'Jane';
console.log(firstname);