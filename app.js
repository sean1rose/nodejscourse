var express = require('express');

var bodyParser = require('body-parser');

// working express app -> this is a function w/ methods on it...
var app = express();

// port is either equal to environment variable (have a PORT variable on the server) or default to 3000
var port = process.env.PORT || 3000;

// pass this to the post statement as a callback (as opposed to an 'app.use')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

// express will look in views folder...
app.set('view engine', 'ejs');

app.use('/', function(req,res,next){
  // console.log('request url: ' + req.url);
  next();
});

// ACCESSING QUERY STRINGS FROM request (?id=12)
  // http://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js

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
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
  // if there's a query string value, it'll attach it as the 'qstr' prop on the model of the view....
    // req.query.qstr is where we get the value of the query string
});


app.post('/person', urlencodedParser, function(req, res) {
  res.send('Thank you!');
  // req.body is added by urlencodedParser, values from the querystring from the form
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

// jsonParser will pull out json out of body...
app.post('/personjson', jsonParser, function(req, res) {
  res.send('Thank you for the json data!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

// app.get('/api', function(req, res) {
//   res.json({ firstname: 'John', lastname: 'Doe' });
// });

// create http server
app.listen(port);