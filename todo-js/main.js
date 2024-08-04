const addInput = document.getElementById("add-input")
const addButton = document.getElementById("add-button")

let todoList = []

addButton.addEventListener("click", () => {
    const value = addInput.value
    if(!value){
        return
    }
    addTodo(value)
})

const render = () => {
    const wrapper = document.getElementById("todo-wrapper");
    wrapper.children.forEach(child => {
        child
    })
    todoList.forEach(todo => {
        const list = document.createElement("li")
        const input = document.createElement("input")
        input.type = "checkbox"
        list.appendChild
        const title = document.createElement("span")
        title.innerText = todo.text
        list.appendChild(title)
        const button = document.createElement("button")
        button.innerText = "削除"
        button.addEventListener("click", () => {
            deleteTodo(todo.id)
        })
        list.appendChild(button)
        wrapper.appendChild(list)
    })
}

const addTodo = (text) => {
    const ids = todoList.map(todo => todo.id)
    const maxId = Math.max(...ids)
    todoList.push({
        id: maxId + 1,
        text,
        checked: false
    })
    render()
}

const deleteTodo = (id) => {
    todoList = todoList.filter(current => current.id !== todo.id)
    render()
}