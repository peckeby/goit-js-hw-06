function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = (document.querySelector("#controls")).firstElementChild;
const boxes = document.querySelector("#boxes");

const changeSize = (nams, nam) => {
  let i = 30;
  const idx = nams.indexOf(nam);
  // console.log(idx);
  if (idx > 0){
    i = 30 + (10*idx);
    return i;
  }
  return i;
};


const createBoxes = () => {
  const nums = [];
  for (let i = 1; i <= input.value; i+=1){
    nums.push(i);
  };
  console.log(nums);

  const markup = nums
    .map((num) => `<div style="background-color: ${getRandomHexColor()}; width: ${changeSize(nums, num)}px; height: ${changeSize(nums, num)}px">${num}</div>`)
    .join("");

    boxes.insertAdjacentHTML ("beforeend", markup);
    console.log(boxes.children);
  };


btnCreate.addEventListener("click", createBoxes);


const destroyBoxes = () => {
  while (boxes.hasChildNodes()) {
    boxes.removeChild(boxes.firstChild);
  }
}

btnDestroy.addEventListener("click", destroyBoxes);





