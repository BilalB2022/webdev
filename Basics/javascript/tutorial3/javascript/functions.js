// const printMyname = () => {
//     //code here
//     console.log('hello function');
// }

// const printMyname = (name) => {
//     //code here
//     console.log(name);
// }

// printMyname(); //call back function
// printMyname('Bilal')
// printMyname('Mohamed')

// const salaryCalculator = (brutosalary) => {
//     var tax = 40
//     var res1 = brutosalary / 100 * tax
//     var res2 = brutosalary - res1
//     console.log(`Tax is ${res1} and my nettosalary is ${res2}`);
// }

// salaryCalculator(4000)

// const getSumOfNumbers = (n1,n2) => {
//     var result = n1+n2;
//     console.log(`Sum of these number is ${result}`);
// }

// getSumOfNumbers(25,3)

// const serverNumber1 = () => {
//     return
// } 

// const serverNumber2 = () => {
//     return 2;
// }

// const result = serverNumber1 + serverNumber2
// console.log(result);

// const getFirstName = ()=> {
//     return 'Michael'
// }
// const lastName = ()=> {
//     return 'jackson'
// }

///////////////////////////////////////////////////////////////////////////////
// const output = document.getElementById('output')

// const add = () => {
//     return `Test value`
// }

// console.log(add())

// output.innerHTML = "<h1>ufdshudsfudsfiuhfds</h1>"

// let users = []

// const createAccoount = (username,password,email,role) => {
//     const obj = {
//         user: username,
//         pass: password,
//         email: email,
//         App_Role: role
//     }
//     return users.push(obj)
// }

// createAccoount('beki','berry5','carry@hotmail.be','master' )
// createAccoount('corri','ornito78','ornito@live.be','teamleader')
// createAccoount('polo','paragraphe78','polotarri8@live.be', 'customers')

// console.log(users);

// let users = []

// const sendAndSaveObj = (obj) => {
//     // this function save userdata in database 
//     // console.log(obj);
//     return users.push(obj)
// }
// const makeAccount = (obj) => {
//     // this will take user object data 
//     return sendAndSaveObj(obj)
// }

// const user1 = ({
//     user: 'root'
// })
// makeAccount({
//     user: 'root'
// })
//  console.log(users);

let arr = []
const newContact = (name,phone,email) => {
    const obj = {
        name: name,
        phone: phone,
        email: email
    }
    return arr.push(obj)
}


users('Billy','04895235','ajyfkz@live.be')
console.log(arr);