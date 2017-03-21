var fs = require('fs');
// file system. wraps up c++ code to deal w/ lower level files

// SYNCRONOUS
// can get data from the text file (can read from file on the file sys (binary data))
  // 1st arg: full path on my hard drive to the greet.txt file...
  // 2nd arg: specified encoding (utf8 is default), used to determine what characters 0s and 1s map to
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
  // sync means async -> syncrhonous method so that will wait til buffer is filled an has string back b4 moving on to next line of code...


// ASYNCRONOUS
  // error-first callback: callbacks take an error obj as their 1st paramater  see how the err obj is the 1st paramater in the callback func...
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  // async -> reads contents of file then takes a callback,
  // once libuv is done reading the file, then invokes this callback func
  console.log('data -> ', data);
    // ^that returns a buffer <Buffer 48 65 6c 6c 20 77 6f 72 6c 64 21>
    // to convert ^ to a string, pass in 'utf8' as 2nd parameter of readFile
});
