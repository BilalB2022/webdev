// CRUD Application 
// create data in database 
// delete data by id in database
// update data by id in database

/*
fullname,username,email,password
*/

// let users = [];

// const AddNewUser = newUser=>{
//     let id = 0;
//     if(users.length === 0){
//         id++
//         newUser.id = id
//         users.push(newUser)
//         // console.log(newUser);
//     }else{
//         id = users[users.length -1].id
//         console.log(`position index number ${users.length-1}`);
//         id++
//         newUser.id = id
//         users.push(newUser)
//         // console.log(id);
//     }
//     // insert new object
// }

// AddNewUser({
//     fullname:'John Doe',
//     username:'john',
//     email:'john@john.com',
//     password:'john123'
// })
// AddNewUser({
//     fullname:'John Doe 2',
//     username:'john 2',
//     email:'john@john.com2',
//     password:'john1232'
// })

// const DeleteUserById = id => {
//     let findUser = users.findIndex(user => {
//         return user.id === id
        
//     })
//     if(findUser !== -1){
//         users.splice(findUser,1)
//     }else{
//         console.log("user not found");
//     }
//     console.log(findUser);
// }

// const UpdateUserById = (id,prop,newData) => {
//     const userIndex = users.findIndex(user => user.id === id) 
//     console.log(users[userIndex]);
    
//     if(userIndex !== -1) {
//         users[userIndex][prop] = newData
//     }else(`data not found`)
// }

// UpdateUserById(1,'email','cora@live.be')
// console.log(users);

