let button = document.querySelector("#button");
let paragraph = document.querySelector("#p");

button.addEventListener("click", () => {
   paragraph.classList.toggle("hidden");
});
