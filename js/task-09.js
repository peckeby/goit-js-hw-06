function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body")
const btnColor = document.querySelector("button.change-color");

btnColor.addEventListener("click", changeColor)

function changeColor () {
  body.setAttribute("style", `background-color: ${getRandomHexColor()}`);
}

