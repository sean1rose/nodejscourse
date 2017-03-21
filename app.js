// streams -> sequence of pieces/chunks of data
var fs = require('fs');

// give me back the readstream obj thats returned
// stream will begin to fill buffer (pieces at a time) (if don't pass encoding option paramater)
  // this will return a buffer...
// var readable = fs.createReadStream(__dirname +
//  '/greet.txt');

// if you pass createReadStream function an object as 3rd parameter, w/ encoding, it will encode the buffer into a string
// var readable = fs.createReadStream(__dirname +
//  '/greet.txt', {encoding: 'utf8'});


var readable = fs.createReadStream(__dirname +
 '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});
 // ^ highWaterMark will tell you what size u want each chunk to be...
 // so don't need to read whole file at once, can send in pieces/chunks

// create a writeable stream
var writable = fs.createWriteStream(__dirname + 
'/greetcopy.txt');

// can listen for event emitted by read stream (data event)
readable.on('data', function(chunk) {
  console.log(chunk);
  // on every chunk -> write
  writable.write(chunk);


  // ^^^ so read from readable and write to writable...
});
