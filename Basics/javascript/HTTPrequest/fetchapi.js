// // use fetch to retrive data from internet(url)
// fetch('http://localhost:3000/database/')
// .then(response=>{
//     return response.json()
// })
// .then(data=>{
//     data.map(todo=>{
//         console.log(todo);
//     })
// })
fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res=>{
        return res.json();
    })
    .then(res=>console.log(res))
    .then(datas=>{
        datas.map(data=>{
        console.log(datas[data].title)
    })
})
