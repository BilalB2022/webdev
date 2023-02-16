// Call methode 
const obj1 = {
    number1:3,
    number2:4
}

const obj2 = {
    number1:4,
    number2:6
}

const obj3 = {
    a:7,
    b:8
}

function GetSumOfNumber(){
    // console.log(this.number1 + this.number2);
    console.log(this);
    // const getProps = Object.keys(this)           ////// To take only the properties
    // const getProps = Object.values(this)         ////// To take only the values
    // console.log(getProps);
}

// GetSumOfNumber.call(obj3)

// bind 
// const getBindMethodResult = GetSumOfNumbers.bind(4,5) // no args list
// const getBindMethodResult = GetSumOfNumbers.bind([4,5,6]) // working
// const getBindMethodResult = GetSumOfNumbers.bind({a:1,b:2,c:3})
// console.log(getBindMethodResult())

// const student = {
//     fullname:'Michael Jackson',
//     PrintInfo:function(){
//         return this.fullname
//     }
// }

// const result = student.PrintInfo.bind({fullname:'John Wick'})
// console.log(result())


// const student = {
//     fullname:'Neo',
//     PrintInfo:()=>this.fullname
// }

function PrintInfo(){
    return this.fullname
}

const result = PrintInfo.bind({fullname:'Trinity'});

// Arrow function .bind()
// .bind()

console.log(result())