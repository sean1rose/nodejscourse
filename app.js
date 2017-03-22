// https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3632890?start=0
// Outputting HTML and templates from our node server
// GOAL: want to deliver contents of index.html as response...


var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  
  res.writeHead(200, { 'Content-Type': 'text/html'});
  
  // Pull contents from file: get full path to html file on the file sys, read it, and hold in variable
    // readFileSync gives back a buffer
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  // ^ html is a string at this point
  var message = 'Yo world...';
  // replace the template w/ our string 'yo' msg
  html = html.replace('{Message}', message);

  // ^ Dynamic templating -> sub in the template w/ a string...

  res.end(html);

}).listen(1337, '127.0.0.1');