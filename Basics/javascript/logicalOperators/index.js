// Comparison operators
var n1 = 5
var n2 = 6
var n3 = 5
var n4 = "5"
// Equal to (==) Variable value
/* console.log(n1==n2);
console.log(n1==n2); */

// Equal to (===) Var value and var typeof
console.log(n1 == n4); // controle value only
console.log(n1 === n4); // controle value and data type (typeof)

// Not Equal to operator (!=)
console.log(n1!=n2);

// Not Equial operator with dubble equal symbol (!==) // controle value controle type 
console.log(n1!==n4);

// greater than (>)
console.log(n2>n1);
console.log(6>5);

// less than (<)
console.log(n3<n2);

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const filterNum = numbers.map(number => {
    number %2 === 0 ? console.log(`number ${number} is even`) : console.log(`number ${number} is odd`);
})
