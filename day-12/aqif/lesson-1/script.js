const formTodos = document.querySelector("#todo");
const listTodos = document.querySelector("#todoList");

// start id
let id = 0;

function deleteTodoItem(id) {
  // find todo item
  const todoItem = document.querySelector(`li[data-id="${id}"]`);
  if (!todoItem) {
    alert("Todo item not found");
    return;
  }
  // delete todo item
  todoItem.remove();
}

function editTodoItem(id) {
  // find todo item
  const todoItem = document.querySelector(`li[data-id="${id}"]`);
  if (!todoItem) {
    alert("Todo item not found");
    return;
  }
  let newList = prompt("insert new todo item");
  todoItem.childNodes[0].textContent = newList;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const todo = formData.get("text");
  if (todo === "") {
    return;
  }
  const todoItem = document.createElement("li");
  todoItem.dataset.id = id;

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    deleteTodoItem(todoItem.dataset.id);
  });

  // edir button
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
    editTodoItem(todoItem.dataset.id);
  });

  // up button
  const upButton = document.createElement("button");
  upButton.innerText = "Up";

  // down button
  const downButton = document.createElement("button");
  downButton.innerText = "Down";

  todoItem.innerText = todo;
  todoItem.appendChild(deleteButton);
  todoItem.appendChild(editButton);
  todoItem.appendChild(upButton);
  todoItem.appendChild(downButton);

  listTodos.appendChild(todoItem);
  event.target.reset();

  // every submite id will be increase by 1
  id++;
}

formTodos.addEventListener("submit", formSubmitHandler);
