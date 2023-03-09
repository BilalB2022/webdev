// Find parentElement<dom prop>

const DeleteItem = document.querySelector('.delete-item');

// console.log(DeleteItem)
// console.log(DeleteItem.parentElement)
// console.log(DeleteItem.parentElement.parentElement)
// console.log(DeleteItem.parentElement.parentElement.parentElement)

// document.body.remove()


// DeleteItem.remove()

const ListOfTodos = document.querySelector('.list-group');

// console.log(ListOfTodos.children.length)

// console.log(document.body.children)

// console.log([1,2,3].length)
// while(ListOfTodos.children.length>0){
//     ListOfTodos.children[0].remove()
// }

console.log(ListOfTodos.firstElementChild)
console.log(ListOfTodos.lastElementChild)
// console.log(ListOfTodos.lastChild.remove())
// ListOfTodos.lastElementChild.remove()

const addTodo1 = document.querySelector('.btn.btn-danger')

// querySelector or querySelectorAll (accepts css selector)


const [addTodo,deleteAllTodos] = document.querySelectorAll('button')

const FirstForm = document.querySelector('.card-body > #todo-form')

console.log(FirstForm)
// find list-group-item (li tagname) 
const ToDoItem = document.querySelector('.list-group-item')
// clone of list-group-item (li)
const cloneOfToDoItem1 = ToDoItem.cloneNode(true)
const cloneOfToDoItem2 = ToDoItem.cloneNode()
console.log(cloneOfToDoItem1.hasChildNodes(),cloneOfToDoItem2.hasChildNodes());
cloneOfToDoItem1.childNodes[0].textContent = 'Javascript'
console.log(cloneOfToDoItem1.childNodes);
ListOfTodos.appendChild(cloneOfToDoItem1)
// ListOfTodos.appendChild(cloneOfToDoItem2)

// DOMString 
let parser = new DOMParser();
let ConvertDomString = parser.parseFromString(`<li class="list-group-item d-flex justify-content-between">
Todo 1
<a href = "#" class ="delete-item">
    <i class = "fa fa-remove"></i>
</a>
</li>`,'text/html')

// alternative way of parse domstring
// createContextualFragment
let parser1 = document.createRange().createContextualFragment(`<li class="list-group-item d-flex justify-content-between">
nodejs
<a href = "#" class ="delete-item">
    <i class = "fa fa-remove"></i>
</a>
</li>`)

// console.log(RealNodeObject.body.firstChild)
// console.log(parser1)

// append()
// ListOfTodos.append(RealNodeObject.body.firstChild)
// ListOfTodos.append(parser1)
ListOfTodos.append(ConvertDomString.body.firstChild,parser1)

// .style property
ListOfTodos.lastElementChild.style.backgroundColor="tomato";
ListOfTodos.lastElementChild.style.color="white"

// font size
ListOfTodos.lastElementChild.style.fontSize
="3em"
console.log(ListOfTodos.lastElementChild.style)



ListOfTodos.childNodes[ListOfTodos.childNodes.length-2].style.backgroundColor="cyan";

console.log(ListOfTodos.childNodes.length-2)

// background-color: salmon; color:white;font-size: 3em;
ListOfTodos.childNodes[ListOfTodos.childNodes.length-3].setAttribute('style','background-color: salmon; color:white;font-size: 3em;')

console.log(ListOfTodos.lastElementChild)

// setTimeout()
setTimeout(()=>{
    ListOfTodos.lastElementChild.remove()
},5000)


// setInterval()
const removeOne = setInterval(()=>{
    console.log('this is ')
},1000)