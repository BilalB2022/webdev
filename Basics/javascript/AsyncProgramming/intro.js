async function IPromise(name){
    let res = await name
    return res
}

IPromise('Soldier')
.then(data=>{
    return data
})
.then(data=>{
    // another task
    console.log(data)
})
