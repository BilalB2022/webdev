// let PromiseMe = username => {
//     return new Promise((resolve,reject)=> {
//         // resolve(username)
//         if(username.includes(0)){
//             reject('Number can not be included in username')
//         }else{
//             resolve(username)
//         }
//     })
// }


let Promisetwo = username => {
    return new Promise((resolve,reject) => {
        if (username.includes(0)){
            reject('Number can not be included username')
        }else{
            resolve(username)
        }
    })
}
Promisetwo('Admin0')
.then(data=>{
    console.log(data);
})
.catch(error=>console.log(error))