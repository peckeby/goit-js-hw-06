const nametInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nametInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
  });