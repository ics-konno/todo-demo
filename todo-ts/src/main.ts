const todoList: {id: number, text:string, checked: boolean}[] = [];

const addTodo = (text: string) => {
  const ids = todoList.map((todo) => todo.id);
  const maxId = ids.length > 0 ? Math.max(...ids) : 0;
  todoList.push({
    id: maxId + 1,
    text,
    checked: false,
  });
  render();
};

const deleteTodo = (id: number) => {
  const index = todoList.findIndex((current) => current.id === id);
  todoList.splice(index, 1);
  render();
};

const addForm = document.querySelector<HTMLFormElement>("#add-form");
addForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(addForm)
  const value = formData.get("todo")
  if (typeof value !== "string" || !value) {
    return;
  }
  addTodo(value);
  addForm.todo.value = "";
});

// 入力値を描画する
const render = () => {
  const wrapper = document.querySelector("#todo-wrapper");
  wrapper?.children[0].remove();
  const ul = document.createElement("ul");
  todoList.forEach((todo) => {
    const list = document.createElement("li");
    // 入力要素
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.checked
    label.appendChild(input);
    const title = document.createElement("span");
    title.innerText = todo.text;
    label.appendChild(title);
    list.appendChild(label);
    // チェック
    input.addEventListener("change", (e) => {
      if(!(e.target instanceof HTMLInputElement)){
        return
      }
      todo.checked = e.target.checked;
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
  wrapper?.appendChild(ul);
};
