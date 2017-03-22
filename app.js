var express = require('express');

// working express app -> this is a function w/ methods on it...
var app = express();

// port is either equal to environment variable (have a PORT variable on the server) or default to 3000
var port = process.env.PORT || 3000;

// respond to a GET HTTP request at root url
app.get('/', function(req, res) {
  // express automatically adds content-type to header
  res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

// ':' means 'id' could be anything -> accessed via req.params.id
app.get('/person/:id', function(req, res) {
  // express automatically adds content-type to header
  res.send('<html><head></head><body><h1>Person: ' + req.params.id  + '</h1></body></html>');
});


app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

// create http server
app.listen(port);