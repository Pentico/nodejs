
var Emitter = require('./Emitter');

var emr = new Emitter();

emr.on('greet', function () {
    console.log('Somewhere, Someone said Hello');
});

emr.on('greet',function () {
    console.log('A greeting occured');
});

console.log('Hello');
emr.emit('greet');