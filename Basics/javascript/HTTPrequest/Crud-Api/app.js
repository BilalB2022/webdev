//  Comments Application

const InputUsername = document.getElementById('username')
const TextAreaComment = document.getElementById('comment')
const CommentList = document.getElementById('commentList')
const inputIndex = document.getElementById('inputIndex')

console.log(InputUsername);  // testing
console.log(TextAreaComment);

const AddCommentHandler = () =>{
    const obj = {
        username : InputUsername.value ,
        comment : TextAreaComment.value
    }
    fetch('http://localhost:3000/database/',{
        method : 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data,'saved')
    })
}

fetch('http://localhost:3000/database')
    .then(respons=>respons.json())
    .then(allcomments=>{
        allcomments.map(single_comment=>{
            // loop the array 
            console.log(single_comment);  // single object comment from the array
            CommentList.innerHTML += `<li class='list-group-item'>${single_comment.username} <br/> ${single_comment.comment}</li>`
        })
    })


const DeleteOne = () => {
    console.log(inputIndex);
    const ID = inputIndex
    fetch(`http://localhost:3000/database/${ID}`,{
        method : "DELETE"
    })
    .then(()=>{
        console.log('data is deleted');
    })
}

const UpdateOne = () => {
    const ID = inputIndex.value
    const NewComment = {
        username:'root',
        comment:'This is a new comment'
    }
    fetch(`http://localhost:3000/database/${ID}`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(NewComment)
    })
        .then(res=>res.json())
        .then(update=>console.log('update',update))
}

const DeleteAll = () => {
    
    fetch(`http://localhost:3000/database/`)
    .then(res=>res.json())
    .then(data=>{
        // loop the array here
        data.forEach(comment=>{
            console.log(`Delete ${comment.id}`)
            // send delete request for each object's id
            // comment is an object in the loop
            // id prop of comment > comment.id
            fetch(`http://localhost:3000/database/${comment.id}`,{
                method:'DELETE',
            })
            .then(()=>{
                console.log('done !');
            })
        })
    })
}
//  test > change html content of ul list 
