/**
 * Created by Tuane on 2016/09/11.
 */

// the Scope
var firstname = 'Jane';

// The function wrap make sure the variable firstName doesn't get changed
(function (firstName) {

    console.log(firstName);

}('Heroes')); // immediately  invoked

console.log(firstname);