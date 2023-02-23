
// Ecmascript 5 /* 

// function Keeper1(callback){
//     console.log('Keeper1'); 
//     return callback()
// }

// function Keeper2(callback){
//     console.log('Keeper2'); 
//     return callback() 
// }


// const GetMyFunction = (callback) => {
//     callback() // this param need to be a function
// }

// GetMyFunction(()=>{
//     console.log('hello');
// })

// let company = ""

// one of the tasks

// Ecmascript v5 

// const CreatCompanyName = (data,callback) => {
//     // data = 'Coffee'  // changed value to coffee
//     return callback(data,callback)
// }

// const ToUpperCase = (str) => {
//     console.log(str.toUpperCase());
// }
// CreatCompanyName("coffee",(data)=> {
//     return ToUpperCase(data, (data) => {
//         console.log(data);
//     })
// })

// async function Keeper1(name) {                                             \\\\ regular async function ////
//     // await
//     const getName = await name
//     return getName
// }

// // Keeper1('Coffee')
// // .then(data =>{
// //     console.log(data);
// //     let newValue = data.toUpperCase()
// //     return newValue
// // })
// // .then(data => {
// //     console.log(data);
// // })

// Keeper1("Bilal")
// .then(b=>b.toUpperCase())
// .then(a=>a.split(''))
// .then(c=>{
//     console.log(c);
// })

const PrintWelcomeMessage = async msg => {                                   // \\\\ arrow async function ////
    try {
        let data = await msg  // await for msg data
    //    throw Error()  // for forcing try catch block to print error
        return data
    } catch (error) {
        console.log(error,"something goes wrong !!!!");
    }
}


// Catch block 

const ChangeToUpper = (str) => {
    let changing = str.toUpperCase()
    console.log(changing);
    return changing
}

PrintWelcomeMessage('Hello')
.then(x => {
    let newValue = x += ' World'
    return newValue
})
.then(ChangeToUpper)
.catch(error=>console.log(error))  // handle
.finally(()=>{
    console.log('I\'m done');
})

