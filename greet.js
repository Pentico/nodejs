/**
 * Created by Tuane on 2016/09/10.
 * module: for Greeting and Goodbye ....
 */

var greet = function (){
    console.log('Alfred Morulane');
};

var goodbye = function () {
    console.log('Bye from Alfred Morulane');
};

// Returning Objects
var _Obj = {
    greet: greet,
    Bye: goodbye
};


module.exports = _Obj;