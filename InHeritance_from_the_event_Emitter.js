/**
 * Created by Tuane on 2016/09/11.
 */

var eventEmiiter = require('events');
var util =  require('util');

function greetr() {
    this.greetting = 'Hello World';
}

util.inherits(greetr, eventEmiiter); // greetr gets the methods of eventEmitter i.e Inheriance via prototypes

greetr.prototype.greet = function (data) {
    console.log(this.greetting + ' ' + data);
    this.emit('greet',data);

};

var greeter1 = new greetr();
greeter1.on('greet',function (data) {
    console.log('Someone greeted! ' + data);
});

greeter1.greet('Heroes');
