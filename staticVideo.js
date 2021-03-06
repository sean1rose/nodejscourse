var express = require('express');

// working express app -> this is a function w/ methods on it...
var app = express();

// port is either equal to environment variable (have a PORT variable on the server) or default to 3000
var port = process.env.PORT || 3000;

app.use('/', function(req,res,next){
  console.log('request url: ' + req.url);
  next();
});

// respond to a GET HTTP request at root url
app.get('/', function(req, res) {
  // express automatically adds content-type to header
  res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>Hello world!</h1></body></html>');
});

// browser will see link tag ^, will generate http request for mysite/assets/style.css
// that http request will be handled by node, when it sees 'assets', it will look for it in the '/public' folder
// will respond by streaming that css file...

// still need to deliver static files when they're requested
  // to make sure a public static file can be delivered -> use MIDDLEWARE
  // every time see '/assets', go find this full file path and look for that same file and stream the response back
  // any static file would become available by hitting '/assets'
  app.use('/assets', express.static(__dirname + '/public'));

  /* 
  https://www.safaribooksonline.com/blog/2014/03/10/express-js-middleware-demystified/
  Can use middlew are for:
    -body parsing for url-encoded/json requests
      var bodyParser = require('body-parser');
      app.use(bodyParser.json())
    -cookie parsing for cookie handling
    -building js modules on the fly
  */




// pull data from the url using pattern matching to pull values out of the routes
  // ':' means 'id' could be anything -> accessed via req.params.id
app.get('/person/:id', function(req, res) {
  // browser will see this link tag, will generate http request for /assets/style.css, handled by node, when it sees '/assets', will know to look in public folder, and will respond by streaming the static file
  res.send('<html><head></head><body><h1>Person: ' + req.params.id  + '</h1></body></html>');
});


app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

// create http server
app.listen(port);