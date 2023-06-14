// Mendapatkan elemen-elemen yang dibutuhkan
const button = document.querySelector("#addTaskBtn");
const input = document.querySelector("#taskInput");
const ul = document.querySelector("#taskList");

// Menambahkan event listener untuk menangani penambahan tugas
let addTask = () => {
   const taskText = input.value;

   if (taskText != "") {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteBtn">Hapus</button>
      `;
      ul.appendChild(taskItem);
      input.value = "";

      updateTaskCount();
   }
};

// Menambahkan event listener untuk menghapus tugas
input.addEventListener("click", deleteTask);

let deleteTask = (event) => {
   if (event.target.classList.contains("deleteBtn")) {
      const taskItem = event.target.parentElement;
      taskItem.remove();

      updateTaskCount();
   }
};

// Menambahkan event listener untuk menandai tugas sebagai selesai
input.addEventListener("click", toggleTask);

let toggleTask = (event) => {
   if (event.target.tagName === "SPAN") {
      event.target.classList.toggle("completed");

      updateTaskCount();
   }
};

// Mengupdate jumlah tugas yang belum selesai
let updateTaskCount = () => {
   const inCompleteTasks = ul.querySelectorAll("li:not(.completed)");
   const taskCount = document.querySelector("#taskCount");
   taskCount.textContent = inCompleteTasks.length;
};
