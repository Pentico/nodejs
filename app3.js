/**
 * Created by Tuane on 2016/09/11.
 */
var obj = {
    name : 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}`);

    }
};

obj.greet();
obj.greet.call({name:'Jane Doe'}); // change this keyword to the obj i passed in
obj.greet.apply({name:'Heroes me'}); // Change this keyword of the function am calling to this