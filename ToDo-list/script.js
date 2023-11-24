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

const weatherSearch = (positionObj) => {
  // https(protocol)://api.openweathermap.org(domain)/data/3.0/onecall(path)?lat={lat}&lon={lon}&exclude={part}&appid={API key}(parameter)

  const openWeatherRes = fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${positionObj.latitude}&lon=${positionObj.longitude}&appid=fffcdc2e4955456dba443b33d52b5e20`
  );
  console.log(openWeatherRes);
};
const accessToGeo = (position) => {
  const positionObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  weatherSearch(positionObj);
};

const askForLocation = () => {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};

askForLocation();
