const todoList = [];

const addTodo = (text) => {
  const ids = todoList.map((todo) => todo.id);
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  todoList.push({
    id: maxId + 1,
    text,
    checked: false,
  });
  render();
};

const deleteTodo = (id) => {
  const index = todoList.findIndex((current) => current.id === id);
  todoList.splice(index, 1);
  render();
};

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.todo.value;
  if (!value) {
    return;
  }
  addTodo(value);
  addForm.todo.value = "";
});

// 入力値を描画する
const render = () => {
  const wrapper = document.querySelector("#todo-wrapper");
  wrapper.children[0].remove();
  const ul = document.createElement("ul");
  todoList.forEach((todo) => {
    const list = document.createElement("li");
    // 入力要素
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);
    const title = document.createElement("span");
    title.innerText = todo.text;
    label.appendChild(title);
    list.appendChild(label);
    // チェック
    input.addEventListener("change", (e) => {
      todo.checked = e.target.value;
    });
    // 削除ボタン
    const button = document.createElement("button");
    button.innerText = "削除";
    button.addEventListener("click", () => {
      deleteTodo(todo.id);
    });
    list.appendChild(button);
    ul.appendChild(list);
  });
  wrapper.appendChild(ul);
};
