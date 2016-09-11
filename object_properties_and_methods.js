/**
 * Created by Tuane on 2016/09/11.
 */

var obj = {
    greet:'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);


// function and arrays

var arr = [];


arr.push(function () {
    console.log('Hello woirld 1');
});

arr.push(function () {
    console.log('Hello woirld 2');
});
arr.push(function () {
    console.log('Hello woirld 3');
});

arr.forEach(function (item) {
    item();
});