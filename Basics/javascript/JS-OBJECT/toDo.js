
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')

// todoList.innerHTML = 'zert'
// todoInput.value = 'dtzthdg;jye'

// function todoAppliction(title){
//     this.todotitle = title
//     this.todos = []
//     this.addTodo = function(){
//         return this.todos.push(this.todotitle)
//     }
// }

// // create-intit an object using todoAppliction constructor 
// const app = new todoAppliction('React js')

function TodoApplication(){
    this.todos = []

    this.addTodo = function(title){
        return this.todos.push({title})
    }

    this.displayTodos = function(){
        todoList.innerHTML = ""  // to make it clean before re-use
        this.todos.map(todo => {
            console.log(todo);
            todoList.innerHTML += `<li class="list-group-item" >${todo.title}</li>`
        })
    }

    this.ClickHandler = function(){
        console.log('carry on hello wold');
        console.log(todoInput.value);
        if(todoInput.value !== ''){
            this.addTodo(todoInput.value) // step 1 insert it
        }  
        this.displayTodos()  //step 2 print them all 
        todoInput.value = "" // step 3
    }
}

todoInput.addEventListener('keydown',(e) => {
    if(e.code ==='Enter') {
        app.ClickHandler()
    }
})

const app = new TodoApplication()
// app.addTodo('learn js')
// app.addTodo('node.js')
// app.addTodo('react js')
// app.addTodo('learn C++')
// app.displayTodos()
