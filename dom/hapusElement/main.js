// Ambil elemen html dengan selector
//ambil element input
const input = document.querySelector("#taskInput");
//ambil element button
const button = document.querySelector("#addButton");
//ambil element ul
const ul = document.querySelector("#taskList");

// Fungsi untuk menyimpan tugas ke local storage
function saveTaskToStorage(taskText) {
   let tasks = [];
   if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
   }
   tasks.push(taskText);
   localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fungsi untuk menghapus tugas dari local storage
function removeTaskFromStorage(taskText) {
   let tasks = [];
   if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks = tasks.filter((task) => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }
}

// Fungsi untuk memperbarui tugas di local storage
function updateTaskInStorage(taskText, completed) {
   let tasks = [];
   if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      const taskIndex = tasks.findIndex((task) => task === taskText);
      if (taskIndex !== -1) {
         tasks[taskIndex] = { text: taskText, completed: completed };
         localStorage.setItem("tasks", JSON.stringify(tasks));
      }
   }
}

// Fungsi untuk memuat tugas dari local storage saat halaman dimuat
function loadTasksFromStorage() {
   if (localStorage.getItem("tasks")) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.forEach((task) => {
         const newTask = document.createElement("li");
         newTask.textContent = task.text;
         if (task.completed) {
            newTask.classList.add("completed");
         }
         newTask.addEventListener("click", markTodo);
         const deleteButton = document.createElement("button");
         deleteButton.textContent = "Hapus";
         deleteButton.addEventListener("click", removeTodo);
         newTask.appendChild(deleteButton);
         taskList.appendChild(newTask);
      });
   }
}

// Buat fungsi untuk menghapus todo, jangan lupa untuk mangasih parameter
const removeTodo = (event) => {
   //buat variabel yang menargetkan induk element
   const parentElement = event.target.parentNode;
   //hapus anak dari element ul
   parentElement.remove();

   // Hapus tugas dari local storage
   removeTaskFromStorage(parentElement.textContent);
};

// Fungsi untuk menandai todo jika sudah selesai
const markTodo = (event) => {
   //targetkan element yang nantinya akan ada event
   const targetElement = event.target;
   //ketika nanti ada sebuah event, maka tambahkan kelas dari css
   targetElement.classList.toggle("completed");

   // Simpan perubahan ke local storage
   updateTaskInStorage(
      targetElement.textContent,
      targetElement.classList.contains("completed")
   );
};

// Fungsi untuk menambahkan todo
const addTodo = () => {
   //buat variable yang nilainya adalah yang user ketikkan di input
   const inputValue = input.value;
   //cek variable, apakah menghasilka nilai
   if (inputValue) {
      //buat buat element li
      const list = document.createElement("li");
      //isi element li dengan apa yang user ketik
      list.textContent = inputValue;
      //jika todo sudah selesai maka kita dapat mencoretnya
      list.addEventListener("click", markTodo);
      //buat element button
      const deleteButton = document.createElement("button");
      //isi tulisan di element button yang kita buat
      deleteButton.textContent = "X";
      //jadikan button saat diklik bisa menghapus item
      deleteButton.addEventListener("click", removeTodo);
      //jadikan button sebagai anak dari element li
      list.appendChild(deleteButton);
      //jadikan li sebagai anak dari element ul
      ul.appendChild(list);
      //setelah li sudah menjadi anak element, jadikan nilai inputnya menjadi kosong lagi
      input.value = "";

      // Simpan tugas ke local storage
      saveTaskToStorage(inputValue);
   }
};

// Tambahkan event listener untuk tombol button
button.addEventListener("click", addTodo);

// Mengecek apakah ada tugas yang tersimpan di local storage saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadTasksFromStorage);
