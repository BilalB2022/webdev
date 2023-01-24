// Comparison operators
var n1 = 5
var n2 = 6
var n3 = 5
var n4 = "5"
// Equal to (==) Variable value
/* console.log(n1==n2);
console.log(n1==n2); */

// Equal to (===) Var value and var typeof
// console.log(n1 == n4); // controle value only
// console.log(n1 === n4); // controle value and data type (typeof)

// // Not Equal to operator (!=)
// console.log(n1!=n2);

// Not Equial operator with dubble equal symbol (!==) // controle value controle type 
// console.log(n1!==n4);

// greater than (>)
// console.log(n2>n1);
// console.log(6>5);

// // less than (<)
// console.log(n3<n2);

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// const filterNum = numbers.map(number => {
//     number %2 === 0 ? console.log(`number ${number} is even`) : console.log(`number ${number} is odd`);
// })

// var isAdmin = false;

// const isLoggedIn = isAdmin ?`you are not allowed` : 'you\'re allowed' 

// console.log(isLoggedIn);

var articles = []

let result = articles.length > 0 ? articles.map(item => console.log(item.title)) : `Data is loading ....` //propose is validation when you'v a delay and no data in array

console.log(result);

//  (condition) ? TRUEMESSAGE : FALSEMESSAGE

var x = false;
var y = true;
result = x ? y ? "Y is true" : "Y is false" : "X is false"
// result = x || y ? console.log("X is true and Y is also true!!") : console.log("False none of them is true")
console.log(result)
if (x) {

} else if (y) {

} else {

}

var _name = "atilla"


if(_name ==="atilla"){
    // do something
}else if(_name==="mohammad"){
    // do something else
}else if(_name==="ahmad"){
    // do another thing
}else{
    // do the default task
}
