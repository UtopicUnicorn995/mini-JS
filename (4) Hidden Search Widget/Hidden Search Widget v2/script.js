const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener("click", () => {
  console.log("asd");
  search.classList.toggle("active");
});
