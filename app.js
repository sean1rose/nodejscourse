// https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3632894?start=0
// Streams and Performance...
// using a stream (createReadStream) to send data A CHUNK AT A TIME

var http = require('http');
var fs = require('fs');

// create a new server obj + callback event listener (HTTP req, HTTP res params)
http.createServer(function(req, res) {
  // CB executed when a request to server is made...
  
  // have a response stream, write to it...
  res.writeHead(200, { 'Content-Type': 'text/html'});
  
  // synchronous call - everytime someone makes a request, the JS will stop and fill buffer w/ full contents of file then send back
    // probs w/ memory if a ton of people hit the api at same time
  // var html = fs.readFileSync(__dirname + '/index.html');
  
  // use CREATEREADSTREAM to solve this prob
    // stream -> dealing w/ data, a chunk at a time
    // we have response obj-arg -> which is a writable stream available to us
  fs.createReadStream(__dirname + '/index.html').pipe(res);
  // connect readable file stream and pipe it to our response stream
    // every chunk of data will be buffered and piped out to response
    // ***(rather than pulling the entire file into a buffer then sending it), send it a CHUNK AT A TIME


}).listen(1337, '127.0.0.1');