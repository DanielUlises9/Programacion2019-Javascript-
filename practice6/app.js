var greet2 = require('./greet2');
greet2.greet();

var greet2_v2 = require('./greet2').greet;
greet2_v2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello World!!4';

var greet3v = require('./greet3');
greet3v.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

greet5 = require('./greet5').greet;