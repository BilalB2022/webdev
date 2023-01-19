// Exercises combine string and array methods
// to solve puzzles.

// 1. write a function that changes letters to utf-16
let letters = "abcdefghijklmnopqrstuvwxyz";

// .fromCharAt()
function ConvertLettersToUtf16(str){ // 
    // convert str data to arraylist
    let arr = str.split("") // string method
    const encoded= []
    // loop the array forEach() // array method
    arr.forEach(function(letter){
        encoded.push(letter.charCodeAt())
    })
    return encoded
}


// console.log(ConvertLettersToUtf16(letters));

// 2. write a function that converts utf-16 to letters

let msg = [
    70, 111, 108, 108, 111, 119,
    32, 116, 104, 101,  32, 119,
   104, 105, 116, 101,  32, 114,
    97,  98,  98, 105, 116,  46
 ]

function DecodeUtf16Chars(arr){
    // arraylist
    let message = ""
    // let result = String.fromCharCode(arr)
    arr.forEach(function(letter){
        // console.log(String.fromCharCode(letter))
        message+=String.fromCharCode(letter)

    })
    return message;
}

/*
let str = "atilla"
a
t
i
l
l
a
*/

console.log(DecodeUtf16Chars(msg))

// string methods exercises





let students =[];

/*
full_name:"John Doe"
age: 20
email: "johndoe@microsoft.com"
phone: "123-456-7890
address: "123 Main St.
*/

// 3. write a function that adds a student to the students array and displays the students array

const addStudent = (obj) => {
    students.push(obj)
    return students
}

let student1 = addStudent({
    id:1,
    name:'Michael Jakson',
    email:'michael@microsoft.com'
})

let student2 = addStudent({
    id: 2,
    name:'Jannet Jakson',
    email:'Jannet@microsoft.com'
})

console.log(student2);

// 4. write a function that encode a string to base64
// what is base64? and what method do you use to encode a string to base64 in javascript?
// https://developer.mozilla.org/en-US/docs/Web/API/atob => Read this
// https://www.base64encode.org/


// Encrypt code

// const encryptString = (str) => {
//     let encoded = atob(str)
//     console.log(encoded);
// }

// // Decrypte code 

// const DecrypteString = (encoded) => {
//     let decoded = btoa(encoded)
//     console.log(decoded);
// }

const baseTool = {
    encrypt: str => {
        let encoded = btoa(str);
        console.log(encoded)
        },
    decrypt: str => {
        let decoded = atob(str);
        console.log(decoded)
    }
}

baseTool.encrypt("bilal was here")
baseTool.decrypt("YmlsYWwgd2FzIGhlcmU=")



// Solve the puzzles and submit your code to github or codepen


let names = "john, peter, mary, susan, john, mary";

// 5. 3 functions that convert a string to an array, sort the array and display the array in the <ul id="result"></ul> element when the button is clicked
// DisplayArray(SortArray(ConvertStringToArray(names)))

const convertStringToArray = (str) => {
    let arr = str.split(',');
    let names = []
    arr.forEach(function(name){
        names.push(name.trim())
    })
    return names
}
const sortArray = (data) => {
    return data.sort()
}
const output = document.getElementById('result')
const displayArray = (data) => {
    output.innerHTML = ""
    data.forEach(function(name){
        output.innerHTML += `<li>${name}</li>`
    })
}

const clickHandler = () => {
    alert("message is comming")
    displayArray(sortArray(convertStringToArray(names)))
}
