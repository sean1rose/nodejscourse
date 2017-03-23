var express = require('express');

// working express app -> this is a function w/ methods on it...
var app = express();

// port is either equal to environment variable (have a PORT variable on the server) or default to 3000
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// express will look in views folder...
app.set('view engine', 'ejs');

app.use('/', function(req,res,next){
  console.log('request url: ' + req.url);
  next();
});

// respond to a GET HTTP request at root url
app.get('/', function(req, res) {
  // res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello world!</h1></body></html>');
  // ^ instead of sending html manually, can render file from views folder
  res.render('index');
});

app.get('/person/:id', function(req, res) {
  // pass in data to person ejs template using the route param
    // the ejs file can use that data...
      // <h1>Person: <%= ID %></h1>
  res.render('person', { ID: req.params.id })
});


// app.get('/api', function(req, res) {
//   res.json({ firstname: 'John', lastname: 'Doe' });
// });

// create http server
app.listen(port);