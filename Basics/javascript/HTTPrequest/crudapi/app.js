const UserNameInput = document.getElementById('username')
const CommentInput = document.getElementById('comment')
const ListComms = document.getElementById('listComments')

console.log(ListComms);

const AddCommentHandler = () => {
    const obj = {
        username : UserNameInput.value,
        comment : CommentInput.value
    }
    fetch('http://localhost:3000/database',{
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data,'ok');
    })
}
    

fetch('http://localhost:3000/database')
    .then(res=>res.json())
    .then(allcomments=>allcomments.map(single_comment=>{
        console.log(single_comment);
        ListComms.innerHTML += `<li class='list-group-item'>${single_comment.username}  --  ${single_comment.comment}</li>`
    }))