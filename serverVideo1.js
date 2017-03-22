// https://www.udemy.com/understand-nodejs/learn/v4/t/lecture/3632888?start=0
// building a web server in node - can make a request from browser and give a response back

var http = require('http');

// create a new server obj + callback event listener (HTTP req, HTTP res params)
http.createServer(function(req, res) {
  // CB executed when a request to server is made...
  
  // BUILD A RESPONSE HERE (using response arg, which has methods that allow u to send info back down the stream [status, headers, etc])
    // info that the browser will use and understand
    // ***res obj is a writable stream

  // 1. start w/ the head (statuscode + headers)
    // giving back plain text 
  res.writeHead(200, { 'Content-Type': 'text/plain'})

  // 2. send back the body
    // end -> i'm done, here's the last thing
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');
// ^^^ need to set up port to listen at (+ internal IP address of local host)
  // ***LISTEN makes sure that request from browser is routed properly

// when browser makes this request, this http-parser process will receive that request and provide response...
