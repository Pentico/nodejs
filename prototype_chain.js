/**
 * Created by Tuane on 2016/09/11.
 */

var Person = {
    firstName: '',
    lastName:'',
    greet: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

// Prototype of john is Person.
var john = Object.create(Person);

john.firstName = 'John';
john.lastName = 'Doe';


var jane = Object.create(Person);

jane.firstName = 'Jane';
jane.lastName = 'Doe';
jane.hero  = function(){
   console.log('well');

    return 'I see now';
};

console.log(john.greet());
console.log(jane.greet());
console.log(jane.hero());

