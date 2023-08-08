const toggle = document.querySelectorAll(".faq-toggle");
console.log(toggle);

toggle.forEach((button) => {
  console.log(button.parentNode);
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
