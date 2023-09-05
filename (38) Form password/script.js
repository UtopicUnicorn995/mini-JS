const bg = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  console.log(20 - input.length);
  const blurValue = 20 - input.length * 2;
  bg.style.filter = `blur(${blurValue}px)`;
});
