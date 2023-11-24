let todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("savedItems"));

const createTodo = (storageData) => {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.todo;
  }
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItems();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItems();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItems();
};

const keyCodeCheck = () => {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  liList.forEach((ele) => ele.remove());
  saveItems();
};

const saveItems = () => {
  const liList = todoList.childNodes;

  let items = [];
  liList.forEach((ele, idx) =>
    items.push({
      key: idx + 1,
      todo: ele.childNodes[1].textContent,
      complete: ele.classList.contains("complete"),
    })
  );

  items.length === 0
    ? localStorage.removeItem("savedItems")
    : localStorage.setItem("savedItems", JSON.stringify(items));
};

if (savedTodoList) {
  // console.log(savedTodoList);
  savedTodoList.forEach((ele) => createTodo(ele));
}
