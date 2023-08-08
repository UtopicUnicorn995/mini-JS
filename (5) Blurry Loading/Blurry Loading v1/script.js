const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = 1.5 - 0.02 * load;
  bg.style.filter = `blur(${30 - 0.3 * load}px)`;
  //   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

console.log(bg);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
