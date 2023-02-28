//  Comments Application

const InputUsername = document.getElementById('username')
const TextAreaComment = document.getElementById('comment')
const CommentList = document.getElementById('commentList')

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

//  test > change html content of ul list 
