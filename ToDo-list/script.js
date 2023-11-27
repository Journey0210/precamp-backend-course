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
    `https://api.openweathermap.org/data/2.5/weather?lat=${positionObj.latitude}&lon=${positionObj.longitude}&appid=fffcdc2e4955456dba443b33d52b5e20`
  )
    .then((res) => res.json()) //response로 body값만 내려오는 것이 아니라 header까지 포함한 데이터가 들어오는 경우 JSON.parse() 대신 .josn()을 사용한다.
    .then((json) => console.log(json.name, json.weather[0].description))
    .catch((err) => console.log(err)); //error가 발생하면 catch로 넘어오고, 정상값이 내려오면 catch로 내려오지 않는다.
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

// const promiseTest = function () {
//   return new Promise((resolver, reject) => {
//     setTimeout(() => {
//       resolver(100);
//     }, 2000);
//   });
// };

// console.log(promiseTest().then((res) => console.log(res)));
