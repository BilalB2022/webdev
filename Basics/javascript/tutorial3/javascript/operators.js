// Javascript operators 

// Assignment operator (=) 

var name = 'Ahmed';
const age = 25;

// Addition operator (+) 
var number1 = 5;
var number2 = 6;
var getSumOfNumbers = number1 + number2

var firstname = 'John ';
var lastname = 'Doe';
var fullname = firstname + lastname
console.log(`My complete name is ${fullname}`);
console.log(typeof firstname);

var n3 = 5 ;
var n4 = 5 ;
var result = n3 * n4
console.log(result);

//substarction operator (-)

var n1 = 10 ;
var n2 = 6 ;
var result = n2 - n1 ; 
console.log(result);

// + - * /

var brutosalary = 3000 ;
var tax = 40
var res1 = brutosalary / 100 * tax
var res2 = brutosalary - res1
console.log(`Tax is ${res1} and my nettosalary is ${res2}`);

var agePerson = 30 ;
// Increament operator (++) 
agePerson++ // increase +1 first way
agePerson = agePerson + 1 // increase +1 second way

// Decrement operator (--) 
agePerson--;
agePerson = agePerson -1 // decrease -1

console.log(agePerson);

var firstname = "Michael " ;
var lastname = "Jackson";

var fullname = firstname+=lastname
console.log(`His complete name is ${fullname}`);
