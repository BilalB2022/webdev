// use fetch to retrive data from internet(url)
fetch('http://localhost:3000/database/')
.then(response=>{
    return response.json()
})
.then(data=>{
    data.map(todo=>{
        console.log(todo);
    })
})
