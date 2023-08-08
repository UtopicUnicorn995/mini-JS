const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

const panels = document.querySelectorAll(".panel");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

close.addEventListener("click", () => container.classList.remove("show-nav"));

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActive();
    panel.classList.add("active");
    if (Array.from(panel.classList).includes("theme-0")) {
      container.classList.remove("mountain");
      container.classList.add("wood");
      container.classList.remove("dark");
      container.classList.remove("puppies");
      container.classList.remove("sunset");
      console.log("wood");
    } else if (Array.from(panel.classList).includes("theme-1")) {
      container.classList.add("mountain");
      container.classList.remove("wood");
      container.classList.remove("dark");
      container.classList.remove("puppies");
      container.classList.remove("sunset");
      console.log("mountain");
    } else if (Array.from(panel.classList).includes("theme-2")) {
      container.classList.remove("mountain");
      container.classList.remove("wood");
      container.classList.remove("dark");
      container.classList.add("sunset");
      container.classList.remove("puppies");
      console.log("sunset");
    } else if (Array.from(panel.classList).includes("theme-3")) {
      container.classList.remove("mountain");
      container.classList.remove("wood");
      container.classList.add("dark");
      container.classList.remove("sunset");
      container.classList.remove("puppies");
      console.log("dark");
    } else {
      container.classList.remove("mountain");
      container.classList.remove("wood");
      container.classList.remove("dark");
      container.classList.remove("sunset");
      container.classList.add("puppies");
      console.log("puppies");
    }
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
