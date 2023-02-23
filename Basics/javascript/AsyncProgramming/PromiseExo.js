// let PromiseUsers1 = new Promise((resolve,reject)=> {
//     resolve([1,2,3])
// })

// let PromiseUsers2 = new Promise((resolve,reject)=>{
//     resolve([4,5,6])
// })

// let GetResult = Promise.all([PromiseUsers1,PromiseUsers2])

// GetResult.then(allData=>{
//     console.log(allData.flat(2));
//     // an other way to take off nested arrays  with fist toString() and after split()
// })
const GetNewsData = (site) =>{
    return new Promise((resolve,reject)=>{
    if(site!='' && site!==null){
        resolve(site)
    }else{
        reject(`${site} is not online.`)
    }
})
}

GetNewsData('')
.then(news=>{
    console.log(news);
})
.catch(err=>console.log(err))