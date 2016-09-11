/**
 * Created by Tuane on 2016/09/11.
 */

var util = require('util');

function Person() {
    this.firstName = 'John';
    this.lastName  = 'Doe';

}

Person.prototype.greet = function () {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);

};

function Policeman() {
    Person.call(this);
    this.badgenumber = '1234';

}

util.inherits(Policeman, Person);
var Officer = new Policeman();
Officer.greet();