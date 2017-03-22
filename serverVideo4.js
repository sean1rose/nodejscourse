// https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3632898?start=0
// instead of getting a file, just return some json data


var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  
  // tell requester that response will be json
  res.writeHead(200, { 'Content-Type': 'application/json'});  

  // INSTEAD OF READING FROM A FILE LIKE SO...
    // var html = fs.readFileSync(__dirname + '/index.html');
  
  // gonna return some json data...
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  }
  // ^ this isn't json yet, that's just a JS obj...

  // use JSON.stringify -> convert to a json string... aka SERIALIZING the data
  res.end(JSON.stringify(obj));

  // on the browser side, receive that JSON obj ^, and use JSON.parse() to convert it back to JS obj

}).listen(1337, '127.0.0.1');