/* Exercise 3 functions */

// 1. Create a function called "add" that takes two arguments (parameters named "first" and "second") and returns their sum.

const add = (first,second) => {
    return first + second
}

console.log(add(5,6))

// 2. Create a function called "subtract" that takes two arguments (parameters named "first" and "second") and returns their difference.

const subtract = (first,second) => {
    return first - second
}

console.log(subtract(15,5));

// 3. Create a function called "multiply" that takes two arguments and returns their product.

const multiply = (n1,n2) => {
    return n1 * n2
}

console.log(multiply(3,3));

// 4. Create a function called "divide" that takes two arguments and returns their quotient.

const divide = (n1,n2) => {
    return n1 / n2
}

console.log(divide(9,3));

// 5. Create a function called "calculate" that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).


const calculate = (num1,op,num2) => {
    const result = `${num1} ${op} ${num2}`
    return eval(result)
}
console.log(calculate(1,'+',3));
// 6. Call the calculate function 4 times, each time using one of the operation functions you wrote

console.log(calculate(5,'+',4));
console.log(calculate(5,'-',1));
console.log(calculate(5,"*",2));
console.log(calculate(10,'/',2));

// 7. Create a function called "printDay" that takes one argument (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday etc.)

const printDay = (n1) => {
    switch(n1) {
        case 1 :
            console.log("monday");
    }
    switch(n1) {
        case 2 :
            console.log("tuesday");
    }
    switch(n1) {
        case 3 :
            console.log("wednesday");
    }
    switch(n1) {
        case 4 :
            console.log("thursday");
    }
    switch(n1) {
        case 5 :
            console.log("friday");
    }
    switch(n1) {
        case 6 :
            console.log("saturday");
    }
    switch(n1) {
        case 7 :
            console.log("sunday");
    }
    return printDay
}

console.log(printDay());