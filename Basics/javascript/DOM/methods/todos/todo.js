const DeleteItem = document.querySelector('.delete-item')

console.log(DeleteItem);
console.log(DeleteItem.parentElement);
console.log(DeleteItem.parentElement.parentElement);
console.log(DeleteItem.parentElement.parentElement.parentElement);
console.log(DeleteItem.parentElement.parentElement.parentElement.parentElement);
console.log(DeleteItem.parentElement.parentElement.parentElement.parentElement.parentElement);
console.log(DeleteItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
console.log(DeleteItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement); // body
console.log(DeleteItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement); //nul

//  document.body.remove()

// DeleteItem.remove()

const ListOfTodos = document.querySelector(".list-group")
// while (ListOfTodos.children.length>0) {                  // For deleting all the li's (the childs)
//     ListOfTodos.children[0].remove()
// }
console.log(ListOfTodos.firstElementChild);
console.log(ListOfTodos.lastElementChild);

const buttons = document.querySelectorAll("button")
console.log(buttons);
console.log(buttons);