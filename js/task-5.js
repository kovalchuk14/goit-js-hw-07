function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");

button.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  const body = document.querySelector("body");
  const span = document.querySelector(".color");

  body.style.backgroundColor = color;
  span.textContent = color;
}