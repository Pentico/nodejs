
var Emitter = require('events');
var eventConfig = require('./config').events;

var emr = new Emitter();

emr.on(eventConfig.GREET, function () {
    console.log('Somewhere, Someone said Hello');
});

emr.on(eventConfig.GREET,function () {
    console.log('A greeting occured');
});

console.log('Hello');
emr.emit(eventConfig.GREET);