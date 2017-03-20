// typed arrays

// byte = 8 bits
  // storing raw binary data
var buffer = new ArrayBuffer(8);

// typed array; way to deal w/ binary data in buffer
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);