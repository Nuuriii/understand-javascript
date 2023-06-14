//panggil variable
const ul = document.querySelector("#taskList");
const input = document.querySelector("#newTaskInput");
const button = document.querySelector("#addTaskButton");

//function tambah todo
let addTodo = () => {
   const value = input.value;
   if (input.value != 0) {
      const newList = document.createElement("li");
      newList.classList.add("task");
      newList.innerHTML = `
      <span>${value}</span>
      <button id="delete">X</button>
      `;

      ul.appendChild(newList);
      input.value = "";
   }
};

button.addEventListener("click", addTodo);
