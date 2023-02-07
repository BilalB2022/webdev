// CRUD Application 
// create data in database 
// delete data by id in database
// update data by id in database

/*
fullname,username,email,password
*/

let users = [{id:5}];

const AddNewUser = newUser=>{
    let id = 0;
    if(users.length === 0){
        id++
        console.log(id);
    }else{
        id = users[users.length -1].id
        id++
        console.log(id);
    }
    // insert new object
}

AddNewUser()