// https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3632900?start=0
// ROUTING - mapping HTTP requests to content
  // when you request a file/resource on the internet -> you're not directly connecting to the server, but to the server asking "Give me this"
  // Server may do various things to provide that content:
    // may pull that content off the server
    // may be getting that data from a database
    // may be building HTML on the fly

// want to respond to different URLS

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

  // if root URL -> return contents of index.html file
  if (req.url === '/'){
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }

  // if '/api' route -> return json...
  else if (req.url === '/api'){
    // tell requester that response will be json
    res.writeHead(200, { 'Content-Type': 'application/json'});  
    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
  }

  else {
    res.writeHead(404);
    res.end();
  }

}).listen(1337, '127.0.0.1');