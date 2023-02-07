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

// Blog CMS crud

// 1. Create an array 
const users = [{
    username : 'admin',
    password : 'azerty',
    id: 1,
}]
const posts = []

// 2. Create a function that can add new user if username is not exist

const AddNewUser = user => {
    let userIndex = 0
    let found = users.map(single_user=>single_user.username === user.username)
    console.log(found);
    if(found.includes(true)){
        console.log('user is exist');
    }else{
        console.log('add new user')
        userIndex = users[users.length-1].id
        userIndex++
        user.id = userIndex
        users.push(user)

    }
}

AddNewUser({
    username:'memory',
    password:'carré'
})
console.log(users);
// 3. Create a function that can login user if user username and password is exist and correct 

const UserAuthentication = (user) => {
    let isLoggedIn = users.filter(single => single.username === user.username && single.password === user.password)
    return isLoggedIn.length !== 0? true: false
}

console.log(UserAuthentication({
    username:'atlla',
    password:'carré'
}))

// 4. Create a function that can create new post if user is login

const CreatePost = (post,userdata) => {
    let isLoggedIn = UserAuthentication(userdata)
    if(isLoggedIn){
        posts.push(post)
    }else{
        console.log('User is not logged in please logged in ');
    }
}

CreatePost({
    title:"Lommel",
    body:'this is new post data'
},{
    username:'memory',
    password:'carré'
})

console.log(posts);
// 5. Create a function that can delete post if user is login

// 6. Create a function that can fetch all posts.