// Todolist Application exercise

// 1. Create a new todo list
// 2. Add a new todo item
// 3. Remove a todo item

// What is a todo list?
// A todo list is a list of tasks that need to be completed.

// What is a todo item?
// A todo item is a single task that needs to be completed.

// What you require to complete this exercise: 

// 1 . Required array, string and number methods and properties: 
// - push
// - splice
// - findIndex
// - toLowerCase
// - trim
// - length
// - includes
// - indexOf
// - slice



// what you'll do in each step

// 1. Create a new todo list
// - Create a new array
// - Create a new object
// - Add the object to the array

// 2. Add a new todo item
// - Create a new object
// - Add the object to the array

// 3. Remove a todo item
// - Find the index of the object in the array
// - Remove the object from the array

// 4. Edit a todo item
// - Find the index of the object in the array
// - Update the object in the array

// 5. Delete a todo list
// - Find the index of the object in the array
// - Remove the object from the array

// 6. Display all todo lists
// - Loop through the array
// - Display the object

// 7. Display a todo list
// - Find the index of the object in the array
// - Display the object
/*
{ // This is single todo model object
    todo:'javascript',
    completed:false
}
*/
let todos = []

function addTodo(todo) {
    // add new todo
    return todos.push(todo)
}

function removeTodo(todo) {
    // remove a todo
    let IndexOfTodo = todos.findIndex(function (singleTodo) {
        return singleTodo.todo === todo
    }) // find index(array position number) of single todo object by property value 
    // console.log(todo,IndexOfTodo)
    return todos.splice(IndexOfTodo, 1) // delete array item
}

function editTodo(todo, name, completed) {
    // edit todo
    let IndexOfTodo = todos.findIndex(function (singleTodo) {
        return singleTodo.todo === todo
    }) // find index(array position number) of single todo object by property value 

    if (name !== null && name !== '') {
        todos[IndexOfTodo].todo = name // name is function parameter value
    }

    if (completed !== null && completed !== '') {
        todos[IndexOfTodo].completed = completed
    }

    return todos[IndexOfTodo]
}

function displayTodos() {
    // all todos
    todos.forEach(item=>{
        console.log(`Title: ${item.todo}\nCompleted: ${item.completed}\n--------------------`)
    })

}

function displayTodo(isCompleted) {
    // single todo
    // isCompleted is function parameter
    // item.completed is object property 
    // isCompleted === item.completed 
    let NewTodos = todos.filter(item=>item.completed === isCompleted)
    console.log(NewTodos) // returns one or many todos by property value (completed) > filtered data
    return NewTodos
}

addTodo({
    todo: 'javascript',
    completed: false
});
addTodo({
    todo: 'react.js',
    completed: false
});
addTodo({
    todo: 'node.js',
    completed: false
});
addTodo({
    todo: 'html',
    completed: true
});
addTodo({
    todo: 'css',
    completed: true
});

//removeTodo('react.js')
editTodo('react.js', '', true)

displayTodos()
displayTodo(true)