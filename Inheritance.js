/**
 * Created by Tuane on 2016/09/11.
 */

'use strict';

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(){
        console.log("Hello, " +this.firstName + " " + this.lastName);
    }
}

/*//!*!/ Function Constructor
function Person(firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;

}*!/*/

/*Person.prototype.hello = function () {
    console.log("Hello, " +this.firstName + " " + this.lastName);

};*/

//  Object
var john = new Person('John', 'Doe');
console.log(john.lastName);
john.greet();

var silver = new Person("silver", "Heroes");
silver.greet();

console.log(john.__proto__);
console.log(silver.__proto__);

console.log(silver.__proto__ ===john.__proto__);