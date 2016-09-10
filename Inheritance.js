/**
 * Created by Tuane on 2016/09/11.
 */

// Function Constructor
function Person(firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.hello = function () {
    console.log("Hello, " +this.firstName + " " + this.lastName);

};

//  Object
var john = new Person('John', 'Doe');
console.log(john.lastName);
john.hello();

var silver = new Person("silver", "Heroes");
silver.hello();