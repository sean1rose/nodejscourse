// core modules using require
var util = require('util');

var name = 'Sean';
var greeting = util.format('Hello, %s', name);
util.log(greeting);