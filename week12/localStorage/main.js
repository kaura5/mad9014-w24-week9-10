//key = passcode
//value = JSON string
//localStorage.setItem(key, value);
//localStorage.getItem(key);
//localStorage.removeItem(key);
//localStorage.hasOwnProperty(key);
//localStorage.clear();

window.addEventListener("DOMContentLoaded", function () {
  //grab the required elements
  let btn = document.getElementById("newTaskButton");
  let userInput = document.getElementById("newTask");
  let todoDOM = document.getElementById("todoList");
  let todoList = [];

  let key = "kaura5-com.algonquincollege-todo-list";

  btn.addEventListener("click", handleNewTask);

  //grab if list is in the localstorage
  getData();
  displayTask();

  function getData() {
    let data = localStorage.getItem(key);
    if (data) {
      todoList = JSON.parse(data);
    } else {
      todoList = [];
    }
  }

  function saveData() {
    localStorage.setItem(key, JSON.stringify(todoList));
  }

  function handleNewTask(ev) {
    ev.preventDefault();
    let newTask = userInput.value.trim();

    if (newTask) {
      userInput.value = "";
      todoList.push(newTask);
      //   //we create an object
      //   let task ={
      //     name: "newTask"
      //   }
      //   ["", "", ""]
      //   [{}, {},{}]
      saveData();
      displayTask();
    }
  }

  function displayTask() {
    todoDOM.innerHTML = "";

    let df = new DocumentFragment();
    todoList.forEach(function (item, index) {
      let li = document.createElement("li");
      li.classList.add("todoItem");
      li.textContent = item;

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("data-index", index);
      deleteButton.classList.add("deleteButton");
      li.append(deleteButton);

      df.append(li);
    });
    todoDOM.addEventListener("click", deleteItem);
    todoDOM.append(df);
  }

  function deleteItem(ev) {
    ev.preventDefault();
    if (ev.target.classList.contains("deleteButton")) {
      console.log("on button");
      let index = ev.target.getAttribute("data-index");
      if (index) {
        console.log(index);
        todoList.splice(index, 1);
        saveData();
        displayTask();
      }
    } else {
      console.log("click was outside the button");
    }
  }
});
