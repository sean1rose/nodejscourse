// streams -> sequence of pieces/chunks of data
var fs = require('fs');

// allows us to implement a gzip file (compressed file)
var zlib = require('zlib');

// give me back the readstream obj thats returned
// stream will begin to fill buffer (pieces at a time) (if don't pass encoding option paramater)
  // this will return a buffer...
// var readable = fs.createReadStream(__dirname +
//  '/greet.txt');

// if you pass createReadStream function an object as 3rd parameter, w/ encoding, it will encode the buffer into a string
// var readable = fs.createReadStream(__dirname +
//  '/greet.txt', {encoding: 'utf8'});


/*
var readable = fs.createReadStream(__dirname +
 '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});
 // ^ highWaterMark will tell you what size u want each chunk to be...
 // so don't need to read whole file at once, can send in pieces/chunks

// create a writeable stream
var writable = fs.createWriteStream(__dirname + 
'/greetcopy.txt');

// can listen for 'data' event emitted by read stream
readable.on('data', function(chunk) {
  console.log(chunk);
  // on every chunk -> write
  writable.write(chunk);
  // ^^^ so read from readable and write to writable...
});
*/

var readable = fs.createReadStream(__dirname +
'/greet.txt');

var writable = fs.createWriteStream(__dirname +
'/greetcopy.txt');

// readable is the src
// writable is the dest
  // sets up event listener to listen for chunk of data
  // this func will define the dest
// readable.pipe(writable);


var compressed = fs.createWriteStream(__dirname +
'/greet.txt.gz');

// creates a transform stream (both readable/writable)
// everytime a chunk is sent to it, it compresses that chunk
  // can also pipe its output to another writable stream
var gzip = zlib.createGzip();
// changes data to compressed version

// duplex (pipe into anothe pipe)
readable.pipe(writable)

// CHAINING PIPE METHODS...
// pipe will send readable chip to writable stream
  // gzip will transform that 
  // gzip is also readable
  // pipe func will return what we give to it, so can call .pipe
readable.pipe(gzip).pipe(compressed);
// read from greet.txt, every chunk will pipe to -> gzip, gzip will pipe every chunk to -> compressed
// stream -> stream -> stream

// NODE WAY OF THINKING OF DATA --> STREAMS
// as long as stream is implemented properly, handles a chunk of data at a time, 
// can read/write/pipe data wherever we want from stream to stream