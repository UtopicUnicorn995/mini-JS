const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

leftSide.addEventListener("mouseenter", () => {
  leftSide.classList.add("active");
  rightSide.classList.add("smaller");
});

leftSide.addEventListener("mouseleave", () => {
  leftSide.classList.remove("active");
  rightSide.classList.remove("smaller");
});

rightSide.addEventListener("mouseenter", () => {
  rightSide.classList.add("active");
  leftSide.classList.add("smaller");
});

rightSide.addEventListener("mouseleave", () => {
  rightSide.classList.remove("active");
  leftSide.classList.remove("smaller");
});
