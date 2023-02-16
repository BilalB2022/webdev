class TodoApplication{
    constructor(){
        this.database = []    // example of database
    }

        displayTodos(){
            return this.database
        }

        addTodo(todo){
            return this.database.push(todo)
        }

        removeTodo(todo){
            // splice >> remove a specific item
            // findIndex >> Find array position number of an item in array list
            let TodoIndex = this.database.findIndex(title => title === todo)
            console.log(TodoIndex) // -1 >> todo is not in array list (not found)
            return this.database.splice(TodoIndex,1)
        }


        // Static Methods 



}

let app = new TodoApplication()
app.addTodo('learn js')
app.addTodo('learn Angular')
app.removeTodo('learn js')
console.log(`Database : \n${app.displayTodos()}`);
/*



*/