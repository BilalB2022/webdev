const obj1 = {
    id:1
}

const isAdmin = new Boolean(false)
const Age = new Number(10)
const obj2 = new Object()
console.log(typeof isAdmin ,isAdmin);
console.log(typeof Age.valueOf(), Age);
console.log(typeof obj2);

// OOP 
// Object constructor 
obj1.username = 'hln.be'
console.log(obj1.username);
console.log(obj2);

const obj3 = {}
obj3.username = 'admin'
obj3.password = 'admin123'
obj3.email = 'root@root.com'

console.log(obj3);

// for(let key in obj3){
//     console.log(key);  // to print only de property of object (in this case 'obj3')
//     console.log(obj3[key]);  // to print only de values of property of the object (in this case 'obj3')
// }

const tools = {
    message:'Hello world',
    display: function() {
        return 'This is an function'
    },
    length: function() {
        return this.message.length
    },
    keys: function() {
        return'This is object methods'
    }
}

console.log(tools.length());
// console.log(Object.);