// const printMyname = () => {
//     //code here
//     console.log('hello function');
// }

const printMyname = (name) => {
    //code here
    console.log(name);
}

printMyname(); //call back function
printMyname('Bilal')
printMyname('Mohamed')

const salaryCalculator = (brutosalary) => {
    var tax = 40
    var res1 = brutosalary / 100 * tax
    var res2 = brutosalary - res1
    console.log(`Tax is ${res1} and my nettosalary is ${res2}`);
}

salaryCalculator(4000)

const getSumOfNumbers = (n1,n2) => {
    var result = n1+n2;
    console.log(`Sum of these number is ${result}`);
}

getSumOfNumbers(25,3)
