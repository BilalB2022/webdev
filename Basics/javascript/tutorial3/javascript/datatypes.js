var result;

// primitives data types 

// string 
var fullname = 'michael'

result = typeof fullname
console.log(result);

// number datatypes 

var result = 10;


// boolean data types 
result = true;
result = false;

// undefined datatypes 
result = undefined

// nul
result = null

// console.log(null+5) 
console.log(Number(undefined));


// object 
result = ['a','b','c',1,2,3]
result = {
    name : "mickael" //object
}

//function
function getName () {
    return "blabla"
}
console.log(getName ())

class Application {
    getName(){
        return "blabla"
    }
}

const app = new Application()

result = Application //function
result = app // object

result = new Date()
result = Math

console.log(`${result} , typeof this data is ${typeof result}`);
