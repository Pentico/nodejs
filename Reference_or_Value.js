/**
 * Created by Tuane on 2016/09/11.
 */
// pass by value
function change(a) {
    b =2;
}

var a = 1;
change(a);
console.log(a);


// pass by reference
function changeObh(d) {
    d.prop1 = function () {

    };
    d.prop2 = {};

}

var c = {};
c.prop1= {};
changeObh(c);
console.log(c);
