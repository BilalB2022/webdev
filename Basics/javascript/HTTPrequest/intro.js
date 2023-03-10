/*
Fake backend in local computer
COMMAND > json-sever data.json --watch
--watch => hot reloaded
*/
// HTTP - GET request
// fetch('http://localhost:3000/database')
//     .then(res=>res.json())
//     // .json() > method that can convert data into 
//     .then(jsondatas=>jsondatas.map(jsondata=>{
//         console.log(jsondata.title)
//     }))

//     //  read a txt file
//     fetch('readme.txt')
//         .then(res=>res.json())
//         .then(txtcontent=>{
//             console.log(txtcontent);
//         })

// GET request for single object
// /database3/
// fetch('http://localhost:3000/database/1')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data,'url param');
//     })

// //  url param dns.com/blog/34
// //  ul query dns.com/blog?title

// fetch('http://localhost:3000/database/?title=javascript')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data,'url query');
//     })


//  Use fetch in async function !!!!!!!!!!!!!!!

//   METHOD "GET" DON'T NEED SECONDE ARGUMENT IN FETCH

const GetData = async (id) => {
    let response = await fetch('http://localhost:3000/database/' + id)
    let data = response.json()
    return data
}

// GetData(2)
//     .then(mydata=>console.log(mydata))

const DataID = document.querySelector("#data_id")
const Output = document.getElementById('output')

const ClickHandler = () => {
    GetData(DataID.value)
        .then(mydata => {
            Output.innerHTML += `<li>Title:${mydata.title}<br/>Body:${mydata.body}</li>`
        })
}
const newData = {
    title: 'Python',
    body: 'python is easy language'
}

//   METHOD "POST" NEED SECONDE ARGUMENT IN FETCH

const AddClickHandler = () =>{
    fetch('http://localhost:3000/database', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(newData)
        })
        .then(data => {
            console.log(data, 'Saved');
        })
}

//   METHOD "DELETE" WITH SECONDE ARGUMENT IN FETCH

const DeleteHandler = () =>{
    console.log('testing');
    //  DELETE Request
    fetch('http://localhost:3000/database/' + DataID.value,{
        method:"DELETE"
    })
    .then(()=>{
        console.log('deleted');
    })
}

const newObjectData = {
    title:"golang",
    body:"This so cool"
}

//   METHOD "PATCH" FOR UPDATE DATA , WITH SECONDE ARGUMENT IN FETCH

const UpdateHandler = () =>{
    fetch('http://localhost:3000/database/' + DataID.value, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
            //  sets content type that what data are you sending to machine
        },
        // new json data will be stored in body prop's value as string data type
        body:JSON.stringify(newObjectData) //always as string
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}