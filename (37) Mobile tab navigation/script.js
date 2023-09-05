const contents = document.querySelectorAll(".content");
const listsEl = document.querySelectorAll("li");

listsEl.forEach((list, index) => {
  list.addEventListener("click", () => {
    removeActive(index);
    changeScreen(index);
  });
});

function changeScreen(screen) {
  contents.forEach((content, index) => {
    content.classList.remove("show");
    if (screen == index) {
      content.classList.add("show");
    }
  });
}

function removeActive(index) {
  listsEl.forEach((list, idx) => {
    if (idx != index) {
      list.classList.remove("active");
    } else {
      list.classList.add("active");
    }
  });
}
