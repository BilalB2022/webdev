var students = ['Ara','Bilal','Mohammed','Ahmad','Nina','Prince','Zana','Serine','Axel'];

var result;

// toString() 
result = students.toString() // string data type

// join() => return string data 
result = students.join("~")

// push() => Add new value into array
students.push('John') // string data type
students.push(true) // boolean data type
students.push(20) // number data type
students.push({
    id:1,
    name:"jimmy"
});

// pop() => remove last value/item from array list

students.pop()

// shift() =>  remove first value/item from array list
students.shift()

// unshift() =>  
students.unshift('Ara') // insert value at begining of array/// => first item

// update array list item
students[0] ='Arhisa'

// length - size of arraylist
result = students.length

delete students[9]
result = students;

// concat();
var n1=[1,2,3];
var n2=[4,5,6];
console.log(n1.concat(n2))
// var str1="hello";
// var str2="world";
// console.log(str1.concat(str2))
// students.splice(8,4,"New Student name")
students.push("John Doe")
students.push("Michael")
// students.splice(6,6,"Hello World")

// students.splice(5,3);
result = students

// slice
let newArrayList = students.slice(4,7);
result = newArrayList
// reverse
result = newArrayList.reverse()
console.log(result);

// sort()
result = students.sort()
console.log(result);

var numbers = [5,8,22,44,788,22,0,2,1];
result = numbers.sort(function(x,y){
    return x-y
})

// forEach method
students.forEach(function(value,index){
    console.log(`ID: ${index}\nValue: ${value}`)
})

console.log(`Result is\n${result}\ntypeof data is ${typeof result}`)
// console.log(students[12]);

// map()

students = ['Ahmed','Mohamed' ,'Ali', 'Mehmed' , 'Arisha']

result = students.map(function(name){
    return name
})


// filter()

let scores = [33,44,55,66,77,88,99,33]

// result = scores.filter(scores => {
//     return scores > 100
// })

const allStudents = [{
        name:'John',
        score:44
    },
    {
        name:'Jimmy',
        scores:55
    },
    {
        name:'Michael',
        scores:66
    },
    {
        name:'Megan',
        scores:77
    }
]

// result = allStudents.filter((student) => {
//     return student.scores > 50
// })

// reduce()

result = scores.reduce((acc,val,init) => {
    console.log(`${acc} accu ${val} value init is ${init}`);
    return acc+val
})

// includes()

result = scores.includes(44)

// indexOf()

result = scores.indexOf(33,2
    )

console.log(result);